"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import manifestJson from "@/content/ride/audio-manifest.json";
import { RIDE_PACKS } from "@/content/ride/delivery";
import { useSettings } from "@/lib/settings";
import type { ExplanationMode, RidePhrase, RideTrack, Tri } from "@/lib/types";
import { ListenButton } from "./ListenButton";
import { TriText } from "./TriText";

// Ride mode: audio lessons that keep playing while another app (e.g. a delivery
// app) is open or the screen is locked. Background playback works because it is
// one real <audio> element playing pre-made MP3s — the phone's built-in speech
// voice would stop as soon as the app goes to the background.

type Cue = { id: string; start: number };
type TrackAudio = { src: string; duration: number; bytes: number; cues: Cue[] };
type VoiceEntry = { voices: Record<string, string>; tracks: Record<string, TrackAudio> };
type Manifest = {
  engine: "google" | "windows";
  sampleRate: number;
  voices: Partial<Record<"female" | "male", VoiceEntry>>;
};
type Item = { track: RideTrack; audio: TrackAudio; cues: Cue[] };
type Saved = { trackId?: string; time?: number; loopAll?: boolean };
type OfflineState = "checking" | "unsupported" | "none" | "saving" | "saved" | "error";

const MANIFEST = manifestJson as Manifest;
const STORE_KEY = "deutsch-setu:ride:v1";
const CACHE_NAME = "deutsch-setu-ride-audio";
const ALL_TRACKS = RIDE_PACKS.flatMap((pack) => pack.tracks);
const ARTWORK = [
  { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
  { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
];

function itemsFor(voice: "female" | "male"): Item[] {
  const entry = MANIFEST.voices[voice] ?? MANIFEST.voices.female ?? MANIFEST.voices.male;
  if (!entry) return [];
  return ALL_TRACKS.flatMap((track) => {
    const audio = entry.tracks[track.id];
    return audio ? [{ track, audio, cues: [{ id: "intro", start: 0 }, ...audio.cues] }] : [];
  });
}

/** The phrase (or intro/outro) playing at time t. */
function cueAt(cues: Cue[], t: number): Cue {
  let current = cues[0];
  for (const c of cues) if (c.start <= t + 0.05) current = c;
  return current;
}

function phraseOf(track: RideTrack, id: string): RidePhrase | undefined {
  return track.phrases.find((p) => p.id === id);
}

function fmt(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/** First explanation mode the learner chose (for one-line labels). */
function firstMode(tri: Tri, modes: ExplanationMode[]) {
  const mode = (["te", "teLatn", "en"] as const).find((m) => modes.includes(m)) ?? "en";
  return { text: tri[mode], lang: mode === "te" ? "te" : "en" };
}

/** A saved (offline) copy if there is one, otherwise the network URL. */
async function resolveSrc(src: string): Promise<string> {
  try {
    if ("caches" in window) {
      const hit = await caches.match(src, { cacheName: CACHE_NAME });
      if (hit) return URL.createObjectURL(await hit.blob());
    }
  } catch {
    // fall back to the network
  }
  return src;
}

function seekWhenReady(audio: HTMLAudioElement, t: number) {
  if (audio.readyState >= 1) audio.currentTime = t;
  else audio.addEventListener("loadedmetadata", () => (audio.currentTime = t), { once: true });
}

function readSaved(): Saved {
  try {
    return JSON.parse(window.localStorage.getItem(STORE_KEY) ?? "{}") as Saved;
  } catch {
    return {};
  }
}

export function RidePlayer() {
  const { settings } = useSettings();
  const items = useMemo(() => itemsFor(settings.voice), [settings.voice]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loopAll, setLoopAll] = useState(true);
  const [offline, setOffline] = useState<OfflineState>("checking");
  const [savedCount, setSavedCount] = useState(0);

  // Event handlers (media keys, lock screen, "ended") read the latest values from refs.
  const itemsRef = useRef(items);
  const indexRef = useRef(0);
  const loopRef = useRef(true);
  const loadedSrc = useRef<string | null>(null);
  const blobUrl = useRef<string | null>(null);
  const lastSave = useRef(0);
  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  const save = useCallback(() => {
    const audio = audioRef.current;
    const item = itemsRef.current[indexRef.current];
    if (!audio || !item) return;
    try {
      window.localStorage.setItem(
        STORE_KEY,
        JSON.stringify({ trackId: item.track.id, time: audio.currentTime, loopAll: loopRef.current } satisfies Saved),
      );
    } catch {
      // storage blocked: progress just isn't remembered
    }
  }, []);

  const updatePosition = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !("mediaSession" in navigator) || !Number.isFinite(audio.duration)) return;
    try {
      navigator.mediaSession.setPositionState({
        duration: audio.duration,
        position: Math.min(audio.currentTime, audio.duration),
        playbackRate: audio.playbackRate,
      });
    } catch {
      // older browsers
    }
  }, []);

  /** Loads lesson i at time startAt (seconds) and optionally starts playing. */
  const load = useCallback(async (i: number, startAt: number, autoplay: boolean) => {
    const audio = audioRef.current;
    const item = itemsRef.current[i];
    if (!audio || !item) return;
    indexRef.current = i;
    setIndex(i);
    setTime(startAt);
    if (loadedSrc.current !== item.audio.src) {
      const url = await resolveSrc(item.audio.src);
      if (blobUrl.current) URL.revokeObjectURL(blobUrl.current);
      blobUrl.current = url.startsWith("blob:") ? url : null;
      loadedSrc.current = item.audio.src;
      audio.src = url;
    }
    seekWhenReady(audio, startAt);
    if (autoplay) {
      try {
        await audio.play();
      } catch {
        // needs a tap first (browser autoplay rules)
      }
    }
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) return audio.pause();
    if (!loadedSrc.current) return load(indexRef.current, 0, true);
    try {
      await audio.play();
    } catch {}
  }, [load]);

  const goTrack = useCallback(
    (i: number, autoplay: boolean) => {
      const n = itemsRef.current.length;
      if (i >= n) {
        if (loopRef.current) return load(0, 0, autoplay);
        audioRef.current?.pause();
        return;
      }
      return load(Math.max(0, i), 0, autoplay);
    },
    [load],
  );

  /** Next phrase; at the last phrase, the next lesson. */
  const nextPhrase = useCallback(() => {
    const audio = audioRef.current;
    const item = itemsRef.current[indexRef.current];
    if (!audio || !item) return;
    const next = item.cues.find((c) => c.start > audio.currentTime + 0.5);
    if (next && next.id !== "outro") audio.currentTime = next.start;
    else goTrack(indexRef.current + 1, !audio.paused);
  }, [goTrack]);

  /** Back to the start of this phrase; if it just started, the phrase before. */
  const prevPhrase = useCallback(() => {
    const audio = audioRef.current;
    const item = itemsRef.current[indexRef.current];
    if (!audio || !item) return;
    const t = audio.currentTime;
    const current = cueAt(item.cues, t);
    const at = item.cues.indexOf(current);
    if (t - current.start > 3 || (at === 0 && indexRef.current === 0)) audio.currentTime = current.start;
    else if (at > 0) audio.currentTime = item.cues[at - 1].start;
    else {
      const prev = itemsRef.current[indexRef.current - 1];
      const lastPhrase = prev.cues.filter((c) => c.id !== "outro").at(-1) ?? prev.cues[0];
      load(indexRef.current - 1, lastPhrase.start, !audio.paused);
    }
  }, [load]);

  // Audio element events.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => {
      setPlaying(true);
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "playing";
      updatePosition();
    };
    const onPause = () => {
      setPlaying(false);
      if ("mediaSession" in navigator) navigator.mediaSession.playbackState = "paused";
      updatePosition();
      save();
    };
    const onTime = () => {
      setTime(audio.currentTime);
      const now = Date.now();
      if (now - lastSave.current > 5000) {
        lastSave.current = now;
        save();
      }
    };
    const onEnded = () => goTrack(indexRef.current + 1, true);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("loadedmetadata", updatePosition);
    audio.addEventListener("seeked", updatePosition);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("loadedmetadata", updatePosition);
      audio.removeEventListener("seeked", updatePosition);
    };
  }, [goTrack, save, updatePosition]);

  // Lock-screen, notification and earbud controls.
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    const ms = navigator.mediaSession;
    const audio = audioRef.current;
    const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
      ["play", () => void toggle()],
      ["pause", () => audio?.pause()],
      ["nexttrack", () => nextPhrase()],
      ["previoustrack", () => prevPhrase()],
      ["seekbackward", (d) => audio && (audio.currentTime = Math.max(0, audio.currentTime - (d.seekOffset ?? 10)))],
      ["seekforward", (d) => audio && (audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + (d.seekOffset ?? 10)))],
      ["seekto", (d) => audio && d.seekTime != null && (audio.currentTime = d.seekTime)],
    ];
    for (const [action, handler] of handlers) {
      try {
        ms.setActionHandler(action, handler);
      } catch {
        // action not supported on this browser
      }
    }
    return () => {
      for (const [action] of handlers) {
        try {
          ms.setActionHandler(action, null);
        } catch {}
      }
    };
  }, [toggle, nextPhrase, prevPhrase]);

  // Restore the last lesson and phrase (rewound to the start of that phrase).
  useEffect(() => {
    let cancelled = false;
    Promise.resolve().then(() => {
      if (cancelled) return;
      const saved = readSaved();
      if (saved.loopAll === false) {
        loopRef.current = false;
        setLoopAll(false);
      }
      const i = Math.max(0, itemsRef.current.findIndex((x) => x.track.id === saved.trackId));
      const item = itemsRef.current[i];
      if (!item) return;
      const start = saved.time ? cueAt(item.cues, saved.time).start : 0;
      void load(i, start, false);
    });
    return () => {
      cancelled = true;
    };
  }, [load]);

  // Release the offline blob URL when leaving the page.
  useEffect(
    () => () => {
      if (blobUrl.current) URL.revokeObjectURL(blobUrl.current);
    },
    [],
  );

  const item = items[index];
  const cue = item ? cueAt(item.cues, time) : undefined;
  const phrase = item && cue ? phraseOf(item.track, cue.id) : undefined;

  // What the lock screen / notification shows: the German phrase and its meaning.
  useEffect(() => {
    if (!("mediaSession" in navigator) || !item) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: phrase?.de ?? item.track.titleDe,
      artist: phrase ? phrase.meaning.te : item.track.title.te,
      album: `Deutsch Setu · ${item.track.titleDe}`,
      artwork: ARTWORK,
    });
  }, [item, phrase]);

  // Offline copy status.
  const totalBytes = items.reduce((n, x) => n + x.audio.bytes, 0);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!("caches" in window)) return !cancelled && setOffline("unsupported");
      try {
        const cache = await caches.open(CACHE_NAME);
        const have = new Set((await cache.keys()).map((r) => new URL(r.url).pathname));
        if (!cancelled) setOffline(items.every((x) => have.has(x.audio.src)) ? "saved" : "none");
      } catch {
        if (!cancelled) setOffline("unsupported");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [items]);

  async function saveOffline() {
    setOffline("saving");
    setSavedCount(0);
    try {
      await navigator.storage?.persist?.();
      const cache = await caches.open(CACHE_NAME);
      const wanted = new Set(items.map((x) => x.audio.src));
      for (const x of items) {
        if (!(await cache.match(x.audio.src))) {
          const res = await fetch(x.audio.src);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          await cache.put(x.audio.src, res);
        }
        setSavedCount((n) => n + 1);
      }
      // Drop old versions of the lessons.
      for (const req of await cache.keys()) {
        if (!wanted.has(new URL(req.url).pathname)) await cache.delete(req);
      }
      setOffline("saved");
    } catch {
      setOffline("error");
    }
  }

  async function removeOffline() {
    await caches.delete(CACHE_NAME);
    setOffline("none");
  }

  function setLoop(value: boolean) {
    loopRef.current = value;
    setLoopAll(value);
    save();
  }

  if (!item || !cue) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
        No audio lessons yet. Run <code>npm run ride:audio</code> in the app folder.
      </p>
    );
  }

  const duration = item.audio.duration;
  const label = phrase ? firstMode(phrase.meaning, settings.modes) : firstMode(item.track.title, settings.modes);

  return (
    <div className="space-y-4">
      {/* Hidden player. One element for everything = reliable background playback. */}
      <audio ref={audioRef} preload="metadata" />

      <section aria-label="Now playing" className="rounded-2xl bg-slate-900 p-4 text-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
          Lesson {index + 1} of {items.length} · {item.track.titleDe}
        </p>
        <p lang="de" className="mt-2 min-h-[3.5rem] text-xl font-bold leading-snug">
          {phrase ? phrase.de : cue.id === "outro" ? "Gut gemacht! 🎉" : item.track.titleDe}
        </p>
        <p lang={label.lang} className="min-h-[2.5rem] text-sm text-slate-300">
          {label.text}
        </p>

        <input
          type="range"
          min={0}
          max={Math.ceil(duration)}
          step={1}
          value={Math.min(time, duration)}
          onChange={(e) => {
            const t = Number(e.target.value);
            setTime(t);
            if (audioRef.current) seekWhenReady(audioRef.current, t);
          }}
          aria-label="Position in lesson"
          className="mt-4 w-full accent-amber-400"
        />
        <div className="flex justify-between text-[11px] text-slate-400">
          <span>{fmt(time)}</span>
          <span>{fmt(duration)}</span>
        </div>

        <div className="mt-3 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prevPhrase}
            aria-label="Previous phrase"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl active:scale-95"
          >
            ⏮
          </button>
          <button
            type="button"
            onClick={() => void toggle()}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-2xl text-slate-900 active:scale-95"
          >
            {playing ? "⏸" : "▶"}
          </button>
          <button
            type="button"
            onClick={nextPhrase}
            aria-label="Next phrase"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl active:scale-95"
          >
            ⏭
          </button>
        </div>

        <label className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300">
          <input type="checkbox" checked={loopAll} onChange={(e) => setLoop(e.target.checked)} className="accent-amber-400" />
          Repeat all lessons (for long rides)
        </label>
      </section>

      {MANIFEST.engine === "windows" && (
        <p className="rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
          <strong>Test voices.</strong> A computer voice reads the Telugu (English letters) text for now. Real German and
          Telugu voices arrive when the Google voice key is added.
        </p>
      )}

      <section aria-label="Lessons" className="space-y-2">
        <h2 className="text-sm font-bold text-slate-900">Lessons</h2>
        <ol className="space-y-2">
          {items.map((x, i) => {
            const active = i === index;
            return (
              <li key={x.track.id}>
                <button
                  type="button"
                  onClick={() => void load(i, 0, true)}
                  aria-current={active ? "true" : undefined}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left ${
                    active ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-white"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
                    {active && playing ? "♪" : i + 1}
                  </span>
                  <span className="flex-1">
                    <span lang="de" className="block text-sm font-semibold text-slate-800">
                      {x.track.titleDe}
                    </span>
                    <span lang={firstMode(x.track.title, settings.modes).lang} className="block text-xs text-slate-500">
                      {firstMode(x.track.title, settings.modes).text}
                    </span>
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {x.track.phrases.length} phrases · {Math.round(x.audio.duration / 60)} min
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-label="Phrases in this lesson" className="space-y-2">
        <h2 className="text-sm font-bold text-slate-900">Phrases in “{item.track.titleDe}”</h2>
        <ol className="space-y-2">
          {item.track.phrases.map((p) => {
            const start = item.cues.find((c) => c.id === p.id)?.start ?? 0;
            const active = cue.id === p.id;
            return (
              <li
                key={p.id}
                className={`rounded-2xl border bg-white p-3 ${active ? "border-amber-400" : "border-slate-200"}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p lang="de" className="text-sm font-semibold text-slate-900">
                    {p.de}
                  </p>
                  <button
                    type="button"
                    onClick={() => void load(index, start, true)}
                    aria-label={`Play from: ${p.de}`}
                    className="shrink-0 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white active:scale-95"
                  >
                    ▶ Play
                  </button>
                </div>
                <div className="mt-2">
                  <TriText tri={p.meaning} />
                </div>
                <details className="mt-2 text-xs">
                  <summary className="cursor-pointer font-semibold text-slate-600">Where &amp; why</summary>
                  <div className="mt-2 space-y-3">
                    <TriText tri={p.where} />
                    {p.why && <TriText tri={p.why} />}
                    <ListenButton text={p.de} label="Hear German" />
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-label="Offline" className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-900">Use without mobile data</h2>
        <p className="mt-1 text-xs text-slate-500">
          Save all lessons on this phone once (on Wi-Fi), so riding doesn&apos;t use your data.
        </p>
        <div className="mt-3">
          {offline === "saved" && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-green-700">✓ Saved on this phone</span>
              <button type="button" onClick={() => void removeOffline()} className="text-xs text-slate-500 underline">
                Remove
              </button>
            </div>
          )}
          {(offline === "none" || offline === "error") && (
            <button
              type="button"
              onClick={() => void saveOffline()}
              className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white active:scale-[0.99]"
            >
              ⬇ Save lessons ({(totalBytes / 1024 / 1024).toFixed(1)} MB)
            </button>
          )}
          {offline === "error" && <p className="mt-2 text-xs text-red-700">Saving failed. Check your connection and try again.</p>}
          {offline === "saving" && (
            <p className="text-sm text-slate-600">
              Saving… {savedCount}/{items.length}
            </p>
          )}
          {offline === "unsupported" && <p className="text-xs text-slate-500">This browser can&apos;t save lessons offline.</p>}
        </div>
      </section>
    </div>
  );
}
