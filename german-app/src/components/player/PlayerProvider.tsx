"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { COURSE, courseLesson, cueAt, lessonAudio, plain, stepOfCue, type CourseLesson, type LessonAudio } from "@/lib/course";
import { markLessonDone } from "@/lib/progress";
import { useSettings } from "@/lib/settings";

// One audio player for the whole app. It lives in the root layout, so it keeps
// playing while you move between pages, switch to another app or lock the
// phone. When a lesson ends it continues with the next one — across modules.
// Background playback works because this is a real <audio> element playing
// pre-made MP3s (the phone's speech voice would stop in the background).

const STORE_KEY = "deutsch-setu:player:v1";
export const AUDIO_CACHE = "deutsch-setu-audio";
const ARTWORK = [
  { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
  { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
];

type Saved = { lessonId?: string; time?: number };

type PlayerState = {
  /** Lesson loaded in the player (playing or paused), if any */
  lesson: CourseLesson | null;
  audio: LessonAudio | null;
  time: number;
  playing: boolean;
  /** Current cue: "intro", "outro" or "s<step index>" */
  cueId: string | undefined;
  hasAudio: (lessonId: string) => boolean;
  play: (lessonId: string, startAt?: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seek: (t: number) => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function usePlayer(): PlayerState {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside <PlayerProvider>");
  return ctx;
}

/** A saved (offline) copy if there is one, otherwise the network URL. */
async function resolveSrc(src: string): Promise<string> {
  try {
    if ("caches" in window) {
      const hit = await caches.match(src, { cacheName: AUDIO_CACHE });
      if (hit) return URL.createObjectURL(await hit.blob());
    }
  } catch {}
  return src;
}

function seekWhenReady(el: HTMLAudioElement, t: number) {
  if (el.readyState >= 1) el.currentTime = t;
  else el.addEventListener("loadedmetadata", () => (el.currentTime = t), { once: true });
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const { settings } = useSettings();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [lessonId, setLessonId] = useState<string | null>(null);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Latest values for event handlers (media keys, "ended").
  const voiceRef = useRef(settings.voice);
  const lessonRef = useRef<string | null>(null);
  const loadedSrc = useRef<string | null>(null);
  const blobUrl = useRef<string | null>(null);
  const lastSave = useRef(0);
  /** Where to start when Play is tapped after a restore (audio not loaded yet). */
  const restoreAt = useRef(0);
  useEffect(() => {
    voiceRef.current = settings.voice;
  }, [settings.voice]);

  const audioOf = useCallback((id: string | null) => (id ? lessonAudio(id, voiceRef.current) : undefined), []);
  const hasAudio = useCallback((id: string) => Boolean(lessonAudio(id, voiceRef.current)), []);

  const save = useCallback(() => {
    const el = audioRef.current;
    if (!el || !lessonRef.current) return;
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify({ lessonId: lessonRef.current, time: el.currentTime } satisfies Saved));
    } catch {}
  }, []);

  const updatePosition = useCallback(() => {
    const el = audioRef.current;
    if (!el || !("mediaSession" in navigator) || !Number.isFinite(el.duration)) return;
    try {
      navigator.mediaSession.setPositionState({
        duration: el.duration,
        position: Math.min(el.currentTime, el.duration),
        playbackRate: el.playbackRate,
      });
    } catch {}
  }, []);

  /** Loads a lesson at startAt seconds and optionally starts playing. */
  const load = useCallback(
    async (id: string, startAt: number, autoplay: boolean) => {
      const el = audioRef.current;
      const audio = audioOf(id);
      if (!el || !audio) return;
      lessonRef.current = id;
      setLessonId(id);
      setTime(startAt);
      if (loadedSrc.current !== audio.src) {
        const url = await resolveSrc(audio.src);
        if (blobUrl.current) URL.revokeObjectURL(blobUrl.current);
        blobUrl.current = url.startsWith("blob:") ? url : null;
        loadedSrc.current = audio.src;
        el.src = url;
      }
      seekWhenReady(el, startAt);
      if (autoplay) {
        try {
          await el.play();
        } catch {
          // the browser wants a tap first
        }
      }
    },
    [audioOf],
  );

  /** The next lesson that has audio, after the given one. */
  const nextLessonId = useCallback(
    (id: string) => {
      const from = courseLesson(id)?.order ?? -1;
      return COURSE.find((l) => l.order > from && audioOf(l.id))?.id;
    },
    [audioOf],
  );

  const play = useCallback((id: string, startAt = 0) => void load(id, startAt, true), [load]);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el || !lessonRef.current) return;
    if (!el.paused) return el.pause();
    if (loadedSrc.current) void el.play().catch(() => {});
    else void load(lessonRef.current, restoreAt.current, true);
  }, [load]);

  const goToLesson = useCallback(
    (id: string | undefined, autoplay: boolean) => {
      if (id) void load(id, 0, autoplay);
      else audioRef.current?.pause(); // end of the course audio
    },
    [load],
  );

  /** Next step; at the last step, the next lesson. */
  const next = useCallback(() => {
    const el = audioRef.current;
    const id = lessonRef.current;
    const audio = audioOf(id);
    if (!el || !id || !audio) return;
    const n = audio.cues.find((c) => c.start > el.currentTime + 0.5 && c.id !== "outro");
    if (n) el.currentTime = n.start;
    else goToLesson(nextLessonId(id), !el.paused);
  }, [audioOf, goToLesson, nextLessonId]);

  /** Back to the start of this step; if it just started, the step before. */
  const prev = useCallback(() => {
    const el = audioRef.current;
    const id = lessonRef.current;
    const audio = audioOf(id);
    if (!el || !id || !audio) return;
    const t = el.currentTime;
    const cur = cueAt(audio.cues, t);
    const at = cur ? audio.cues.indexOf(cur) : 0;
    if (cur && t - cur.start > 3) el.currentTime = cur.start;
    else if (at > 0) el.currentTime = audio.cues[at - 1].start;
    else {
      const from = courseLesson(id)?.order ?? 0;
      const before = [...COURSE].reverse().find((l) => l.order < from && audioOf(l.id));
      if (before) void load(before.id, 0, !el.paused);
      else el.currentTime = 0;
    }
  }, [audioOf, load]);

  const seek = useCallback((t: number) => {
    setTime(t);
    if (audioRef.current) seekWhenReady(audioRef.current, t);
  }, []);

  // Audio element events.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
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
      setTime(el.currentTime);
      const now = Date.now();
      if (now - lastSave.current > 5000) {
        lastSave.current = now;
        save();
      }
    };
    const onEnded = () => {
      const id = lessonRef.current;
      if (!id) return;
      markLessonDone(id);
      goToLesson(nextLessonId(id), true);
    };
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("ended", onEnded);
    el.addEventListener("loadedmetadata", updatePosition);
    el.addEventListener("seeked", updatePosition);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", onEnded);
      el.removeEventListener("loadedmetadata", updatePosition);
      el.removeEventListener("seeked", updatePosition);
    };
  }, [goToLesson, nextLessonId, save, updatePosition]);

  // Lock screen, notification and earbud buttons.
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    const ms = navigator.mediaSession;
    const el = audioRef.current;
    const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
      ["play", () => toggle()],
      ["pause", () => el?.pause()],
      ["nexttrack", () => next()],
      ["previoustrack", () => prev()],
      ["seekbackward", (d) => el && (el.currentTime = Math.max(0, el.currentTime - (d.seekOffset ?? 10)))],
      ["seekforward", (d) => el && (el.currentTime = Math.min(el.duration || 0, el.currentTime + (d.seekOffset ?? 10)))],
      ["seekto", (d) => el && d.seekTime != null && (el.currentTime = d.seekTime)],
    ];
    for (const [action, handler] of handlers) {
      try {
        ms.setActionHandler(action, handler);
      } catch {}
    }
    return () => {
      for (const [action] of handlers) {
        try {
          ms.setActionHandler(action, null);
        } catch {}
      }
    };
  }, [toggle, next, prev]);

  // Restore the last lesson (paused, rewound to the start of that step).
  useEffect(() => {
    let cancelled = false;
    Promise.resolve().then(() => {
      if (cancelled) return;
      let saved: Saved = {};
      try {
        saved = JSON.parse(window.localStorage.getItem(STORE_KEY) ?? "{}");
      } catch {}
      const audio = saved.lessonId ? audioOf(saved.lessonId) : undefined;
      if (!saved.lessonId || !audio) return;
      const start = saved.time ? (cueAt(audio.cues, saved.time)?.start ?? 0) : 0;
      lessonRef.current = saved.lessonId;
      setLessonId(saved.lessonId);
      setTime(start);
      // Audio is loaded on the first tap of Play.
      restoreAt.current = start;
    });
    return () => {
      cancelled = true;
    };
  }, [audioOf]);

  useEffect(
    () => () => {
      if (blobUrl.current) URL.revokeObjectURL(blobUrl.current);
    },
    [],
  );

  const lesson = lessonId ? (courseLesson(lessonId) ?? null) : null;
  const audio = (lessonId ? lessonAudio(lessonId, settings.voice) : undefined) ?? null;
  const cueId = audio ? cueAt(audio.cues, time)?.id : undefined;
  const step = lesson ? stepOfCue(lesson, cueId) : undefined;

  // What the lock screen shows: the German being taught and the lesson.
  useEffect(() => {
    if (!("mediaSession" in navigator) || !lesson) return;
    const german = step && "de" in step ? step.de : lesson.titleDe;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: german,
      artist: step && "de" in step ? plain(step.meaning.te) : `Modul ${lesson.module.number} · Lektion ${lesson.index + 1}`,
      album: `Deutsch Setu A1 · ${lesson.module.titleDe}`,
      artwork: ARTWORK,
    });
  }, [lesson, step]);

  const value = useMemo<PlayerState>(
    () => ({
      lesson,
      audio,
      time,
      playing,
      cueId,
      hasAudio,
      play,
      toggle,
      next,
      prev,
      seek,
    }),
    [lesson, audio, time, playing, cueId, hasAudio, play, toggle, next, prev, seek],
  );

  return (
    <PlayerContext.Provider value={value}>
      {children}
      {/* Hidden: one element for everything = reliable background playback */}
      <audio ref={audioRef} preload="none" />
    </PlayerContext.Provider>
  );
}
