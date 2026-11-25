"use client";

import { useSettings } from "@/lib/settings";
import type { ExplanationMode, Tri } from "@/lib/types";

export const MODE_LABELS: Record<ExplanationMode, string> = {
  te: "తెలుగు",
  teLatn: "Telugu (English letters)",
  en: "English",
};

const ORDER: ExplanationMode[] = ["te", "teLatn", "en"];

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
            {tri[mode]}
          </p>
        </div>
      ))}
    </div>
  );
}
