#!/usr/bin/env node
// Builds the Ride-mode audio lessons: one MP3 per track, plus a manifest with
// the start time of every phrase (used by the player for "next phrase").
//
//   npm run ride:audio                      # Google voices if GOOGLE_TTS_API_KEY is set, else Windows placeholders
//   npm run ride:audio -- --engine windows  # force placeholder voices (Windows only, free, offline)
//   npm run ride:audio -- --voice both      # female (default), male, or both
//
// Engines
//   google  : Google Cloud Text-to-Speech (real German + Telugu voices). Needs
//             GOOGLE_TTS_API_KEY in .env.local. Set a budget limit on the account.
//   windows : the computer's built-in voices. They can't speak Telugu or German,
//             so they read the Telugu-in-English-letters text — only for testing.
//
// Speech is cached in scripts/.audio-cache (git-ignored), so re-running after a
// small content change only synthesizes the sentences that changed.

import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Mp3Encoder } from "@breezystack/lamejs";
import { RIDE_HOW_IT_WORKS, RIDE_OUTRO, RIDE_PACKS } from "../src/content/ride/delivery.ts";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CACHE_DIR = join(ROOT, "scripts", ".audio-cache");
const AUDIO_DIR = join(ROOT, "public", "audio", "ride");
const MANIFEST = join(ROOT, "src", "content", "ride", "audio-manifest.json");

const SAMPLE_RATE = 24000; // speech quality, small files
const MP3_KBPS = 48;

// ---------------------------------------------------------------- arguments
const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const engine = arg("engine") ?? (process.env.GOOGLE_TTS_API_KEY ? "google" : "windows");
const voiceArg = arg("voice") ?? "female";
const genders = voiceArg === "both" ? ["female", "male"] : [voiceArg];
if (!["google", "windows"].includes(engine)) fail(`Unknown --engine ${engine} (use google or windows)`);
if (!genders.every((g) => g === "female" || g === "male")) fail(`Unknown --voice ${voiceArg} (use female, male or both)`);
if (engine === "google" && !process.env.GOOGLE_TTS_API_KEY) fail("GOOGLE_TTS_API_KEY is not set (put it in .env.local).");
if (engine === "windows" && process.platform !== "win32") fail("The windows engine only runs on Windows. Use --engine google.");

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// ------------------------------------------------------------ lesson script
// A track script is a list of steps: speech, silence, a chime, or a cue mark.
const RATE = { deSlow: "deSlow", de: "de", te: "te" };

function trackScript(track) {
  const steps = [];
  const say = (lang, text, latn, rate) => steps.push({ type: "say", lang, text, latn, rate });
  const pause = (s) => steps.push({ type: "pause", s });
  const te = (tri) => say("te", tri.te, tri.teLatn, RATE.te);

  te(track.intro);
  pause(0.4);
  te(RIDE_HOW_IT_WORKS);
  pause(1.2);

  for (const p of track.phrases) {
    steps.push({ type: "cue", id: p.id });
    steps.push({ type: "chime" });
    pause(0.5);
    say("de", p.de, p.de, RATE.deSlow);
    pause(0.9);
    te(p.meaning);
    pause(0.6);
    te(p.where);
    pause(0.7);
    if (p.whyAudio) {
      for (const part of p.whyAudio) {
        if ("de" in part) say("de", part.de, part.de, RATE.de);
        else say("te", part.te, part.teLatn, RATE.te);
        pause(0.35);
      }
      pause(0.6);
    }
    // Twice at normal speed, each followed by time to say it aloud.
    for (let i = 0; i < 2; i++) {
      say("de", p.de, p.de, RATE.de);
      steps.push({ type: "repeatPause" });
    }
    pause(0.8);
  }

  steps.push({ type: "cue", id: "outro" });
  te(RIDE_OUTRO);
  pause(1.0);
  return steps;
}

// ------------------------------------------------------------------ engines
const GOOGLE_RATE = { deSlow: 0.8, de: 0.95, te: 0.95 };
const WINDOWS_RATE = { deSlow: -3, de: -1, te: 0 }; // SAPI: -10..10
const WINDOWS_VOICES = {
  female: ["Microsoft Heera", "Microsoft Zira", "Microsoft Zira Desktop"],
  male: ["Microsoft Ravi", "Microsoft David", "Microsoft Mark", "Microsoft David Desktop"],
};
const GOOGLE_LANG = { de: "de-DE", te: "te-IN" };

function cacheKey(job) {
  return createHash("sha1")
    .update([engine, job.voice, job.lang, job.rate, job.spoken].join("\u0000"))
    .digest("hex")
    .slice(0, 16);
}

/** Picks a Google voice for a language + gender, preferring the most natural voice types. */
async function pickGoogleVoice(lang, gender) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/voices?languageCode=${GOOGLE_LANG[lang]}`, {
    headers: { "X-Goog-Api-Key": process.env.GOOGLE_TTS_API_KEY },
  });
  if (!res.ok) fail(`Google voices list failed (${res.status}): ${await res.text()}`);
  const { voices = [] } = await res.json();
  const wanted = gender.toUpperCase();
  const ofGender = voices.filter((v) => v.ssmlGender === wanted && v.languageCodes.includes(GOOGLE_LANG[lang]));
  for (const type of ["Neural2", "Wavenet", "Standard"]) {
    const v = ofGender.find((x) => x.name.includes(`-${type}-`));
    if (v) return v.name;
  }
  if (ofGender[0]) return ofGender[0].name;
  fail(`No ${gender} Google voice found for ${GOOGLE_LANG[lang]}.`);
}

async function synthesizeGoogle(jobs) {
  let chars = 0;
  const queue = [...jobs];
  async function worker() {
    for (let job = queue.shift(); job; job = queue.shift()) {
      const res = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": process.env.GOOGLE_TTS_API_KEY },
        body: JSON.stringify({
          input: { text: job.spoken },
          voice: { languageCode: GOOGLE_LANG[job.lang], name: job.voice },
          audioConfig: { audioEncoding: "LINEAR16", sampleRateHertz: SAMPLE_RATE, speakingRate: GOOGLE_RATE[job.rate] },
        }),
      });
      if (!res.ok) fail(`Google synthesis failed (${res.status}) for "${job.spoken}": ${await res.text()}`);
      const { audioContent } = await res.json();
      writeFileSync(job.out, Buffer.from(audioContent, "base64"));
      chars += job.spoken.length;
      process.stdout.write(".");
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  process.stdout.write("\n");
  console.log(`  Google TTS characters used: ${chars}`);
}

// PowerShell 7 sees the newer Windows voices (e.g. the Indian-English ones);
// Windows PowerShell 5.1 only sees the old "Desktop" voices.
const POWERSHELL = spawnSync("pwsh", ["-NoProfile", "-Command", "exit 0"]).status === 0 ? "pwsh" : "powershell.exe";

function synthesizeWindows(jobs) {
  const ps1 = join(tmpdir(), "deutsch-setu-ride-tts.ps1");
  const jobsFile = join(tmpdir(), "deutsch-setu-ride-jobs.json");
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
  $s.Speak($j.spoken)
  $s.SetOutputToNull()
}
$s.Dispose()
`,
    "utf8",
  );
  writeFileSync(
    jobsFile,
    JSON.stringify(jobs.map((j) => ({ voice: j.voice, rate: WINDOWS_RATE[j.rate], out: j.out, spoken: j.spoken }))),
    "utf8",
  );
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
    [
      "-NoProfile",
      "-Command",
      "Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).GetInstalledVoices() | % { $_.VoiceInfo.Name }",
    ],
    { encoding: "utf8" },
  );
  return r.stdout.split(/\r?\n/).filter(Boolean);
}

// -------------------------------------------------------------------- audio
/** Reads 16-bit PCM mono samples from a WAV file, resampled to SAMPLE_RATE. */
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

/** Removes leading/trailing near-silence so our own pauses control the rhythm. */
function trimSilence(pcm) {
  const threshold = 300;
  let a = 0;
  let b = pcm.length - 1;
  while (a < b && Math.abs(pcm[a]) < threshold) a++;
  while (b > a && Math.abs(pcm[b]) < threshold) b--;
  const pad = Math.round(SAMPLE_RATE * 0.05);
  return pcm.slice(Math.max(0, a - pad), Math.min(pcm.length, b + pad));
}

/** A soft two-note chime that marks the start of each new phrase. */
function chime() {
  const notes = [
    [880, 0.12],
    [1318.5, 0.2],
  ];
  const parts = notes.map(([freq, dur]) => {
    const n = Math.round(SAMPLE_RATE * dur);
    const out = new Int16Array(n);
    for (let i = 0; i < n; i++) {
      const env = Math.min(1, i / (SAMPLE_RATE * 0.01)) * Math.exp((-4 * i) / n);
      out[i] = Math.round(Math.sin((2 * Math.PI * freq * i) / SAMPLE_RATE) * env * 6000);
    }
    return out;
  });
  return concat(parts);
}

const silence = (s) => new Int16Array(Math.round(SAMPLE_RATE * s));

function concat(parts) {
  const out = new Int16Array(parts.reduce((n, p) => n + p.length, 0));
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

function encodeMp3(pcm) {
  const enc = new Mp3Encoder(1, SAMPLE_RATE, MP3_KBPS);
  const chunks = [];
  const block = 1152 * 8;
  for (let i = 0; i < pcm.length; i += block) {
    const out = enc.encodeBuffer(pcm.subarray(i, i + block));
    if (out.length) chunks.push(Buffer.from(out));
  }
  const end = enc.flush();
  if (end.length) chunks.push(Buffer.from(end));
  return Buffer.concat(chunks);
}

// --------------------------------------------------------------------- main
mkdirSync(CACHE_DIR, { recursive: true });
const tracks = RIDE_PACKS.flatMap((pack) => pack.tracks.map((track) => ({ pack, track })));
const windowsInstalled = engine === "windows" ? installedWindowsVoices() : [];

const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
const keepVoices = manifest.engine === engine ? (manifest.voices ?? {}) : {};
const out = { engine, sampleRate: SAMPLE_RATE, voices: { ...keepVoices } };

for (const gender of genders) {
  console.log(`▲ ${engine} · ${gender} voice`);

  // Choose a voice per language.
  const voiceFor = {};
  for (const lang of ["de", "te"]) {
    if (engine === "google") voiceFor[lang] = await pickGoogleVoice(lang, gender);
    else voiceFor[lang] = WINDOWS_VOICES[gender].find((v) => windowsInstalled.includes(v)) ?? windowsInstalled[0];
    if (!voiceFor[lang]) fail("No speech voice found on this computer.");
  }
  console.log(`  voices: de=${voiceFor.de}  te=${voiceFor.te}`);

  // Collect every sentence, synthesize the ones not cached yet.
  const scripts = tracks.map(({ track }) => ({ track, steps: trackScript(track) }));
  const jobs = new Map();
  for (const { steps } of scripts) {
    for (const step of steps) {
      if (step.type !== "say") continue;
      const spoken = engine === "windows" ? step.latn : step.text;
      const job = { lang: step.lang, rate: step.rate, voice: voiceFor[step.lang], spoken };
      job.key = cacheKey(job);
      job.out = join(CACHE_DIR, `${job.key}.wav`);
      step.key = job.key;
      jobs.set(job.key, job);
    }
  }
  const missing = [...jobs.values()].filter((j) => !existsSync(j.out));
  console.log(`  sentences: ${jobs.size} (${missing.length} new)`);
  if (missing.length) {
    if (engine === "google") await synthesizeGoogle(missing);
    else synthesizeWindows(missing);
  }

  // Assemble one MP3 per track.
  const dir = join(AUDIO_DIR, gender);
  mkdirSync(dir, { recursive: true });
  const chimePcm = chime();
  const entry = { voices: voiceFor, tracks: {} };
  for (const { track, steps } of scripts) {
    const parts = [];
    const cues = [];
    let length = 0;
    let lastSpeech = 0;
    const push = (pcm) => {
      parts.push(pcm);
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
    const mp3 = encodeMp3(concat(parts));
    const hash = createHash("sha1").update(mp3).digest("hex").slice(0, 10);
    const file = `${track.id}-${hash}.mp3`;
    writeFileSync(join(dir, file), mp3);
    entry.tracks[track.id] = {
      src: `/audio/ride/${gender}/${file}`,
      duration: +(length / SAMPLE_RATE).toFixed(2),
      bytes: mp3.length,
      cues,
    };
    console.log(`  ${track.id}: ${Math.round(length / SAMPLE_RATE)} s, ${(mp3.length / 1024).toFixed(0)} KB → ${file}`);
  }

  // Remove older versions of this voice's files.
  const keep = new Set(Object.values(entry.tracks).map((t) => t.src.split("/").pop()));
  for (const f of readdirSync(dir)) if (f.endsWith(".mp3") && !keep.has(f)) rmSync(join(dir, f));

  out.voices[gender] = entry;
}

writeFileSync(MANIFEST, `${JSON.stringify(out, null, 2)}\n`);
console.log(`✓ Wrote ${MANIFEST.replace(ROOT, ".")}`);
