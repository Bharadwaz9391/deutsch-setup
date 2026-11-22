import Link from "next/link";
import type { Metadata } from "next";
import { TriText } from "@/components/TriText";
import { A1_SYLLABUS, A1_TOTAL_HOURS, A1_TOTAL_LESSONS } from "@/content/a1/syllabus";

export const metadata: Metadata = { title: "A1 Course — Deutsch Setu" };

export default function CoursePage() {
  const parts = ["A1.1", "A1.2"] as const;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">A1 Course</h1>
        <p className="text-sm text-slate-500">
          {A1_SYLLABUS.length} modules · {A1_TOTAL_LESSONS} lessons · about {A1_TOTAL_HOURS} hours
        </p>
        <p className="mt-1 text-xs text-slate-400">Based on the Goethe / telc A1 exam and the German integration-course curriculum.</p>
      </header>

      {parts.map((part) => (
        <section key={part} className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{part}</h2>
          {A1_SYLLABUS.filter((m) => m.part === part).map((m) => (
            <Link
              key={m.id}
              href={`/course/${m.id}`}
              className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm active:bg-slate-50"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {m.number}
                </span>
                <span lang="de" className="font-bold text-slate-900">
                  {m.titleDe}
                </span>
              </div>
              <TriText tri={m.title} showLabels={false} />
              <p className="mt-2 text-xs text-slate-400">
                {m.lessons.length} lessons · ~{m.hours} h
              </p>
            </Link>
          ))}
        </section>
      ))}
    </div>
  );
}
