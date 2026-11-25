import Link from "next/link";
import { notFound } from "next/navigation";
import { ListenButton } from "@/components/ListenButton";
import { TriText } from "@/components/TriText";
import { A1_SYLLABUS, getModule } from "@/content/a1/syllabus";

export function generateStaticParams() {
  return A1_SYLLABUS.map((m) => ({ moduleId: m.id }));
}

export async function generateMetadata({ params }: PageProps<"/course/[moduleId]">) {
  const { moduleId } = await params;
  const m = getModule(moduleId);
  return { title: m ? `${m.titleDe} — Deutsch Setu` : "Module — Deutsch Setu" };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <h2 className="mb-2 text-sm font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default async function ModulePage({ params }: PageProps<"/course/[moduleId]">) {
  const { moduleId } = await params;
  const m = getModule(moduleId);
  if (!m) notFound();

  return (
    <div className="space-y-4">
      <Link href="/course" className="text-sm text-slate-500">
        ← All modules
      </Link>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
          {m.part} · Module {m.number}
        </p>
        <div className="flex items-center justify-between gap-3">
          <h1 lang="de" className="text-2xl font-bold">
            {m.titleDe}
          </h1>
          <ListenButton text={m.titleDe} />
        </div>
        <TriText tri={m.title} variant="title" />
        <TriText tri={m.summary} />
      </header>

      <Section title="After this module you can…">
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          {m.canDo.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section title="Lessons">
        <ol className="space-y-2">
          {m.lessons.map((l, i) => (
            <li key={l.id} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5">
              <span className="text-xs font-bold text-slate-400">{i + 1}</span>
              <div className="flex-1">
                <p lang="de" className="text-sm font-semibold text-slate-800">
                  {l.titleDe}
                </p>
                <p className="text-xs text-slate-500">{l.titleEn}</p>
              </div>
              <span className="text-[10px] font-semibold text-slate-400">🔒 Tue</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Grammar">
        <ul className="space-y-1 text-sm text-slate-700">
          {m.grammar.map((g) => (
            <li key={g}>• {g}</li>
          ))}
        </ul>
      </Section>

      <Section title="Vocabulary">
        <div className="flex flex-wrap gap-2">
          {m.vocabulary.map((v) => (
            <span key={v} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              {v}
            </span>
          ))}
        </div>
      </Section>

      <Section title="🎙️ Speaking role-play">
        <TriText tri={m.roleplay.situation} />
        <p className="mt-2 text-xs text-slate-500">
          Your partner: <span lang="de" className="font-semibold">{m.roleplay.partnerDe}</span> · AI teacher arrives Thursday
        </p>
      </Section>

      <details className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
        <summary className="cursor-pointer text-sm font-semibold text-slate-700">Curriculum references</summary>
        <p className="mt-2">
          <strong>Goethe / telc Start Deutsch 1:</strong> {m.sources.goethe.join(", ")}
        </p>
        <p className="mt-1">
          <strong>BAMF integration course:</strong> {m.sources.bamf.join(", ")}
        </p>
      </details>
    </div>
  );
}
