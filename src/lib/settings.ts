"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Settings } from "./types";

// Storage layer. Day 1: browser localStorage (single user, one device).
// Later this module is swapped for a backend (accounts + sync) without touching the UI.

const KEY = "deutsch-setu:settings:v1";

export const DEFAULT_SETTINGS: Settings = {
  name: "",
  modes: ["te", "teLatn", "en"],
  voice: "female",
  dailyHours: 2.5,
};

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedValue: Settings = DEFAULT_SETTINGS;

function read(): Settings {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    raw = null; // storage blocked (private mode etc.)
  }
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as Partial<Settings>) : {};
    cachedValue = { ...DEFAULT_SETTINGS, ...parsed };
    if (!Array.isArray(cachedValue.modes) || cachedValue.modes.length === 0) {
      cachedValue.modes = DEFAULT_SETTINGS.modes;
    }
  } catch {
    cachedValue = DEFAULT_SETTINGS;
  }
  return cachedValue;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => e.key === KEY && cb();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useSettings() {
  const settings = useSyncExternalStore(subscribe, read, () => DEFAULT_SETTINGS);

  const update = useCallback((patch: Partial<Settings>) => {
    const next = { ...read(), ...patch };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // ignore: settings just won't persist
    }
    listeners.forEach((l) => l());
  }, []);

  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {}
    listeners.forEach((l) => l());
  }, []);

  return { settings, update, reset };
}
