"use client";

import { useSettings } from "@/lib/settings";
import type { ExplanationMode, Tri } from "@/lib/types";

export const MODE_LABELS: Record<ExplanationMode, string> = {
  te: "తెలుగు",
  teLatn: "Telugu (English letters)",
  en: "English",
};

const ORDER: ExplanationMode[] = ["te", "teLatn", "en"];

/** Renders text where German words are marked as {German}: shown bold, tagged lang="de". */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\{([^}]+)\}/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} lang="de" className="font-semibold text-slate-900">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Shows a text in every explanation mode the learner selected, side by side. */
export function TriText({
  tri,
  variant = "body",
  showLabels = true,
}: {
  tri: Tri;
  variant?: "title" | "body";
  showLabels?: boolean;
}) {
  const { settings } = useSettings();
  const modes = ORDER.filter((m) => settings.modes.includes(m));

  return (
    <div className="space-y-1.5">
      {modes.map((mode) => (
        <div key={mode} lang={mode === "te" ? "te" : "en"}>
          {showLabels && modes.length > 1 && (
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {MODE_LABELS[mode]}
            </span>
          )}
          <p
            className={
              variant === "title"
                ? "text-base font-semibold leading-snug text-slate-800"
                : "text-sm leading-relaxed text-slate-600"
            }
          >
            <RichText text={tri[mode]} />
          </p>
        </div>
      ))}
    </div>
  );
}
