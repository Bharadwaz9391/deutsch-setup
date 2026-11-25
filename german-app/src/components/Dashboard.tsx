"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { A1_SYLLABUS, A1_TOTAL_LESSONS } from "@/content/a1/syllabus";
import { MILESTONES } from "@/content/milestones";
import { useSettings } from "@/lib/settings";

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
    { icon: "📘", title: "Lesson", minutes: lesson, ready: "Tue" },
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
  const completedLessons = 0; // progress tracking arrives with lessons (Tue)
  const pct = Math.round((completedLessons / A1_TOTAL_LESSONS) * 100);
  const next = A1_SYLLABUS[0];

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
        <Link href={`/course/${next.id}`} className="mt-4 flex items-center justify-between rounded-xl bg-white/10 px-3 py-2.5 text-sm">
          <span>
            Next: <strong>{next.titleDe}</strong>
          </span>
          <span aria-hidden>→</span>
        </Link>
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
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                ready {p.ready}
              </span>
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
