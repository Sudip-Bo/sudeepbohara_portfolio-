# 02 — Design System

Status: active · Documents the **current** `portfolio-v3` system as implemented, and the rules
for extending it.
Ground truth: `src/app/globals.css` and `tailwind.config.ts`. If this document and those files
disagree, the code is what ships — fix the drift rather than designing around it.

---

## 1. Foundations

Light, neutral, near-monochrome. Colour is an accent, never the identity of a page.

- Surfaces are white / off-white.
- Type is charcoal, not pure black.
- Borders and shadows are barely-there.
- One accent family (dark neutral), used for primary actions and at most one focus point per
  viewport.

## 2. Colour tokens (as implemented)

Defined as CSS variables in `src/app/globals.css` `:root`, exposed to Tailwind in
`tailwind.config.ts` under `theme.extend.colors`. **Never hardcode a hex in a component, and
never use a stock Tailwind palette colour** (`bg-slate-900`, `text-blue-600`).

| Token | Value | Use |
|---|---|---|
| `background` | `#fafafa` | Page canvas (off-white) |
| `foreground` | `#1a1a1a` | Primary text (charcoal, not `#000`) |
| `primary` | `#1a1a1a` | Strong emphasis surfaces/text |
| `primary-foreground` | `#fafafa` | Text on `primary` |
| `surface-1` | `#ffffff` | Cards, alternating sections, inputs |
| `surface-2` | `#f5f5f5` | Recessed surfaces, icon wells, footer |
| `surface-3` | `#e8e8e8` | Deepest neutral step, dividers/skeletons |
| `frosted-glass` | `rgba(255,255,255,0.85)` | Sticky nav only (see §7) |
| `border-subdued` | `rgba(0,0,0,0.08)` | Default hairline border |
| `border-highlight` | `rgba(0,0,0,0.15)` | Hover/active border |
| `accent-primary` | `#2d2d2d` | Primary CTA background, key icons |
| `accent-secondary` | `#4a4a4a` | Secondary accent, small emphases |
| `muted` | `rgba(0,0,0,0.5)` | Muted text |
| `muted-foreground` | `rgba(0,0,0,0.4)` | Supporting body copy, placeholders |
| `card` / `card-foreground` | `#ffffff` / `#1a1a1a` | Card surface pair |
| `border` | `rgba(0,0,0,0.08)` | Global `*` border colour |

### Colour rules

1. **One accent.** `accent-primary` is the action colour. If more than ~5% of a screenshot is
   accent-coloured, reduce it.
2. **No purple, indigo, violet, or gradient identity.** Permanently retired (see
   `docs/01-Brand.md` §5). A single-step neutral gradient (`#ffffff → #fafafa`) is the only
   gradient permitted, and only when it is essentially invisible.
3. **Semantic colours** are limited to feedback states. Only error red is currently in use
   (`border-red-500` / `text-red-500` in the contact form) and it is an un-tokenised stock
   Tailwind colour — known debt; if success/warning states are needed, add
   `--state-error` / `--state-success` tokens rather than reaching for the stock palette.
4. **Dark mode is out of scope** for `portfolio-v3`. The light system is the design. Do not add
   a theme toggle or `dark:` variants without an explicit decision — note that
   `PROJECT_RULES.md` still lists "dark mode consistent" in its QA gate, a leftover from the
   retired obsidian direction.

### Known token debt

- `accent-indigo`, `accent-cyan`, `accent-emerald` are referenced in `src/app/layout.tsx`,
  `src/components/{Navigation,Footer,Contact}.tsx`, `src/components/{services,about,projects}/…`,
  and throughout `src/app/admin/**`, but **do not exist** in `tailwind.config.ts`. Those classes
  are silently dropped — e.g. the skip-link's `focus:bg-accent-indigo` produces no background,
  and `Footer`'s tagline has no colour.
- `text-secondary` is used in `src/app/projects/[slug]/page.tsx` and is likewise undefined
  (`secondary` is not a token; `muted`/`muted-foreground` are the real ones).
- Before using any token class, grep `tailwind.config.ts` for it.

## 3. Typography

Loaded in `src/app/layout.tsx` via `next/font/google`:

- **Inter** → `--font-inter`, mapped to `font-sans`. Display and body.
- **JetBrains Mono** → `--font-mono`, mapped to `font-mono`. Section indices (`01`, `02`),
  technical pills, metadata, code identifiers.

Body defaults (`globals.css`): `line-height: 1.6`, antialiased, Inter with system fallbacks.

### Scale in use

| Role | Classes |
|---|---|
| Hero H1 | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight display-tight` |
| Section H2 | `text-4xl md:text-5xl font-bold display-tight` |
| Card H3 | `text-lg`–`text-xl font-bold` |
| Lead paragraph | `text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed` |
| Body | `text-base text-muted-foreground leading-relaxed` |
| Meta / label | `text-sm font-medium` (mono for indices) |

### Type rules

- `.display-tight` (`letter-spacing: -0.035em`) on display headings only — never on body.
- Body measure ~60–75 characters: `max-w-2xl` / `max-w-3xl` for prose, `max-w-7xl` for layout.
- Weights: 400 body, 500 for labels/CTAs, 700 for headings. No 800/900.
- `.text-balance` (`text-wrap: balance`) is available for headlines.
- Reach for scale, weight, measure and tracking **before** colour, borders, or shadows.

## 4. Spacing and layout

- Section padding: `py-20 px-6` standard, `py-24 px-6` for heavier sections (Hero uses
  `min-h-screen … pt-24 pb-16`).
- Container: `max-w-7xl mx-auto` (nav also uses `px-4 sm:px-6 lg:px-8`).
- Section header block: `text-center mb-16` is the current pattern. It is *permitted*, not
  mandatory — editorial, left-aligned headers are preferred for new work where they strengthen
  hierarchy (see §9).
- Grids: `grid md:grid-cols-2 lg:grid-cols-3 gap-8` for cards; `gap-8`/`gap-12` for split layouts.
- Rhythm: multiples of 4 (Tailwind's default scale). No arbitrary `px` values.
- Alternating surfaces (`bg-surface-1` on every other section) is the current sectioning device
  instead of heavy dividers.
- **When a section feels weak, increase spacing and remove elements before adding any.**

## 5. Radii, borders, elevation

- Radii: `rounded-lg` (controls, small), `rounded-xl` (buttons, inputs), `rounded-2xl` (cards,
  panels), `rounded-full` (pills, badges). Nothing larger.
- Borders: `border border-border-subdued` by default; `hover:border-border-highlight` for
  interactive lift. Hairlines do the work that shadows would in a louder system.
- Shadows: `shadow-sm` at rest, up to `shadow-xl` on hover for cards. Neutral only — **never a
  coloured or glowing shadow**.

## 6. Components — canonical patterns

**Primary button** — `px-8 py-4 bg-accent-primary text-white font-medium rounded-xl
hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary
focus:ring-offset-2 focus:ring-offset-background`

**Secondary button** — `px-8 py-4 bg-surface-1 text-foreground font-medium rounded-xl border
border-border-subdued hover:border-border-highlight transition-all` + the same focus ring.

**Card** — `p-8 bg-surface-1 rounded-2xl border border-border-subdued shadow-sm hover:shadow-xl
transition-all duration-300`

**Pill / tag** — `px-4 py-2 bg-surface-2 text-sm rounded-full border border-border-subdued`

**Input / select / textarea** — `w-full px-4 py-3 rounded-xl border border-border-subdued
bg-surface-1 text-foreground placeholder:text-muted-foreground focus:border-accent-primary
focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all`

**Badge (availability)** — `inline-flex items-center gap-2 px-4 py-2 bg-surface-1 border
border-border-subdued rounded-full` with a `lucide-react` icon at `w-4 h-4`.

**Icons** — `lucide-react` only. `w-4 h-4` inline, `w-5 h-5` in buttons, `w-6 h-6`–`w-8 h-8` in
icon wells (`bg-surface-2 rounded-xl` square). Decorative icons get `aria-hidden="true"`.

**Loading** — neutral skeletons (`bg-surface-2 rounded-lg animate-pulse`) matching final
geometry. No spinners on content.

**Empty states** — honest copy from `CONTENT_GUIDE.md` ("New case studies coming soon.", "No
enquiries yet."). Never placeholder cards.

## 7. Effects budget

- **Frosted glass:** the `.frosted` utility (`rgba(255,255,255,0.85)` + `blur(12px)`) is
  sanctioned for the sticky navigation over scrolling content and **nowhere else**.
- **Banned:** glow, coloured shadows, multi-stop gradients, animated gradient borders, shimmer
  sweeps, noise overlays, aurora/orb/beam backgrounds, 3D or perspective transforms, tilted
  browser mockups, spline/three.js scenes, mesh backgrounds.
- **Banned:** dashboard aesthetics — stat tiles, sparklines, KPI cards, fake charts, fake
  terminals.

## 8. Motion

Library: `framer-motion` (already a dependency). Philosophy inherited from `BRAND_GUIDE.md`:
**performance before animation**.

- Standard entrance: `initial={{ opacity: 0, y: 20 }}` → `animate`/`whileInView={{ opacity: 1,
  y: 0 }}` with `viewport={{ once: true }}`.
- Hover: micro-lift up to `y: -4px`, `scale` no greater than `1.01`, border/shadow transition
  `duration-300`.
- **Budget: at most one entrance animation per viewport.** Never stagger an entire grid.
- **Always** honour `prefers-reduced-motion` via `useReducedMotion()`.
- Banned: scroll-jacking, scroll-driven scaling of large elements, counters that count up,
  marquees, autoplay video, parallax stacks, pulsing dots.

Implementation note: several existing components pass `transition={{ stiffness: 100, damping:
20 }}` without `type: "spring"`, so those values are inert. Correct form is
`transition={{ type: "spring", stiffness: 100, damping: 20 }}`. Known debt; fix when touching a
component for other reasons.

## 9. Editorial composition

Centred-everything is the default that makes a portfolio look templated. For new work prefer:

- A strong left-aligned headline with generous right margin, or a deliberate asymmetric split.
- Mono index labels to give sections structure.
- One dominant element per section rather than a grid of equal-weight cards.
- Real imagery at consistent aspect ratios (`aspect-[16/9]` is the current project-image ratio).

Existing centred section headers stay as they are until a section is intentionally redesigned —
this document does not authorise a sweeping visual change.

## 10. Accessibility (non-negotiable)

- Semantic landmarks; one `h1` per page; ordered heading levels.
- Visible focus on every interactive element (`focus:ring-2 focus:ring-accent-primary
  focus:ring-offset-2`).
- Contrast ≥ 4.5:1 for body text. `muted-foreground` (`rgba(0,0,0,0.4)`) on `#fafafa` is
  **borderline** — do not use it for small or essential text; prefer `muted` or `foreground`.
- Real `<label>` for every field. Never placeholder-as-label.
- Touch targets ≥ 44px (nav's `p-3` mobile toggle is the reference).
- Skip link is present in `layout.tsx` — note its `focus:bg-accent-indigo` is a dead class, so
  it currently renders unstyled-background; fix when touching layout.
- Keyboard-operable everything; `prefers-reduced-motion` respected.

## 11. Responsive behaviour

Breakpoints: Tailwind defaults, designed at 375 / 768 / 1440.

- Mobile: single column, `px-6`, nav collapses to a frosted sheet.
- Tablet (`md`): two-column grids, section type steps up.
- Desktop (`lg`+): three-column grids, full display scale, `max-w-7xl` container.
- Test all three before considering any UI change complete.

## 12. Performance

- Images through `next/image` with explicit sizing; remote hosts allowlisted in
  `next.config.js` (currently only `images.unsplash.com` — real project imagery will need its
  own host added, or should live in `public/`).
- `formats: ['image/avif', 'image/webp']`, `compress: true`, `poweredByHeader: false` already
  configured.
- No new dependency for a visual effect.
- Target Lighthouse ≥ 95 (`PROJECT_RULES.md`) — measured, never displayed as a claim on the site.

## 13. Extending the system

1. Check whether an existing token or pattern already covers the need.
2. If a token is genuinely missing, add it to `:root` in `globals.css` **and** to
   `tailwind.config.ts`, then document it here in the same change.
3. Never introduce a colour, effect, or section pattern that contradicts
   `.devin/skills/ui-ux-pro-max/SKILL.md`.
4. Run `npm run lint` and `npm run build` before considering the change done.
