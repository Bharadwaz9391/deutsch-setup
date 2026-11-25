"use client";

import { MODE_LABELS } from "@/components/TriText";
import { useSettings } from "@/lib/settings";
import type { ExplanationMode } from "@/lib/types";

const MODES: ExplanationMode[] = ["te", "teLatn", "en"];
const HOURS = [2, 2.5, 3];

export function SettingsForm() {
  const { settings, update, reset } = useSettings();

  function toggleMode(mode: ExplanationMode) {
    const has = settings.modes.includes(mode);
    const next = has ? settings.modes.filter((m) => m !== mode) : [...settings.modes, mode];
    if (next.length === 0) return; // at least one mode must stay on
    update({ modes: next });
  }

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
          Your name
        </label>
        <input
          id="name"
          value={settings.name}
          onChange={(e) => update({ name: e.target.value.slice(0, 40) })}
          placeholder="e.g. Ravi"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base"
          autoComplete="given-name"
        />
      </section>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-slate-800">Explanation languages</legend>
        <p className="text-xs text-slate-500">Pick one or more. They are shown side by side.</p>
        {MODES.map((mode) => (
          <label key={mode} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
            <input
              type="checkbox"
              checked={settings.modes.includes(mode)}
              onChange={() => toggleMode(mode)}
              className="h-5 w-5 accent-amber-600"
            />
            <span className="text-sm text-slate-800">{MODE_LABELS[mode]}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-slate-800">Teacher voice</legend>
        <div className="grid grid-cols-2 gap-2">
          {(["female", "male"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => update({ voice: v })}
              aria-pressed={settings.voice === v}
              className={`rounded-xl border px-3 py-3 text-sm font-medium capitalize ${
                settings.voice === v ? "border-amber-500 bg-amber-50 text-amber-800" : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-slate-800">Daily study time</legend>
        <div className="grid grid-cols-3 gap-2">
          {HOURS.map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => update({ dailyHours: h })}
              aria-pressed={settings.dailyHours === h}
              className={`rounded-xl border px-3 py-3 text-sm font-medium ${
                settings.dailyHours === h ? "border-amber-500 bg-amber-50 text-amber-800" : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {h} h
            </button>
          ))}
        </div>
      </fieldset>

      <section className="rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-sm font-semibold text-slate-800">Your data</p>
        <p className="mt-1 text-xs text-slate-500">
          Settings are stored only on this device. Nothing is sent to a server yet.
        </p>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Reset all settings on this device?")) reset();
          }}
          className="mt-3 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700"
        >
          Reset settings
        </button>
      </section>
    </div>
  );
}
