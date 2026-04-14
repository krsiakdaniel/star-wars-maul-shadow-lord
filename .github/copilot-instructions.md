# Copilot Instructions — Maul: Shadow Lord

Fan site for the Star Wars animated show **Maul: Shadow Lord** (Disney+, 2026).

---

## Tech Stack

| Tool         | Version                        |
| ------------ | ------------------------------ |
| Next.js      | 16.2.3 (App Router, Turbopack) |
| React        | 19 + React Compiler            |
| TypeScript   | 5.9, strict                    |
| Tailwind CSS | v4                             |
| Lucide React | 1.8.0                          |
| Runtime      | Bun 1.3.9                      |

---

## Project Structure

```
app/                      # Next.js App Router
  layout.tsx              # fonts (Cinzel, Inter), metadata, favicon
  page.tsx                # root page — composes Hero, EpisodeGrid, AboutSection, Footer
  globals.css             # design tokens (CSS vars), keyframe animations
components/
  Footer.tsx              # standalone, not feature-worthy
data/
  constants.ts            # all URL/ID constants (DISNEY_SHOW, IMDB_*, TEASER_*, EPISODE_PLACEHOLDER)
  episodes.ts             # EPISODES array
  about.ts                # CAST, SHOW_DETAILS arrays
features/
  Hero/
    Hero.tsx              # "use client", orchestrator
    components/
      HeroBanner.tsx      # bg image + gradient overlay
      HeroPills.tsx       # badge pills (New Series, rating, season)
      HeroActions.tsx     # Disney+ link + Teaser Trailer button
      HeroActions.types.ts
      PlayIcon.tsx        # CSS border-triangle (legacy, prefer lucide Play)
      PlayIcon.types.ts
      TrailerModal.tsx    # "use client", fullscreen YouTube iframe modal
      TrailerModal.types.ts
  Episodes/
    EpisodeGrid.tsx       # "use client", grid + selectedEpisode state
    EpisodeModal.tsx      # "use client", orchestrator modal
    EpisodeModal.types.ts
    components/
      EpisodeCard.tsx     # "use client", thumbnail card
      EpisodeCard.types.ts
      EpisodeModalStill.tsx   # still image + info overlay
      EpisodeModalStill.types.ts
      EpisodeModalTrailer.tsx # YouTube iframe
      EpisodeModalActions.tsx # Disney+, Teaser, IMDb buttons
      EpisodeModalActions.types.ts
      SmallPlayIcon.tsx   # CSS border-triangle (legacy, prefer lucide Play)
      SmallPlayIcon.types.ts
  About/
    AboutSection.tsx      # server component, grid wrapper
    components/
      CastCard.tsx        # voice cast list
      ShowDetailsCard.tsx # show metadata list
texts/
  ui.ts                   # ALL user-visible strings — UI object
types/
  episode.ts              # Episode interface
  about.ts                # CastMember, ShowDetail interfaces
public/
  images/
    episodes/             # episode-1-thumb.webp … episode-4-thumb.webp
    logo/                 # disney-logo.png
    darth-maul-background.webp   # hero section background
    darth-maul-preview.webp      # placeholder for un-aired episodes (5–10)
```

---

## Conventions

### TypeScript

- `interface` for data shapes (`Episode`, `CastMember`)
- `type` for React props (`EpisodeCardProps`)
- Companion `*.types.ts` file alongside every component that accepts props
- `strict: true` — no `any`, no type assertions unless unavoidable

### Components

- Arrow function components only: `export const Foo = () => {}`
- `"use client"` only when hooks or browser events are needed; prefer server components
- One component per file; filename = component name (PascalCase)
- Props type imported from the companion `.types.ts` file in the same directory

### Feature structure

- Each feature lives under `features/FeatureName/`
- Sub-components go in `features/FeatureName/components/`
- The feature root file (`Hero.tsx`, `EpisodeGrid.tsx`, etc.) is the public API — `app/page.tsx` imports only from here
- `@/` alias resolves to the project root

### Import order (enforced by Prettier plugin)

1. `react`
2. `next/*`
3. Third-party packages (e.g. `lucide-react`)
4. `@/data/*`
5. `@/texts/*`
6. `@/types/*`
7. Relative imports (`./`, `../`)

### Styling

- Tailwind CSS v4 utility classes — no arbitrary values without good reason
- CSS custom properties (design tokens) defined in `globals.css` under `:root`; use `var(--c-*)` names in `style` props when a Tailwind class doesn't exist
- No inline `style` objects with static values that have a Tailwind equivalent
- `style={{ fontFamily: "var(--font-cinzel), serif" }}` is acceptable (no Tailwind utility for CSS var fonts)

### Icons

- Use `lucide-react` — preferred for all icons
- `<Play size={N} fill="currentColor" />` for white-on-dark trailer buttons
- `<Play size={N} fill="black" color="black" />` for dark-on-light (Disney+ button)

### Strings

- All user-visible text lives in `texts/ui.ts` under the `UI` object
- Never hardcode display strings directly in JSX — always reference `UI.*`

### Data & constants

- All URLs and IDs live in `data/constants.ts`
- Episode data lives in `data/episodes.ts` as the `EPISODES` array
- Cast / show details live in `data/about.ts`

---

## Commands

```bash
bun run dev      # start dev server (Turbopack)
bun run build    # production build
bun run lint     # ESLint
npx tsc --noEmit # type check
```

> Use `bun run build`, not `bun build` — `bun build` is Bun's native bundler and requires entrypoints.

---

## Image Setup

- Local images go in `public/images/` and are referenced as `/images/…` (no `public/` prefix)
- Remote images require a `remotePatterns` entry in `next.config.ts`
- Currently allowed remote host: `img.youtube.com`
- Episodes 1–4 have individual stills (`episode-N-thumb.webp`); episodes 5–10 use `EPISODE_PLACEHOLDER` (`/images/darth-maul-preview.webp`)

---

## Defensive Error Coding (API)

Validate and handle failures at every system boundary. Do not trust input, external data, or environment config.

**Validate inputs at API boundaries**

```ts
if (!episode || typeof episode.num !== 'number') {
  return NextResponse.json({ error: 'Invalid episode data' }, { status: 400 })
}
```

**Handle nulls/undefined explicitly — never assume**

```ts
// BAD
episode.title.toLowerCase()

// GOOD
episode?.title?.toLowerCase() ?? ''
```

**Never silently swallow errors**

```ts
// BAD
try {
  fetchData()
} catch (_) {}

// GOOD
try {
  fetchData()
} catch (err) {
  console.error('fetchData failed:', err)
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
}
```

**Fail fast with clear, typed error responses** — return meaningful HTTP status codes and error messages from API routes.

**Guard against unexpected values**

```ts
const status = getStatus()
if (status !== 'active' && status !== 'inactive') {
  throw new Error(`Unexpected status: ${status}`)
}
```

> Only validate at **system boundaries** (API route inputs, external data, env config). Do not wrap internal pure logic in try/catch.

---

## Key Design Decisions

- **No barrel `index.ts` files** — import directly from source files
- **`"use client"` boundary** — pushed as deep as possible; only stateful leaves are client components
- **EpisodeModal is split** into `EpisodeModalStill`, `EpisodeModalTrailer`, and `EpisodeModalActions` sub-components to keep the orchestrator readable
- **`key={selectedEpisode?.num ?? -1}`** on `EpisodeModal` resets its state (`showTrailer`) each time a new episode is selected
