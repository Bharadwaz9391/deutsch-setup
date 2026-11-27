# Deutsch Setu 🇩🇪 ↔ తెలుగు

Learn German step by step — explained in **Telugu script**, **Telugu in English letters** and **English** — with an AI speaking teacher.

> Working name. "Setu" (సేతు) = bridge: from your mother tongue to German.

## Status — Day 1 (v0.1.0)

| Day | Feature | Status |
|-----|---------|--------|
| Mon | Syllabus, tech stack, installable app (dashboard, A1 course map, settings) | ✅ |
| Tue | Lesson screen + first AI-generated A1 lessons | ⏳ |
| Wed | Audio: German pronunciation + explanations | ⏳ |
| Thu | AI teacher voice conversation (Telugu/German, corrections, male/female) | ⏳ |
| Fri | Daily role-plays + saved sessions | ⏳ |
| Sat | Flashcards (spaced repetition) + lesson tests | ⏳ |
| Sun | Daily plan, dashboard progress, final testing | ⏳ |

## Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| App | Next.js 16 (App Router) + TypeScript + Tailwind CSS | One codebase for phone and laptop; installable (PWA) |
| Backend | Next.js API routes (`src/app/api`) | Keeps API keys on the server |
| Hosting | Vercel (free Hobby plan for personal use) | Deploys automatically from GitHub, HTTPS included |
| Storage | Browser storage (Day 1) → database with accounts later | Simple now, swappable later (`src/lib/settings.ts`) |
| AI teacher | Gemini (audio in → text) | Understands mixed Telugu/German speech, low cost |
| Voices | Google Cloud Text-to-Speech | German, Telugu and English voices, male and female |

## Syllabus sources

A1 is merged from three official references (topic areas only — all lesson content is original):

1. **Goethe-Institut / telc — Start Deutsch 1** exam specification (topics and word groups)
2. **BAMF integration-course curriculum** (fields of action for daily life in Germany)
3. **DW Nicos Weg A1 / Ankommo** (lesson flow, pattern-based grammar)

Teaching-style references: Learn German with Anja, Benjamin – Der Deutschlehrer, Easy German, german.net.

## Run it on your laptop

Requirements: Node.js 20 or newer.

```bash
cd german-app
npm install
npm run dev
```

Open http://localhost:3000.

## Lesson audio (listen in the background)

Every lesson is turned into one MP3 that the app plays like a podcast: it keeps
playing when you switch apps or lock the phone, and continues lesson → lesson →
module by itself. Lesson texts live in `src/content/a1/lessons/m00.ts … m15.ts`
(simple Telugu + English words; German goes in `{curly braces}` so the German
voice speaks it).

1. Put a Google Cloud Text-to-Speech key in `german-app/.env.local`:
   `GOOGLE_TTS_API_KEY=…` (restrict the key to the Text-to-Speech API and set a
   budget alert — the whole course is ~60,000 characters per voice, inside the
   monthly free tier).
2. Generate the audio (uses the human-sounding "Chirp 3 HD" voices):

   ```bash
   npm run course:audio                  # all lessons, female voice
   npm run course:audio -- --voice both  # also the male voice
   npm run course:audio -- --only m03    # just one module after editing it
   ```

3. Commit `public/audio/a1/` and `src/content/a1/audio-manifest.json`, then deploy.

## Deploy so it runs on your phone

1. Push this folder to a new GitHub repository (e.g. `deutsch-setu`).
2. Go to https://vercel.com → sign in with GitHub → **Add New → Project** → import the repository → **Deploy**.
3. Open the Vercel URL on your Android phone in **Chrome** → menu ⋮ → **Add to Home screen / Install app**.

Every `git push` redeploys automatically.

## Project structure

```
src/
  app/                 pages (Home, Course, Module, Speak, Settings) + manifest + API
  components/          UI building blocks (TriText shows the 3 explanation modes)
  content/a1/          A1 syllabus (16 modules, 64 lessons)
  content/milestones.ts official A1 → C1 milestones
  lib/                 types + settings storage
public/                icons + service worker
scripts/make_icons.py  regenerates the app icons
```

## Security notes

- API keys only in `.env.local` (git-ignored) and Vercel environment variables.
- Security headers set in `next.config.ts` (nosniff, no framing, strict referrer, permissions policy).
- Set a hard monthly budget limit on every AI provider account.
