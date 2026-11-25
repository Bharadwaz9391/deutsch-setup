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
 * One piece of a spoken explanation in Ride mode: either German (spoken by the
 * German voice) or Telugu (spoken by the Telugu voice; `teLatn` is what the
 * placeholder English-letter voice reads until real Telugu audio is generated).
 */
export type SpokenPart = { de: string } | { te: string; teLatn: string };

/** A phrase taught in a Ride-mode audio lesson. */
export type RidePhrase = {
  id: string;
  /** The German sentence */
  de: string;
  /** What it means */
  meaning: Tri;
  /** Where / when to use it */
  where: Tri;
  /** Why it is built this way (grammar or culture), shown on screen */
  why?: Tri;
  /** The same "why", split so German words are spoken by the German voice */
  whyAudio?: SpokenPart[];
};

/** One audio lesson = one track in the Ride-mode player. */
export type RideTrack = {
  id: string;
  titleDe: string;
  title: Tri;
  /** First sentence of the spoken intro (the "how it works" part is shared) */
  intro: Tri;
  phrases: RidePhrase[];
};

export type RidePack = {
  id: string;
  title: Tri;
  tracks: RideTrack[];
};

export type Settings = {
  name: string;
  modes: ExplanationMode[];
  voice: "female" | "male";
  dailyHours: number;
};
