"use client";

import { useEffect, useState } from "react";
import { AUDIO, COURSE, lessonAudio } from "@/lib/course";
import { useCompletedLessons } from "@/lib/progress";
import { useSettings } from "@/lib/settings";
import { ListenButton } from "./ListenButton";
import { AUDIO_CACHE, usePlayer } from "./player/PlayerProvider";
import { RichText, TriText } from "./TriText";

type OfflineState = "checking" | "unsupported" | "none" | "saving" | "saved" | "error";

function minutes(seconds: number) {
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}

/** Lessons of one module: play, read along, and save for offline. */
export function LessonList({ moduleId }: { moduleId: string }) {
  const { settings } = useSettings();
  const player = usePlayer();
  const done = useCompletedLessons();
  const lessons = COURSE.filter((l) => l.module.id === moduleId);
  const withAudio = lessons.filter((l) => lessonAudio(l.id, settings.voice));
  const firstOpen = withAudio.find((l) => !done.includes(l.id)) ?? withAudio[0];
  const moduleIsPlaying = player.lesson?.module.id === moduleId && player.playing;

  // ---- offline copy of this module's audio
  const srcs = withAudio.map((l) => lessonAudio(l.id, settings.voice)!.src);
  const bytes = withAudio.reduce((n, l) => n + lessonAudio(l.id, settings.voice)!.bytes, 0);
  const srcKey = srcs.join("|");
  const [offline, setOffline] = useState<OfflineState>("checking");
  const [savedCount, setSavedCount] = useState(0);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const wanted = srcKey ? srcKey.split("|") : [];
      if (!("caches" in window)) return !cancelled && setOffline("unsupported");
      try {
        const cache = await caches.open(AUDIO_CACHE);
        const have = new Set((await cache.keys()).map((r) => new URL(r.url).pathname));
        if (!cancelled) setOffline(wanted.length && wanted.every((s) => have.has(s)) ? "saved" : "none");
      } catch {
        if (!cancelled) setOffline("unsupported");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [srcKey]);

  async function saveOffline() {
    setOffline("saving");
    setSavedCount(0);
    try {
      await navigator.storage?.persist?.();
      const cache = await caches.open(AUDIO_CACHE);
      for (const src of srcs) {
        if (!(await cache.match(src))) {
          const res = await fetch(src);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          await cache.put(src, res);
        }
        setSavedCount((n) => n + 1);
      }
      setOffline("saved");
    } catch {
      setOffline("error");
    }
  }

  async function removeOffline() {
    const cache = await caches.open(AUDIO_CACHE);
    for (const src of srcs) await cache.delete(src);
    setOffline("none");
  }

  return (
    <div className="space-y-3">
      {firstOpen ? (
        <button
          type="button"
          onClick={() => (moduleIsPlaying ? player.toggle() : player.play(firstOpen.id))}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white active:scale-[0.99]"
        >
          {moduleIsPlaying ? "⏸ Pause" : done.includes(firstOpen.id) ? "▶ Play module again" : `▶ Play from Lektion ${firstOpen.index + 1}`}
        </button>
      ) : (
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-3 text-center text-sm text-slate-500">
          Audio for this module is coming soon.
        </p>
      )}
      {firstOpen && (
        <p className="text-center text-[11px] text-slate-500">
          Keeps playing in the background and continues to the next lesson and module by itself.
        </p>
      )}

      <ol className="space-y-2">
        {lessons.map((l) => {
          const audio = lessonAudio(l.id, settings.voice);
          const current = player.lesson?.id === l.id;
          const activeStep = current ? player.cueId : undefined;
          return (
            <li key={l.id} className={`rounded-2xl border bg-white p-3 ${current ? "border-amber-400" : "border-slate-200"}`}>
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    done.includes(l.id) ? "bg-green-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {done.includes(l.id) ? "✓" : l.index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p lang="de" className="text-sm font-semibold text-slate-800">
                    {l.titleDe}
                  </p>
                  <p className="text-xs text-slate-500">
                    {l.titleEn}
                    {audio ? ` · ${minutes(audio.duration)}` : ""}
                  </p>
                </div>
                {audio ? (
                  <button
                    type="button"
                    onClick={() => (current ? player.toggle() : player.play(l.id))}
                    aria-label={current && player.playing ? `Pause ${l.titleDe}` : `Play ${l.titleDe}`}
                    className="shrink-0 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-900 active:scale-95"
                  >
                    {current && player.playing ? "⏸" : "▶"}
                  </button>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400">soon</span>
                )}
              </div>

              {l.content && (
                <details className="mt-2" open={current}>
                  <summary className="cursor-pointer text-xs font-semibold text-slate-600">Read the lesson</summary>
                  <ol className="mt-2 space-y-2">
                    {l.content.steps.map((step, i) => {
                      const active = activeStep === `s${i}`;
                      const startAt = audio?.cues.find((c) => c.id === `s${i}`)?.start;
                      return (
                        <li
                          key={i}
                          className={`rounded-xl p-2.5 text-sm ${active ? "bg-amber-50 ring-1 ring-amber-300" : "bg-slate-50"}`}
                        >
                          {"say" in step ? (
                            <TriText tri={step.say} />
                          ) : (
                            <div className="space-y-1.5">
                              <div className="flex items-start justify-between gap-2">
                                <p lang="de" className="font-semibold text-slate-900">
                                  <RichText text={step.de} />
                                </p>
                                <ListenButton text={step.de} label="Hear" />
                              </div>
                              <TriText tri={step.meaning} />
                              {step.tip && (
                                <div className="border-l-2 border-amber-300 pl-2">
                                  <TriText tri={step.tip} showLabels={false} />
                                </div>
                              )}
                            </div>
                          )}
                          {startAt !== undefined && (
                            <button
                              type="button"
                              onClick={() => player.play(l.id, startAt)}
                              className="mt-1.5 text-[11px] font-semibold text-amber-700"
                            >
                              ▶ Play from here
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </details>
              )}
            </li>
          );
        })}
      </ol>

      {withAudio.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-3">
          <p className="text-xs text-slate-500">Save this module on your phone (on Wi-Fi) so listening uses no mobile data.</p>
          <div className="mt-2">
            {offline === "saved" && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-green-700">✓ Saved for offline</span>
                <button type="button" onClick={() => void removeOffline()} className="text-xs text-slate-500 underline">
                  Remove
                </button>
              </div>
            )}
            {(offline === "none" || offline === "error") && (
              <button
                type="button"
                onClick={() => void saveOffline()}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 active:bg-slate-50"
              >
                ⬇ Save module ({(bytes / 1024 / 1024).toFixed(1)} MB)
              </button>
            )}
            {offline === "error" && <p className="mt-1 text-xs text-red-700">Saving failed — check your connection.</p>}
            {offline === "saving" && (
              <p className="text-sm text-slate-600">
                Saving… {savedCount}/{srcs.length}
              </p>
            )}
            {offline === "unsupported" && <p className="text-xs text-slate-500">This browser can&apos;t save audio offline.</p>}
          </div>
        </div>
      )}

      {AUDIO.engine === "windows" && withAudio.length > 0 && (
        <p className="rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
          <strong>Test voices.</strong> These are robotic computer voices for testing. Human-sounding German and Telugu
          voices come from Google once the voice key is added.
        </p>
      )}
    </div>
  );
}
