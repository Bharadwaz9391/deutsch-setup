import type { Metadata } from "next";
import { RidePlayer } from "@/components/RidePlayer";
import { TriText } from "@/components/TriText";

export const metadata: Metadata = { title: "Ride mode — Deutsch Setu" };

export default function RidePage() {
  return (
    <div className="space-y-4">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Ride mode 🛵</h1>
        <TriText
          tri={{
            te: "రైడ్ చేస్తూ వినండి. వేరే యాప్ వాడుతున్నా, స్క్రీన్ లాక్ అయినా పాఠం ఆగదు.",
            teLatn: "Ride chestoo vinandi. Vere app vaadutunnaa, screen lock ayinaa paatham aagadu.",
            en: "Listen while you ride. The lesson keeps playing when you switch to another app or lock the screen.",
          }}
        />
      </header>

      <p className="rounded-xl bg-slate-100 p-3 text-xs text-slate-600">
        <strong>Eyes on the road.</strong> Everything is audio — start a lesson before you ride and use the lock-screen
        or earbud buttons (⏭ = next phrase). Keep the volume low or use one earbud so you hear the traffic.
      </p>

      <RidePlayer />
    </div>
  );
}
