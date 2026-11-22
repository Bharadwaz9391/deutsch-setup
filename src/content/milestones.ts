// Official milestones shown on the dashboard.
// Wording kept general on purpose: legal requirements change — verify before relying on them.

export type Milestone = {
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  label: string;
  detail: string;
};

export const MILESTONES: Milestone[] = [
  { level: "A1", label: "Start Deutsch 1", detail: "Goethe / telc A1 exam — first official certificate" },
  { level: "A2", label: "Start Deutsch 2", detail: "Everyday conversations, simple work situations" },
  { level: "B1", label: "Integration course goal", detail: "Deutsch-Test für Zuwanderer (DTZ) · level asked for naturalisation" },
  { level: "B2", label: "Professional German", detail: "Job interviews, office communication, many university programmes" },
  { level: "C1", label: "Fluent", detail: "Work and study fully in German" },
];
