// Shared types for course content and user settings.

/** Text in the three explanation modes the learner can choose. */
export type Tri = {
  /** Telugu script */
  te: string;
  /** Telugu written in English letters */
  teLatn: string;
  /** English */
  en: string;
};

export type ExplanationMode = keyof Tri;

export type Lesson = {
  id: string;
  titleDe: string;
  titleEn: string;
};

export type CourseModule = {
  id: string;
  number: number;
  part: "A1.1" | "A1.2";
  titleDe: string;
  title: Tri;
  summary: Tri;
  canDo: string[];
  lessons: Lesson[];
  grammar: string[];
  vocabulary: string[];
  roleplay: { situation: Tri; partnerDe: string };
  /** Estimated study hours for the whole module */
  hours: number;
  /** Where this module comes from in the reference curricula */
  sources: {
    goethe: string[]; // Goethe/telc Start Deutsch 1 topic areas
    bamf: string[]; // BAMF integration-course fields of action
  };
};

/**
 * A step in a lesson. Text can contain German in {curly braces}: it is shown in
 * bold on screen and spoken by the German voice in the audio, while the rest is
 * spoken by the Telugu teacher voice.
 *
 * - `say`: the teacher explains something (simple Telugu + English words).
 * - `de`: a German word or sentence to learn — heard slowly, explained, then
 *   repeated twice with a pause so the learner can say it aloud.
 */
export type LessonStep =
  | { say: Tri }
  | {
      de: string;
      /** What it means */
      meaning: Tri;
      /** Optional tip: when to use it, a pronunciation hint, or a grammar note */
      tip?: Tri;
    };

/** The teaching content of one lesson (title and order come from the syllabus). */
export type LessonContent = {
  id: string;
  steps: LessonStep[];
};

export type Settings = {
  name: string;
  modes: ExplanationMode[];
  voice: "female" | "male";
  dailyHours: number;
};
