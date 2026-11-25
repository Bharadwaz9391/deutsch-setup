"use client";

import { useSyncExternalStore } from "react";

// Which lessons the learner has finished listening to (this device only, like settings).

const KEY = "deutsch-setu:progress:v1";
const listeners = new Set<() => void>();
const EMPTY: string[] = [];
let cachedRaw: string | null | undefined;
let cachedValue: string[] = EMPTY;

function read(): string[] {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {}
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    cachedValue = Array.isArray(parsed) ? parsed : EMPTY;
  } catch {
    cachedValue = EMPTY;
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

export function markLessonDone(id: string) {
  const done = read();
  if (done.includes(id)) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify([...done, id]));
  } catch {}
  listeners.forEach((l) => l());
}

/** IDs of finished lessons. */
export function useCompletedLessons(): string[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
