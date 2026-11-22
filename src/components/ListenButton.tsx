"use client";

import { useSettings } from "@/lib/settings";

// Day 1: uses the phone's built-in German voice (free, works offline-ish).
// Day 3 replaces this with high-quality cloud voices through our backend.

function pickVoice(voices: SpeechSynthesisVoice[], prefer: "female" | "male") {
  const german = voices.filter((v) => v.lang.toLowerCase().startsWith("de"));
  const hint = prefer === "female" ? /female|frau|anna|katja|helena|petra/i : /male|mann|markus|stefan|conrad|yannick/i;
  return german.find((v) => hint.test(v.name)) ?? german[0];
}

export function ListenButton({ text, label = "Listen" }: { text: string; label?: string }) {
  const { settings } = useSettings();

  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.85; // a bit slower for beginners
    const voice = pickVoice(window.speechSynthesis.getVoices(), settings.voice);
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  }

  return (
    <button
      type="button"
      onClick={speak}
      aria-label={`${label}: ${text}`}
      className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 active:scale-95"
    >
      <span aria-hidden>🔊</span> {label}
    </button>
  );
}
