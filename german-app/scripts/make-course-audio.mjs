#!/usr/bin/env node
// Builds the course audio: one MP3 per lesson, plus a manifest with the start
// time of every lesson step (the player uses it for "next / previous").
//
//   npm run course:audio                          # all lessons (Google voices if GOOGLE_TTS_API_KEY is set)
//   npm run course:audio -- --only m00,m01        # just these modules
//   npm run course:audio -- --voice both          # female (default), male, or both
//   npm run course:audio -- --engine windows      # free placeholder voices (Windows only, robotic — testing only)
//
// Engines (picked automatically: google key, then local voices if set up, then gemini key, then windows)
//   local   : free, offline voices on this computer — Telugu: Meta MMS-TTS, German: Piper
//             "thorsten-high". No account, no limits. One-time setup: see scripts/tts_local.py.
//   gemini  : Gemini API text-to-speech (free tier, no card): GEMINI_API_KEY from
//             https://aistudio.google.com/apikey. Telugu + German, natural voices.
//             The free tier has a daily request limit: if it is reached, the script
//             saves what it made and you simply run it again the next day — it
//             continues where it stopped. Optional: GEMINI_TTS_MODEL, GEMINI_TTS_VOICE,
//             GEMINI_TTS_RPM (requests per minute, default 8).
//   google  : Google Cloud Text-to-Speech, preferring the human-sounding "Chirp 3 HD"
//             voices (Telugu te-IN + German de-DE). Needs GOOGLE_TTS_API_KEY in .env.local.
//             Optional overrides: GOOGLE_TTS_VOICE_DE, GOOGLE_TTS_VOICE_TE (exact voice names).
//   windows : the computer's built-in voices. They can't speak Telugu or German, so
//             they read the Telugu-in-English-letters text. Only for testing the player.
//
// Text: German inside {curly braces} is spoken by the German voice; everything
// else by the Telugu teacher voice. Speech is cached in scripts/.audio-cache.

import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Mp3Encoder } from "@breezystack/lamejs";
import { A1_SYLLABUS } from "../src/content/a1/syllabus.ts";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CACHE_DIR = join(ROOT, "scripts", ".audio-cache");
const AUDIO_DIR = join(ROOT, "public", "audio", "a1");
const LESSONS_DIR = join(ROOT, "src", "content", "a1", "lessons");
const MANIFEST = join(ROOT, "src", "content", "a1", "audio-manifest.json");

const SAMPLE_RATE = 24000;
// Speech only: small files for mobile data. Do NOT use 32 kbps at 24 kHz: the
// @breezystack/lamejs encoder then writes silence after the first frames
// (verified by decoding: 24 kHz works at 40/48/64 kbps, fails only at 32).
const MP3_KBPS = 40;

// ---------------------------------------------------------------- arguments
const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const LOCAL_PYTHON = join(ROOT, ".venv-tts", "Scripts", "python.exe");
const engine =
  arg("engine") ??
  (process.env.GOOGLE_TTS_API_KEY ? "google" : existsSync(LOCAL_PYTHON) ? "local" : process.env.GEMINI_API_KEY ? "gemini" : "windows");
const voiceArg = arg("voice") ?? "female";
const genders = voiceArg === "both" ? ["female", "male"] : [voiceArg];
const only = arg("only")?.split(",").map((s) => s.trim());
if (!["google", "local", "gemini", "windows"].includes(engine)) fail(`Unknown --engine ${engine} (use google, local, gemini or windows)`);
if (engine === "local" && !existsSync(LOCAL_PYTHON)) fail("Local voices are not set up — see scripts/tts_local.py.");
if (!genders.every((g) => g === "female" || g === "male")) fail(`Unknown --voice ${voiceArg}`);
if (engine === "google" && !process.env.GOOGLE_TTS_API_KEY) fail("GOOGLE_TTS_API_KEY is not set (put it in .env.local).");
if (engine === "gemini" && !process.env.GEMINI_API_KEY) fail("GEMINI_API_KEY is not set (put it in .env.local).");
if (engine === "windows" && process.platform !== "win32") fail("The windows engine only runs on Windows.");

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// ------------------------------------------------------------------ content
const LESSONS = new Map();
for (const f of readdirSync(LESSONS_DIR).filter((f) => /^m\d+\.ts$/.test(f)).sort()) {
  const mod = await import(pathToFileURL(join(LESSONS_DIR, f)).href);
  for (const value of Object.values(mod)) {
    if (Array.isArray(value)) for (const lesson of value) LESSONS.set(lesson.id, lesson);
  }
}

/** Splits "Telugu {German} Telugu" into spoken parts. */
function parts(text, lang = "te") {
  return text
    .split(/\{([^}]+)\}/)
    .map((t, i) => ({ lang: i % 2 ? "de" : lang, text: t.trim() }))
    .filter((p) => p.text && /[\p{L}\p{N}]/u.test(p.text));
}

// The local Telugu voice reads only Telugu script: numbers and English-letter
// abbreviations are spelled out (Telugu-English style, like the lessons).
const TE_WORDS = {
  A1: "ఏ వన్", ICE: "ఐ సీ ఈ", U2: "యూ టూ", L: "ఎల్", M: "ఎమ్", "100": "హండ్రెడ్", "26": "ట్వెంటీ సిక్స్",
};
const TE_NUMBERS = ["జీరో", "వన్", "టూ", "త్రీ", "ఫోర్", "ఫైవ్", "సిక్స్", "సెవెన్", "ఎయిట్", "నైన్", "టెన్",
  "ఎలెవెన్", "ట్వెల్వ్", "థర్టీన్", "ఫోర్టీన్", "ఫిఫ్టీన్", "సిక్స్‌టీన్", "సెవెన్‌టీన్", "ఎయిటీన్", "నైన్‌టీన్", "ట్వెంటీ"];
function speakableTelugu(text) {
  return text
    .replace(/[A-Za-z0-9]+/g, (w) => TE_WORDS[w] ?? (/^\d+$/.test(w) ? TE_NUMBERS[Number(w)] : undefined) ?? w)
    .replace(/[“”"']/g, "");
}

// ------------------------------------------------------------ lesson script
function lessonScript(module, lessonIndex, lesson) {
  const steps = [];
  const pause = (s) => steps.push({ type: "pause", s });
  /** Teacher speech from a Tri: Telugu (or Telugu-in-English-letters for placeholder voices). */
  const teach = (tri) => {
    if (engine === "gemini") {
      // Gemini reads mixed Telugu + German in one go (fewer requests on the free tier).
      steps.push({ type: "say", lang: "mix", text: tri.te.replace(/[{}]/g, ""), rate: "te" });
      pause(0.25);
      return;
    }
    const text = engine === "windows" ? tri.teLatn : tri.te;
    for (const p of parts(text)) {
      const spoken = engine === "local" && p.lang === "te" ? speakableTelugu(p.text) : p.text;
      steps.push({ type: "say", lang: p.lang, text: spoken, rate: p.lang === "de" ? "de" : "te" });
      pause(0.25);
    }
  };
  // Gemini: one German recording per phrase, reused for the slow and the repeat parts.
  const german = (text, rate) => steps.push({ type: "say", lang: "de", text, rate: engine === "gemini" ? "de" : rate });
  const meta = A1_SYLLABUS.find((m) => m.id === module.id);
  const syl = meta.lessons[lessonIndex];

  steps.push({ type: "cue", id: "intro" });
  if (engine === "gemini") {
    const intro = lessonIndex === 0 ? `మాడ్యూల్ ${module.number}. ${module.titleDe}. ${module.summary.te} ` : "";
    teach({ te: `${intro}లెసన్ ${lessonIndex + 1}. ${syl.titleDe}.`, teLatn: "" });
    pause(1.2);
  } else if (lessonIndex === 0) {
    teach({ te: `మాడ్యూల్ ${module.number}.`, teLatn: `Module ${module.number}.` });
    german(module.titleDe, "de");
    pause(0.5);
    teach(module.summary);
    pause(1.0);
  }
  if (engine !== "gemini") {
    teach({ te: `లెసన్ ${lessonIndex + 1}.`, teLatn: `Lesson ${lessonIndex + 1}.` });
    german(syl.titleDe, "de");
    pause(1.2);
  }

  lesson.steps.forEach((step, i) => {
    steps.push({ type: "cue", id: `s${i}` });
    if ("say" in step) {
      teach(step.say);
      pause(0.8);
      return;
    }
    steps.push({ type: "chime" });
    pause(0.5);
    german(step.de, "deSlow");
    pause(0.9);
    if (engine === "gemini") {
      teach({ te: step.tip ? `${step.meaning.te} ${step.tip.te}` : step.meaning.te, teLatn: "" });
      pause(0.5);
    } else {
      teach(step.meaning);
      pause(0.5);
      if (step.tip) {
        teach(step.tip);
        pause(0.5);
      }
    }
    // Twice at normal speed, each followed by time to say it aloud.
    for (let r = 0; r < 2; r++) {
      german(step.de, "de");
      steps.push({ type: "repeatPause" });
    }
    pause(0.6);
  });

  if (lessonIndex === meta.lessons.length - 1) {
    steps.push({ type: "cue", id: "outro" });
    teach({
      te: `మాడ్యూల్ ${module.number} అయిపోయింది. సూపర్!`,
      teLatn: `Module ${module.number} ayipoyindi. Super!`,
    });
    pause(1.0);
  }
  return steps;
}

// ------------------------------------------------------------------ engines
const GOOGLE_RATE = { deSlow: 0.8, de: 0.95, te: 1.0 };
const WINDOWS_RATE = { deSlow: -3, de: -1, te: 0 };
const WINDOWS_VOICES = {
  female: ["Microsoft Heera", "Microsoft Zira", "Microsoft Zira Desktop"],
  male: ["Microsoft Ravi", "Microsoft David", "Microsoft Mark", "Microsoft David Desktop"],
};
const GOOGLE_LANG = { de: "de-DE", te: "te-IN" };
let googleRateSupported = true;

function cacheKey(job) {
  return createHash("sha1")
    .update([engine, engine === "gemini" ? GEMINI_MODEL : "", job.voice, job.lang, job.rate, job.text].join("\u0000"))
    .digest("hex")
    .slice(0, 16);
}

/** Picks a Google voice, preferring the most human-sounding voice types. */
async function pickGoogleVoice(lang, gender) {
  const override = process.env[`GOOGLE_TTS_VOICE_${lang.toUpperCase()}`];
  if (override) return override;
  const res = await fetch(`https://texttospeech.googleapis.com/v1/voices?languageCode=${GOOGLE_LANG[lang]}`, {
    headers: { "X-Goog-Api-Key": process.env.GOOGLE_TTS_API_KEY },
  });
  if (!res.ok) fail(`Google voices list failed (${res.status}): ${await res.text()}`);
  const { voices = [] } = await res.json();
  const ofGender = voices.filter(
    (v) => v.ssmlGender === gender.toUpperCase() && v.languageCodes.includes(GOOGLE_LANG[lang]),
  );
  for (const type of ["Chirp3-HD", "Chirp-HD", "Neural2", "Wavenet", "Standard"]) {
    const v = ofGender.find((x) => x.name.includes(`-${type}-`));
    if (v) return v.name;
  }
  if (ofGender[0]) return ofGender[0].name;
  fail(`No ${gender} Google voice found for ${GOOGLE_LANG[lang]}.`);
}

async function googleSynthesize(job, withRate) {
  const audioConfig = { audioEncoding: "LINEAR16", sampleRateHertz: SAMPLE_RATE };
  if (withRate) audioConfig.speakingRate = GOOGLE_RATE[job.rate];
  return fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": process.env.GOOGLE_TTS_API_KEY },
    body: JSON.stringify({ input: { text: job.text }, voice: { languageCode: GOOGLE_LANG[job.lang], name: job.voice }, audioConfig }),
  });
}

async function synthesizeGoogle(jobs) {
  let chars = 0;
  const queue = [...jobs];
  async function worker() {
    for (let job = queue.shift(); job; job = queue.shift()) {
      let res = await googleSynthesize(job, googleRateSupported);
      if (!res.ok && googleRateSupported && res.status === 400) {
        const body = await res.text();
        if (/speaking.?rate|pace/i.test(body)) {
          googleRateSupported = false; // some voice types don't support speed control
          console.log("\n  (this voice ignores speed settings — using normal speed)");
          res = await googleSynthesize(job, false);
        } else fail(`Google synthesis failed (400) for "${job.text}": ${body}`);
      }
      if (!res.ok) fail(`Google synthesis failed (${res.status}) for "${job.text}": ${await res.text()}`);
      const { audioContent } = await res.json();
      writeFileSync(job.out, Buffer.from(audioContent, "base64"));
      chars += job.text.length;
      process.stdout.write(".");
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  process.stdout.write("\n");
  console.log(`  Google TTS characters used: ${chars.toLocaleString()}`);
}

const GEMINI_MODEL = process.env.GEMINI_TTS_MODEL || "gemini-3.8-flash-tts";
const GEMINI_VOICES = { female: "Kore", male: "Puck" };
const GEMINI_STYLE = {
  de: "A friendly German teacher speaking clearly and a little slowly, with natural German pronunciation, for a beginner.",
  mix: "A warm, friendly Telugu teacher explaining to a student at a natural, relaxed pace. Pronounce the German words with German pronunciation.",
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Wraps headerless 16-bit mono PCM in a WAV header. */
function wavFromPcm(pcm, rate = SAMPLE_RATE) {
  const h = Buffer.alloc(44);
  h.write("RIFF", 0);
  h.writeUInt32LE(36 + pcm.length, 4);
  h.write("WAVEfmt ", 8);
  h.writeUInt32LE(16, 16);
  h.writeUInt16LE(1, 20);
  h.writeUInt16LE(1, 22);
  h.writeUInt32LE(rate, 24);
  h.writeUInt32LE(rate * 2, 28);
  h.writeUInt16LE(2, 32);
  h.writeUInt16LE(16, 34);
  h.write("data", 36);
  h.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([h, pcm]);
}

/** Finds the base64 audio in an Interactions API response. */
function geminiAudio(json) {
  const fromSteps = (json.steps ?? [])
    .filter((st) => st.type === "model_output")
    .flatMap((st) => st.content ?? [])
    .filter((c) => c.type === "audio" && c.data);
  if (fromSteps.length) return fromSteps.at(-1).data;
  return json.output_audio?.data ?? json.outputAudio?.data;
}

/**
 * Gemini free tier: requests go one at a time, spaced to stay under the
 * per-minute limit. When the daily limit is reached it stops; everything made
 * so far is cached, and the next run continues from there.
 * Returns true when all jobs are done.
 */
async function synthesizeGemini(jobs) {
  const rpm = Math.max(1, Number(process.env.GEMINI_TTS_RPM) || 8);
  const gap = Math.ceil(60000 / rpm);
  let done = 0;
  for (const job of jobs) {
    let attempt = 0;
    for (;;) {
      const started = Date.now();
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
        body: JSON.stringify({
          model: GEMINI_MODEL,
          input: [
            {
              type: "user_input",
              content: [
                { type: "text", text: job.text, annotations: [{ type: "speech_metadata", style: GEMINI_STYLE[job.lang] ?? GEMINI_STYLE.mix }] },
              ],
            },
          ],
          response_format: { type: "audio" },
          generation_config: { speech_config: [{ voice: job.voice }] },
        }),
      });
      if (res.ok) {
        const data = geminiAudio(await res.json());
        if (!data) fail(`Gemini returned no audio for "${job.text}".`);
        const buf = Buffer.from(data, "base64");
        writeFileSync(job.out, buf.toString("ascii", 0, 4) === "RIFF" ? buf : wavFromPcm(buf));
        done++;
        process.stdout.write(`\r  made ${done}/${jobs.length}`);
        await sleep(Math.max(0, gap - (Date.now() - started)));
        break;
      }
      const body = await res.text();
      if (res.status === 429) {
        if (/per.?day|PerDay|daily/i.test(body) || attempt >= 5) {
          process.stdout.write("\n");
          console.log(`  ⏸ Free daily limit reached after ${done} new recordings. Run the same command again tomorrow — it continues from here.`);
          return false;
        }
        attempt++;
        const wait = Number(body.match(/"retryDelay":\s*"(\d+)/)?.[1] ?? 60) * 1000;
        process.stdout.write(`\n  (per-minute limit — waiting ${Math.round(wait / 1000)} s)\n`);
        await sleep(wait);
        continue;
      }
      if (res.status >= 500 && attempt < 3) {
        attempt++;
        await sleep(5000);
        continue;
      }
      fail(`Gemini TTS failed (${res.status}) for "${job.text}":\n${body.slice(0, 600)}`);
    }
  }
  process.stdout.write("\n");
  return true;
}

function synthesizeLocal(jobs) {
  const jobsFile = join(tmpdir(), "deutsch-setu-local-tts-jobs.json");
  writeFileSync(jobsFile, JSON.stringify(jobs.map((j) => ({ lang: j.lang, rate: j.rate, text: j.text, out: j.out }))), "utf8");
  const r = spawnSync(LOCAL_PYTHON, [join(ROOT, "scripts", "tts_local.py"), jobsFile], {
    stdio: ["ignore", "inherit", "inherit"],
    env: { ...process.env, PYTHONIOENCODING: "utf-8", HF_HUB_DISABLE_SYMLINKS_WARNING: "1", TRANSFORMERS_VERBOSITY: "error" },
  });
  rmSync(jobsFile, { force: true });
  if (r.status !== 0) fail("Local speech failed (see the error above).");
}

// PowerShell 7 sees the newer Windows voices; Windows PowerShell 5.1 only the old ones.
const POWERSHELL = spawnSync("pwsh", ["-NoProfile", "-Command", "exit 0"]).status === 0 ? "pwsh" : "powershell.exe";

function synthesizeWindows(jobs) {
  const ps1 = join(tmpdir(), "deutsch-setu-tts.ps1");
  const jobsFile = join(tmpdir(), "deutsch-setu-tts-jobs.json");
  writeFileSync(
    ps1,
    `param([string]$JobsPath)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
$jobs = Get-Content -Raw -Encoding UTF8 $JobsPath | ConvertFrom-Json
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$fmt = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(${SAMPLE_RATE}, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
foreach ($j in $jobs) {
  $s.SelectVoice($j.voice)
  $s.Rate = [int]$j.rate
  $s.SetOutputToWaveFile($j.out, $fmt)
  $s.Speak($j.text)
  $s.SetOutputToNull()
}
$s.Dispose()
`,
    "utf8",
  );
  writeFileSync(jobsFile, JSON.stringify(jobs.map((j) => ({ voice: j.voice, rate: WINDOWS_RATE[j.rate], out: j.out, text: j.text }))), "utf8");
  const r = spawnSync(POWERSHELL, ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", ps1, jobsFile], {
    encoding: "utf8",
    stdio: ["ignore", "inherit", "pipe"],
  });
  rmSync(jobsFile, { force: true });
  if (r.status !== 0) fail(`Windows speech failed:\n${r.stderr}`);
}

function installedWindowsVoices() {
  const r = spawnSync(
    POWERSHELL,
    ["-NoProfile", "-Command", "Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).GetInstalledVoices() | % { $_.VoiceInfo.Name }"],
    { encoding: "utf8" },
  );
  return r.stdout.split(/\r?\n/).filter(Boolean);
}

// -------------------------------------------------------------------- audio
function readWav(path) {
  const buf = readFileSync(path);
  let rate = SAMPLE_RATE;
  let channels = 1;
  let offset = 12;
  while (offset + 8 <= buf.length) {
    const id = buf.toString("ascii", offset, offset + 4);
    const size = buf.readUInt32LE(offset + 4);
    if (id === "fmt ") {
      channels = buf.readUInt16LE(offset + 10);
      rate = buf.readUInt32LE(offset + 12);
    } else if (id === "data") {
      const end = Math.min(buf.length, offset + 8 + size);
      const frames = Math.floor((end - offset - 8) / (2 * channels));
      let pcm = new Int16Array(frames);
      for (let i = 0; i < frames; i++) pcm[i] = buf.readInt16LE(offset + 8 + i * 2 * channels);
      if (rate !== SAMPLE_RATE) pcm = resample(pcm, rate, SAMPLE_RATE);
      return trimSilence(pcm);
    }
    offset += 8 + size + (size % 2);
  }
  fail(`No audio data in ${path}`);
}

function resample(pcm, from, to) {
  const out = new Int16Array(Math.round((pcm.length * to) / from));
  for (let i = 0; i < out.length; i++) {
    const x = (i * from) / to;
    const i0 = Math.floor(x);
    const i1 = Math.min(i0 + 1, pcm.length - 1);
    out[i] = Math.round(pcm[i0] + (pcm[i1] - pcm[i0]) * (x - i0));
  }
  return out;
}

function trimSilence(pcm) {
  const threshold = 300;
  let a = 0;
  let b = pcm.length - 1;
  while (a < b && Math.abs(pcm[a]) < threshold) a++;
  while (b > a && Math.abs(pcm[b]) < threshold) b--;
  const pad = Math.round(SAMPLE_RATE * 0.05);
  return pcm.slice(Math.max(0, a - pad), Math.min(pcm.length, b + pad));
}

/** A soft two-note chime before each new German word or sentence. */
function chime() {
  return concat(
    [
      [880, 0.12],
      [1318.5, 0.2],
    ].map(([freq, dur]) => {
      const n = Math.round(SAMPLE_RATE * dur);
      const out = new Int16Array(n);
      for (let i = 0; i < n; i++) {
        const env = Math.min(1, i / (SAMPLE_RATE * 0.01)) * Math.exp((-4 * i) / n);
        out[i] = Math.round(Math.sin((2 * Math.PI * freq * i) / SAMPLE_RATE) * env * 6000);
      }
      return out;
    }),
  );
}

const silence = (s) => new Int16Array(Math.round(SAMPLE_RATE * s));

function concat(chunks) {
  const out = new Int16Array(chunks.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of chunks) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

function encodeMp3(pcm) {
  const enc = new Mp3Encoder(1, SAMPLE_RATE, MP3_KBPS);
  const chunks = [];
  for (let i = 0; i < pcm.length; i += 1152 * 8) {
    const out = enc.encodeBuffer(pcm.subarray(i, i + 1152 * 8));
    if (out.length) chunks.push(Buffer.from(out));
  }
  const end = enc.flush();
  if (end.length) chunks.push(Buffer.from(end));
  return Buffer.concat(chunks);
}

// --------------------------------------------------------------------- main
mkdirSync(CACHE_DIR, { recursive: true });
const work = A1_SYLLABUS.flatMap((module) =>
  module.lessons
    .map((l, i) => ({ module, index: i, lesson: LESSONS.get(l.id) }))
    .filter((x) => x.lesson && (!only || only.some((o) => module.id.startsWith(o)))),
);
if (!work.length) fail("No lessons with content matched.");
const windowsInstalled = engine === "windows" ? installedWindowsVoices() : [];

const previous = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
const out = { engine, voices: previous.engine === engine ? (previous.voices ?? {}) : {} };

for (const gender of genders) {
  console.log(`▲ ${engine} · ${gender} voice · ${work.length} lessons`);
  const voiceFor = {};
  for (const lang of ["de", "te"]) {
    voiceFor[lang] =
      engine === "local"
        ? { de: "piper-thorsten-high", te: "mms-tts-tel" }[lang]
        : engine === "gemini"
        ? process.env.GEMINI_TTS_VOICE || GEMINI_VOICES[gender]
        : engine === "google"
        ? await pickGoogleVoice(lang, gender)
        : (WINDOWS_VOICES[gender].find((v) => windowsInstalled.includes(v)) ?? windowsInstalled[0]);
    if (!voiceFor[lang]) fail("No speech voice found.");
  }
  voiceFor.mix = voiceFor.te; // Gemini: Telugu teacher lines with German words inside
  console.log(`  voices: de=${voiceFor.de}  te=${voiceFor.te}`);

  const scripts = work.map((w) => ({ ...w, steps: lessonScript(w.module, w.index, w.lesson) }));
  const jobs = new Map();
  for (const { steps } of scripts) {
    for (const step of steps) {
      if (step.type !== "say") continue;
      const job = { lang: step.lang, rate: step.rate, voice: voiceFor[step.lang], text: step.text };
      job.key = cacheKey(job);
      job.out = join(CACHE_DIR, `${job.key}.wav`);
      step.key = job.key;
      jobs.set(job.key, job);
    }
  }
  const missing = [...jobs.values()].filter((j) => !existsSync(j.out));
  console.log(`  sentences: ${jobs.size} (${missing.length} new)`);
  if (missing.length) {
    if (engine === "local") synthesizeLocal(missing);
    else if (engine === "gemini") await synthesizeGemini(missing);
    else if (engine === "google") await synthesizeGoogle(missing);
    else synthesizeWindows(missing);
  }

  const dir = join(AUDIO_DIR, gender);
  mkdirSync(dir, { recursive: true });
  const chimePcm = chime();
  const entry = out.voices[gender] ?? { voices: voiceFor, lessons: {} };
  entry.voices = voiceFor;
  let waiting = 0;
  for (const { lesson, steps } of scripts) {
    if (steps.some((st) => st.type === "say" && !existsSync(join(CACHE_DIR, `${st.key}.wav`)))) {
      waiting++; // not all sentences recorded yet (e.g. free daily limit) — next run
      continue;
    }
    const chunks = [];
    const cues = [];
    let length = 0;
    let lastSpeech = 0;
    const push = (pcm) => {
      chunks.push(pcm);
      length += pcm.length;
    };
    for (const step of steps) {
      if (step.type === "say") {
        const pcm = readWav(join(CACHE_DIR, `${step.key}.wav`));
        lastSpeech = pcm.length / SAMPLE_RATE;
        push(pcm);
      } else if (step.type === "pause") push(silence(step.s));
      else if (step.type === "repeatPause") push(silence(Math.max(2, lastSpeech * 1.3 + 0.8)));
      else if (step.type === "chime") push(chimePcm);
      else if (step.type === "cue") cues.push({ id: step.id, start: +(length / SAMPLE_RATE).toFixed(2) });
    }
    const mp3 = encodeMp3(concat(chunks));
    const hash = createHash("sha1").update(mp3).digest("hex").slice(0, 10);
    const file = `${lesson.id}-${hash}.mp3`;
    writeFileSync(join(dir, file), mp3);
    entry.lessons[lesson.id] = {
      src: `/audio/a1/${gender}/${file}`,
      duration: +(length / SAMPLE_RATE).toFixed(2),
      bytes: mp3.length,
      cues,
    };
    console.log(`  ${lesson.id}: ${Math.round(length / SAMPLE_RATE)} s, ${(mp3.length / 1024).toFixed(0)} KB`);
  }

  if (waiting) console.log(`  ${waiting} lesson(s) still waiting for recordings — run the same command again later.`);

  // Delete files no longer referenced (older versions of a lesson).
  const keep = new Set(Object.values(entry.lessons).map((t) => t.src.split("/").pop()));
  for (const f of readdirSync(dir)) if (f.endsWith(".mp3") && !keep.has(f)) rmSync(join(dir, f));
  out.voices[gender] = entry;
}

writeFileSync(MANIFEST, `${JSON.stringify(out, null, 2)}\n`);
console.log(`✓ Wrote ${MANIFEST.replace(ROOT, ".")}`);
