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

export type Settings = {
  name: string;
  modes: ExplanationMode[];
  voice: "female" | "male";
  dailyHours: number;
};
