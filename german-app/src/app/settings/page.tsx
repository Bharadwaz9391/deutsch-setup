import type { Metadata } from "next";
import { SettingsForm } from "@/components/SettingsForm";

export const metadata: Metadata = { title: "Settings — Deutsch Setu" };

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Settings</h1>
      <SettingsForm />
    </div>
  );
}
