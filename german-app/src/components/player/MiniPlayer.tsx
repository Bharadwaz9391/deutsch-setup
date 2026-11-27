"use client";

import Link from "next/link";
import { stepOfCue } from "@/lib/course";
import { usePlayer } from "./PlayerProvider";

/** Small player bar above the bottom navigation. Visible whenever a lesson is loaded. */
export function MiniPlayer() {
  const { lesson, audio, time, playing, cueId, toggle, next, prev } = usePlayer();
  if (!lesson || !audio) return null;

  const step = stepOfCue(lesson, cueId);
  const line = step && "de" in step ? step.de : lesson.titleDe;
  const pct = Math.min(100, (time / audio.duration) * 100);

  return (
    <div
      role="region"
      aria-label="Lesson player"
      className="fixed inset-x-0 z-20 bottom-[calc(3.6rem+env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto max-w-md px-2">
        <div className="overflow-hidden rounded-2xl bg-slate-900 text-white shadow-lg">
          <div className="h-0.5 bg-slate-700">
            <div className="h-full bg-amber-400" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <Link href={`/course/${lesson.module.id}`} className="min-w-0 flex-1">
              <p className="truncate text-[11px] text-amber-300">
                Modul {lesson.module.number} · Lektion {lesson.index + 1} · {lesson.titleDe}
              </p>
              <p lang="de" className="truncate text-sm font-semibold">
                {line}
              </p>
            </Link>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous step"
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg active:bg-white/10"
            >
              ⏮
            </button>
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-lg text-slate-900 active:scale-95"
            >
              {playing ? "⏸" : "▶"}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next step"
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg active:bg-white/10"
            >
              ⏭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
