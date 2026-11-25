import manifestJson from "@/content/a1/audio-manifest.json";
import { getLesson } from "@/content/a1/lessons";
import { A1_SYLLABUS } from "@/content/a1/syllabus";
import type { CourseModule, LessonContent, LessonStep } from "./types";

// The whole A1 course as one ordered list of lessons, plus the generated audio.

export type CourseLesson = {
  id: string;
  /** Position in the whole course (0-based) */
  order: number;
  module: CourseModule;
  /** Position inside the module (0-based) */
  index: number;
  titleDe: string;
  titleEn: string;
  content?: LessonContent;
};

export type Cue = { id: string; start: number };
export type LessonAudio = { src: string; duration: number; bytes: number; cues: Cue[] };
type VoiceEntry = { voices: Record<string, string>; lessons: Record<string, LessonAudio> };
export type AudioManifest = {
  engine?: "google" | "windows";
  voices?: Partial<Record<"female" | "male", VoiceEntry>>;
};

export const AUDIO = manifestJson as AudioManifest;

export const COURSE: CourseLesson[] = A1_SYLLABUS.flatMap((module) =>
  module.lessons.map((l, index) => ({ id: l.id, module, index, titleDe: l.titleDe, titleEn: l.titleEn, content: getLesson(l.id) })),
).map((l, order) => ({ ...l, order }));

const BY_ID = new Map(COURSE.map((l) => [l.id, l]));

export function courseLesson(id: string): CourseLesson | undefined {
  return BY_ID.get(id);
}

/** Audio for a lesson in the chosen voice (falls back to the other voice). */
export function lessonAudio(id: string, voice: "female" | "male"): LessonAudio | undefined {
  const v = AUDIO.voices ?? {};
  return v[voice]?.lessons[id] ?? v.female?.lessons[id] ?? v.male?.lessons[id];
}

/** The step playing at time t: "intro", "outro" or "s<index>". */
export function cueAt(cues: Cue[], t: number): Cue | undefined {
  let current: Cue | undefined;
  for (const c of cues) if (c.start <= t + 0.05) current = c;
  return current;
}

export function stepOfCue(lesson: CourseLesson, cueId: string | undefined): LessonStep | undefined {
  const m = cueId?.match(/^s(\d+)$/);
  return m ? lesson.content?.steps[Number(m[1])] : undefined;
}

/** Strips the {German} markers for places that can't show formatting (lock screen). */
export function plain(text: string) {
  return text.replace(/[{}]/g, "");
}
