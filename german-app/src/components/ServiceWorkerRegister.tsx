"use client";

import { useEffect } from "react";

/** Registers the service worker (needed for a reliable "Install app" on Android Chrome). */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      /* app still works without it */
    });
  }, []);
  return null;
}
