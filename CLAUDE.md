# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server

No test runner or linter is configured.

## Architecture

AETHER ("The Experience Engine") is a single-page Next.js 16 app (App Router, React 19) that converts natural language descriptions of feelings/experiences into detailed music prompts for Suno AI.

### Flow

1. User types a feeling (e.g., "A rainy night drive with no destination")
2. `POST /api/analyze` sends the text to the Anthropic Claude API, which returns PESR channel values (0-10 each), authenticity, context, and automation type
3. The `runEngine()` function in `AetherEngine.jsx` applies neuroaesthetic sidechain rules (channel interactions, context modifiers, authenticity scaling) and computes a depth score
4. Engine generates a detailed music prompt (genre, tempo, instruments, vocals, mood, production, structure) based on processed channel values
5. User copies the prompt to clipboard and opens Suno

### Core Concepts

- **PESR Channels**: P (TWIST/Prediction — surprise), E (INTENSITY/Embodied — physicality), S (SOUL/Self — personal meaning), R (CROWD/Relational — social connection)
- **Authenticity (a3)**: 0.1–2.0 scale controlling raw/organic vs polished production feel
- **Automation types**: build, burst, dissolve, release, wave, steady — control song structure/dynamics
- **Sidechain rules**: Channels interact (e.g., high E suppresses P via "trance pressure", high P suppresses R via "analytic damping", collective context boosts E+R)

### Key Files

- `app/page.js` — Entry point, renders `AetherEngine` component
- `app/api/analyze/route.js` — Anthropic API proxy (requires `ANTHROPIC_API_KEY` env var)
- `components/AetherEngine.jsx` — All UI and engine logic in one component (radar chart, sliders, prompt generation, presets)

### Known Issue

`components/AetherEngine.jsx` was deleted in the latest commit ("v6 final") but `page.js` still imports it. The component must be restored for the app to work.

## Environment

- Requires `ANTHROPIC_API_KEY` in `.env` (gitignored)
- Deployed on Vercel with `@vercel/analytics`
- Tailwind CSS v4 via PostCSS plugin
- Path alias: `@/*` maps to project root
