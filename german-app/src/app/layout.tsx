import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { BottomNav } from "@/components/BottomNav";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deutsch Setu — German in Telugu & English",
  description: "Learn German step by step, explained in Telugu and English, with an AI speaking teacher.",
  applicationName: "Deutsch Setu",
  appleWebApp: { capable: true, title: "Deutsch Setu", statusBarStyle: "default" },
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="h-1 w-full bg-[linear-gradient(90deg,#000_0_33%,#dd0000_33%_66%,#ffce00_66%)]" aria-hidden />
        <main className="mx-auto max-w-md px-4 pb-28 pt-5">{children}</main>
        <Suspense fallback={null}>
          <BottomNav />
        </Suspense>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
