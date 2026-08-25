# 05 — Hero Section Design Spec

Status: **direction only — not approved for implementation.** This is the design intent that
accompanies `docs/04-Hero-Section-PRD.md`. Review both before any Hero work begins.
All tokens referenced here already exist in `src/app/globals.css` / `tailwind.config.ts`
(`docs/02-Design-System.md`). This spec introduces **no** new colours and **no** new effects.

---

## 1. Design intent in one line

A calm, editorial first screen where confident typography and generous space do the work, with a
single real visual anchor as proof of craft.

## 2. Composition

**Recommended: asymmetric editorial split (desktop `lg`+).**

```
┌──────────────────────────────────────────────────────────────┐
│  [nav — frosted, thin]                                       │
│                                                              │
│   01 / STUDIO            ·  quiet mono index, optional       │
│                                                              │
│   Engineering             ┌────────────────────────────┐     │
│   High-Impact             │                            │     │
│   Digital Experiences     │      VISUAL ANCHOR         │     │
│                           │   real project imagery,    │     │
│   One concise positioning  │  hairline border, neutral │     │
│   sentence, 20–30 words,  │        shadow              │     │
│   set at a comfortable    │                            │     │
│   measure.                └────────────────────────────┘     │
│                                                              │
│   [ Primary CTA ]   Secondary CTA →                          │
│   · small truthful availability line                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- Roughly a 55/45 or 60/40 split, copy left, anchor right. Not a 50/50 symmetric grid.
- Copy column left-aligned. **Do not centre the Hero content on desktop** — the current centred
  stack is the main reason the section reads as templated.
- The headline is the largest element on the entire page and should be allowed to break across
  2–3 lines deliberately (`text-balance` or explicit measure), not stretched full width.
- Generous whitespace above the headline and below the CTA row; the composition should feel
  under-filled rather than packed.

**Alternative (if no real imagery is available): typographic anchor.** Single column, strong
left-aligned oversized headline, mono index label, a hairline rule, and a deliberately empty
right/lower field. The emptiness is the design — do not fill it with a decorative graphic.

## 3. Element specification

### Mono index / eyebrow (optional)

- `font-mono text-xs tracking-widest uppercase text-muted`
- Something structural and true (e.g. `SB STUDIO` or `01 / STUDIO`). Not a marketing tagline.
- Omit entirely rather than inventing a label.

### Headline (`<h1>`)

- `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground display-tight
  leading-[1.05] text-balance`
- Left-aligned on `lg`+. Constrained measure so it wraps to 2–3 lines.
- Colour: `foreground` only. No gradient text, no highlighted word in accent colour.

### Positioning sentence

- `text-lg md:text-xl text-muted leading-relaxed max-w-xl`
- Use `muted`, **not** `muted-foreground` — the latter is borderline for contrast at body size.
- One sentence. If it needs two, the first one is not doing its job.

### Primary CTA

- Canonical primary button from `docs/02-Design-System.md` §6:
  `px-8 py-4 bg-accent-primary text-white font-medium rounded-xl hover:bg-opacity-90
  transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2
  focus:ring-offset-background`
- Optional trailing `ArrowRight` (`w-5 h-5`, `aria-hidden`) with a ≤4px translate on hover.
- One primary action only.

### Secondary CTA

- Prefer the quietest form that still reads as an action: a text link with a hairline underline
  on hover, or the canonical secondary button. Do **not** give it equal visual weight.
- Sits inline beside the primary on `sm`+, stacked beneath on mobile.

### Availability / trust signal

- Two acceptable treatments:
  1. **Pill** (current pattern): `inline-flex items-center gap-2 px-4 py-2 bg-surface-1 border
     border-border-subdued rounded-full` + `CheckCircle2 w-4 h-4 text-accent-secondary`.
  2. **Quiet line** (preferred for the editorial direction): `text-sm text-muted` with a small
     neutral dot, placed under the CTA row.
- Content must be true and maintained — e.g. "Available for new projects · Usually replies
  within 24 hours". No pulsing/animated dot.
- Keep `role="status"`.

### Visual anchor

- Real project imagery, `aspect-[16/9]` or a confident portrait crop, `rounded-2xl`,
  `border border-border-subdued`, `shadow-sm` (up to `shadow-xl` on hover, neutral only).
- `next/image` with `priority`, explicit `sizes`, and meaningful `alt`.
- **Never** a tilted/floating browser or device frame, 3D transform, gradient blob, glow, or
  glass panel. A straight-on crop with a hairline border is the entire treatment.
- If the image needs a caption, use `font-mono text-xs text-muted` — project name only, no
  invented results.

## 4. Colour and surface

- Background: `background` (`#fafafa`) flat. No gradient, no radial light, no noise, no pattern
  overlay.
- Text: `foreground` for the headline, `muted` for supporting copy.
- Accent: `accent-primary` on the primary CTA and nowhere else in the section. Accent coverage
  should be a small single-digit percentage of the screen.
- Borders: `border-subdued` hairlines only.
- The next section (`FeaturedWork`, `bg-surface-1`) provides the visual break — the Hero does
  not need its own divider.

## 5. Spacing

- Section: `min-h-[85vh]` to `min-h-screen`, `px-6`, `pt-24` (clears the fixed nav), `pb-16`.
  A slightly-under-viewport Hero that lets the next section peek is acceptable and often better.
- Container: `max-w-7xl mx-auto`.
- Vertical rhythm inside the copy column: eyebrow → `mb-6` → headline → `mb-6` → positioning →
  `mb-8` → CTA row → `mt-6` → availability line.
- Column gap between copy and anchor: `gap-12` to `gap-16` on `lg`+.

## 6. Motion

- One entrance for the Hero group: `initial={{ opacity: 0, y: 20 }}` →
  `animate={{ opacity: 1, y: 0 }}`, `transition={{ type: "spring", stiffness: 100, damping: 20 }}`
  (note the explicit `type: "spring"` — several existing components omit it, making the values
  inert).
- The anchor may fade in with the group; no separate stagger cascade over every child.
- Hover: CTA background/border transition, arrow translate ≤4px, anchor shadow/scale ≤1.01.
- Banned: parallax, tilt-follow, cursor effects, typewriter, counters, looping ambient motion.
- `useReducedMotion()` ⇒ everything renders immediately in final position.

## 7. Responsive behaviour

| Width | Layout |
|---|---|
| **375** | Single column, left-aligned. Headline `text-4xl`. CTAs stacked full-width, primary first. Availability line below. Anchor below the CTAs — or omitted if it would push the primary CTA well below the fold. No horizontal scroll. |
| **768** | Single column with a wider measure, or a stacked copy-then-anchor arrangement at full width. Headline `text-6xl`. CTAs inline. |
| **1440** | The intended asymmetric split. Headline `text-7xl`. Anchor right, `gap-16`, content in `max-w-7xl`. |

Headline and primary CTA must be visible without scrolling at all three widths.

## 8. Accessibility

- One `<h1>`; the eyebrow is a `<p>` or `<span>`, never a heading.
- Both CTAs keyboard reachable with a visible focus ring; descriptive text, no icon-only actions.
- Decorative icons `aria-hidden="true"`; real imagery gets meaningful `alt`.
- Contrast ≥ 4.5:1 for the positioning sentence — hence `muted` over `muted-foreground`.
- Availability keeps `role="status"`.
- Respect `prefers-reduced-motion`.

## 9. What this spec explicitly rejects

- Centre-stacked default composition on desktop.
- Purple/indigo anything; the retired 3D purple browser frame.
- Gradients (beyond an invisible single-step neutral), glassmorphism, glow, coloured shadows,
  3D/perspective, particles, mesh or aurora backgrounds, noise overlays.
- Metrics, ratings, project counts, client logos, testimonials — in the Hero or anywhere else,
  absent evidence.
- More than one visual anchor; more than one primary CTA; more than one entrance animation.
- Stock photography, generic 3D vector people, abstract "AI" imagery, fabricated mockups.

## 10. Implementation notes (for when it is approved)

- File: `src/components/Hero.tsx` (client component, already uses `framer-motion`).
- Fix while in there: add `type: "spring"` to the transition; the skip link in
  `src/app/layout.tsx` still references the dead `accent-indigo` class.
- Reuse existing tokens and canonical component patterns; do not add tokens for the Hero.
- Verify against the `docs/04` acceptance checklist and the
  `.devin/skills/ui-ux-pro-max/SKILL.md` self-review questions before opening a PR.
- Capture 375 / 768 / 1440 screenshots for review.
