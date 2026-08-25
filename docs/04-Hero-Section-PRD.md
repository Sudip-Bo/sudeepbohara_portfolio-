# 04 — Hero Section PRD

Status: **direction only — not approved for implementation.** The Hero redesign happens after
this document and `docs/05-Hero-Section-Design-Spec.md` have been reviewed.
Reconstructed from `BRAND_GUIDE.md`, `CONTENT_GUIDE.md`, `PROJECT_RULES.md`, and the current
`portfolio-v3` implementation. The original Hero documents were lost with the previous machine;
this is a new documented direction, deliberately **not** a recreation of the retired dark
obsidian / purple 3D-browser-frame experiment.

---

## 1. Problem statement

The Hero should be the signature section of the portfolio — the single screen that establishes
credibility. Today it is competent but generic: a centred availability badge, a centred
headline, a centred paragraph, two centred buttons, and nothing else. It is indistinguishable
from thousands of template portfolios, and it contains **no visual anchor at all**, which means
the first screen of a studio that sells visual craft demonstrates none of it.

## 2. Objective

A first screen that:

1. Communicates positioning in under five seconds.
2. Demonstrates craft by its own composition, not by claiming craft.
3. Offers one obvious primary action and one low-commitment secondary action.
4. Feels calm, editorial, and expensive through restraint.

## 3. Success criteria

- A first-time visitor can state what Sudip does and who it is for after one screen.
- The section is visually distinctive enough that it could not be mistaken for a template or a
  SaaS landing page.
- Primary CTA is unmistakable without being loud.
- No claim in the section requires evidence that does not exist.
- Reads well at 375 / 768 / 1440 with no layout compromise.
- Largest Contentful Paint remains in the good range; no measurable regression against the
  current Hero.
- `prefers-reduced-motion` produces a fully static, complete-looking Hero.

## 4. Required elements

| # | Element | Requirement |
|---|---|---|
| 1 | **Headline** | Strong, specific, 6–8 words max (`CONTENT_GUIDE.md`). The single largest type on the page. |
| 2 | **Positioning statement** | One concise sentence, 20–30 words, naming what is built and who for. |
| 3 | **Primary CTA** | One action, visually dominant. Either "View Work" or "Start a project" — one, not both, as primary. |
| 4 | **Secondary CTA** | Lower emphasis, low commitment. The other of the two. |
| 5 | **Trust / availability signal** | Subtle and **truthful** — e.g. current availability, response commitment, or location + remote reach. Small, quiet, near the CTAs or the headline. |
| 6 | **Visual anchor** | Exactly **one** meaningful visual element. See §6. |
| 7 | **Composition** | A deliberate editorial arrangement, not centre-stacked default flow. |

## 5. Content requirements

- Voice: first person, direct, no buzzwords (`docs/01-Brand.md` §6).
- Current copy is a reasonable starting point and may be kept, sharpened, or replaced:
  - Headline: "Engineering High-Impact Digital Experiences for Growth"
  - Positioning: "I design and build premium websites, web applications, and design systems for
    businesses that value precision and performance."
  - Availability: "Available for new projects"
- The headline should ideally name the *outcome* or the *craft*, not the category. Avoid
  "Web Designer & Developer" as a headline — that belongs in metadata.
- The availability badge must reflect reality. If Sudip is booked, it says so or it is removed.
  A permanently-on "Available for new projects" badge is a fake signal.
- No metrics, no client names, no ratings, no project counts in the Hero. Ever, without evidence.

## 6. The visual anchor

**Exactly one.** Its job is to prove craft and give the composition weight.

Acceptable (in order of preference):

1. **Real project imagery** — an actual screenshot of shipped work, cropped confidently, framed
   with a hairline border and a neutral shadow. Genuine proof plus visual interest.
2. **A restrained typographic / structural composition** — the headline itself as the anchor,
   supported by a mono index, a rule, and generous asymmetric space.
3. **A single quiet structural motif** — a fine neutral grid, a hairline rule system, or precise
   alignment marks, at very low contrast.

Explicitly rejected:

- The previous **purple 3D browser frame** (retired with the obsidian direction).
- Any floating/tilted device or browser mockup, perspective transform, or 3D scene.
- Gradient blobs, mesh backgrounds, aurora/orb/beam effects, glow, particles.
- Abstract "AI" visuals, generic 3D vector people, stock photography.
- A collage of multiple images competing for attention.
- Fake dashboard/terminal UI as decoration.

If no real project image is available at implementation time, use option 2 or 3. **Do not
fabricate a mockup to fill the space.**

## 7. Interaction and motion

- One quiet entrance for the Hero group: fade + ≤20px rise, ~400–600ms, once.
- No stagger cascade across every child element.
- CTA hover: subtle background/border change and, at most, a small arrow translate.
- The visual anchor may have one restrained interaction (e.g. a slight shadow/scale ≤1.01 on
  hover). No parallax, no tilt-follow, no cursor effects.
- No scroll-jacking, no scroll-driven scaling, no typewriter effect, no counters.
- `useReducedMotion()` must disable all of it while leaving the Hero complete.

## 8. Responsive requirements

- **375px:** single column, headline still the dominant element, CTAs full-width and stacked
  (primary first), visual anchor either below the CTAs or omitted if it would push the primary
  CTA far below the fold. No horizontal scroll.
- **768px:** headline scale steps up; anchor may sit below the copy block at full width.
- **1440px:** the intended composition — copy and anchor arranged deliberately, generous
  margins, content constrained to `max-w-7xl`.
- The headline and the primary CTA must be visible without scrolling at all three widths.
- The current `min-h-screen` treatment is optional, not required. A shorter Hero that lets the
  next section peek is acceptable and often better for editorial pacing.

## 9. Accessibility requirements

- Exactly one `<h1>`, containing the headline.
- CTAs are links/buttons with descriptive text; no icon-only actions.
- Visible focus ring on both CTAs (`focus:ring-2 focus:ring-accent-primary focus:ring-offset-2`).
- Headline and body contrast ≥ 4.5:1 — note that `muted-foreground` on `#fafafa` is borderline
  and should not be used for the positioning sentence.
- Availability badge announced appropriately (`role="status"` is already used); decorative icons
  `aria-hidden`.
- The visual anchor: meaningful `alt` text if it is real imagery, `aria-hidden` if purely
  decorative.

## 10. Performance requirements

- The visual anchor ships through `next/image` with explicit dimensions, `priority`, and a
  correct `sizes`; remote hosts must be allowlisted in `next.config.js`.
- No new dependency for the Hero. `framer-motion` and `lucide-react` are sufficient.
- No blocking work above the fold; no client-side data fetching in the Hero.

## 11. Non-goals

- Not a redesign of any other section.
- No new colour tokens, no new effects vocabulary, no dark variant.
- No video background, no audio, no interactive playground.
- No metrics, testimonials, logo strip, or trust bar added to the Hero.
- Not a return to the dark obsidian direction.

## 12. Open questions for review

1. Which action is primary — "View Work" or "Start a project"?
2. Is real, permission-cleared project imagery available for the anchor, or does the first
   iteration use a typographic anchor?
3. What is the accurate availability statement, and who updates it when it changes?
4. Keep the current headline, or write a more specific one naming the outcome?
5. Full-viewport Hero, or a shorter one that reveals the next section?

## 13. Acceptance checklist

- [ ] Headline, positioning sentence, primary CTA, secondary CTA, truthful availability signal,
      one visual anchor — all present, nothing extra.
- [ ] Composition is deliberately editorial, not centre-stacked by default.
- [ ] Zero purple/indigo/gradient/glass/glow/3D.
- [ ] Zero unevidenced claims.
- [ ] One entrance animation; `prefers-reduced-motion` honoured.
- [ ] 375 / 768 / 1440 verified; headline and primary CTA above the fold at each.
- [ ] Keyboard, focus, contrast verified.
- [ ] All colour classes exist in `tailwind.config.ts`.
- [ ] `npm run lint` and `npm run build` pass.
- [ ] Reviewed against `.devin/skills/ui-ux-pro-max/SKILL.md` self-review questions.
