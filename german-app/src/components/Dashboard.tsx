"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { A1_TOTAL_LESSONS } from "@/content/a1/syllabus";
import { MILESTONES } from "@/content/milestones";
import { COURSE, lessonAudio } from "@/lib/course";
import { useCompletedLessons } from "@/lib/progress";
import { useSettings } from "@/lib/settings";
import { usePlayer } from "./player/PlayerProvider";

const noopSubscribe = () => () => {};

function greeting(hour: number) {
  if (hour < 0) return "Hallo"; // server render: time unknown
  if (hour < 11) return "Guten Morgen";
  if (hour < 18) return "Guten Tag";
  return "Guten Abend";
}

/** Splits the daily study time; speaking gets 1–2 hours as agreed. */
function dailyPlan(hours: number) {
  const total = Math.round(hours * 60);
  const test = 10;
  const vocab = 20;
  const speaking = Math.min(120, Math.max(60, Math.round(total * 0.5)));
  const lesson = Math.max(20, total - test - vocab - speaking);
  return [
    { icon: "🎧", title: "Listen to lessons", minutes: lesson, ready: null },
    { icon: "🃏", title: "Vocabulary review", minutes: vocab, ready: "Sat" },
    { icon: "🎙️", title: "Speaking with your AI teacher", minutes: speaking, ready: "Thu" },
    { icon: "✅", title: "Quick test", minutes: test, ready: "Sat" },
  ];
}

export function Dashboard() {
  const { settings } = useSettings();
  // Read the local hour on the device only (server time would be wrong for the user).
  const hour = useSyncExternalStore(noopSubscribe, () => new Date().getHours(), () => -1);
  const hello = greeting(hour);

  const plan = dailyPlan(settings.dailyHours);
  const player = usePlayer();
  const done = useCompletedLessons();
  const completedLessons = done.length;
  const pct = Math.round((completedLessons / A1_TOTAL_LESSONS) * 100);
  // Continue where the player is, else the first unfinished lesson.
  const next =
    player.lesson ??
    COURSE.find((l) => !done.includes(l.id) && lessonAudio(l.id, settings.voice)) ??
    COURSE.find((l) => !done.includes(l.id)) ??
    COURSE[0];
  const canPlay = Boolean(lessonAudio(next.id, settings.voice));

  return (
    <div className="space-y-5">
      <header>
        <p className="text-sm text-slate-500">Deutsch Setu</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {hello}
          {settings.name ? `, ${settings.name}` : ""}! 👋
        </h1>
      </header>

      {/* Course progress */}
      <section className="rounded-2xl bg-slate-900 p-4 text-white">
        <div className="flex items-baseline justify-between">
          <h2 className="font-semibold">Level A1</h2>
          <span className="text-sm text-slate-300">
            {completedLessons}/{A1_TOTAL_LESSONS} lessons
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-amber-400" style={{ width: `${Math.max(pct, 2)}%` }} />
        </div>
        <div className="mt-4 flex items-center gap-2">
          {canPlay && (
            <button
              type="button"
              onClick={() => (player.lesson?.id === next.id ? player.toggle() : player.play(next.id))}
              aria-label={player.playing ? "Pause" : "Play"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-lg text-slate-900 active:scale-95"
            >
              {player.playing ? "⏸" : "▶"}
            </button>
          )}
          <Link href={`/course/${next.module.id}`} className="flex min-w-0 flex-1 items-center justify-between rounded-xl bg-white/10 px-3 py-2.5 text-sm">
            <span className="min-w-0 truncate">
              {player.lesson ? "Continue" : "Next"}: <strong>Modul {next.module.number} · Lektion {next.index + 1}</strong>{" "}
              <span lang="de" className="text-slate-300">
                {next.titleDe}
              </span>
            </span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Today's plan */}
      <section>
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="font-semibold text-slate-900">Today&apos;s plan</h2>
          <span className="text-xs text-slate-500">{settings.dailyHours} h</span>
        </div>
        <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {plan.map((p) => (
            <li key={p.title} className="flex items-center gap-3 px-4 py-3">
              <span className="text-xl" aria-hidden>
                {p.icon}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800">{p.title}</p>
                <p className="text-xs text-slate-500">{p.minutes} min</p>
              </div>
              {p.ready && (
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                  ready {p.ready}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Official milestones */}
      <section>
        <h2 className="mb-2 font-semibold text-slate-900">Your path to fluent German</h2>
        <ol className="space-y-2">
          {MILESTONES.map((m, i) => (
            <li key={m.level} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  i === 0 ? "bg-amber-400 text-slate-900" : "bg-slate-100 text-slate-500"
                }`}
              >
                {m.level}
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{m.label}</p>
                <p className="text-xs text-slate-500">{m.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
