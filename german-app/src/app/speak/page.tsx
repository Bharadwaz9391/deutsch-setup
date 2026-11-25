import type { Metadata } from "next";

export const metadata: Metadata = { title: "Speak — Deutsch Setu" };

export default function SpeakPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Speak</h1>
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center">
        <p className="text-4xl" aria-hidden>
          🎙️
        </p>
        <p className="mt-3 font-semibold text-slate-800">Your AI teacher arrives on Thursday</p>
        <p className="mt-1 text-sm text-slate-500">
          Talk in Telugu or German, get corrections, and practise real situations: doctor, Bürgeramt, office, café and more.
        </p>
      </div>
    </div>
  );
}
