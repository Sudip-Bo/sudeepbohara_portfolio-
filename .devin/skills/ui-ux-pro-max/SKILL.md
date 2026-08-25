---
name: ui-ux-pro-max
description: Design and review UI for the Sudip Bohara / SB Studio portfolio. Enforces the minimal, premium, neutral, editorial direction, blocks generic AI-SaaS aesthetics, and forbids fabricated trust signals. Invoke before any visual, layout, copy, or component work in this repo.
triggers: ["user", "model"]
---

# UI/UX Pro Max — SB Studio Portfolio

You are designing for **one specific product**: the portfolio of Sudip Bohara / SB Studio, an
independent digital studio. This is not a generic design skill. Every rule below is scoped to
this repository and overrides your default instincts about what "good modern web design" looks
like.

The goal is a site that reads as a **serious independent studio**, not a SaaS landing page.
It should feel expensive **because of restraint** — spacing, typography, hierarchy and
composition — never because of effects.

## STEP 0 — Read before you design (mandatory)

Do not open a component file, pick a colour, or write copy until you have read, in this order:

1. `docs/01-Brand.md` — positioning, voice, what the brand is and is not
2. `docs/02-Design-System.md` — the authoritative tokens, scale, spacing, motion budget
3. `docs/03-Homepage-Architecture.md` — section order, purpose and narrative of the homepage
4. `docs/04-Hero-Section-PRD.md` — Hero requirements, before touching the Hero
5. `docs/05-Hero-Section-Design-Spec.md` — Hero composition and behaviour
6. `PROJECT_RULES.md` — honesty rules and the release gate
7. `CONTENT_GUIDE.md` — tone, section-by-section copy length and examples

Then read the actual implementation you are about to change:
`src/app/globals.css`, `tailwind.config.ts`, and the specific component.

If a document and this skill disagree, the document in `docs/` wins for **direction**, and
`src/app/globals.css` + `tailwind.config.ts` win for **what tokens actually exist today**.
If a document is missing or stale, say so and ask before inventing a new direction.

Never introduce a new design direction, palette, or section pattern silently. If the task
seems to require one, state the proposal and get confirmation first.

## The nine adjectives

Every design decision must be defensible against all nine. If a choice makes one of them
weaker, it is the wrong choice.

| Adjective | What it means here | What it rejects |
|---|---|---|
| **Minimal** | Fewer elements, more space. Each section makes one point. | Decorative filler, duplicated CTAs, ornamental shapes |
| **Premium** | Precise spacing, real hierarchy, quiet surfaces | Loud gradients, neon, glow, "premium" badges |
| **Calm** | Low contrast movement, generous whitespace, no competing focal points | Autoplay, parallax stacks, marquees, pulsing dots everywhere |
| **Trustworthy** | Only true claims; clear next step; nothing hidden | Fake numbers, fake logos, countdown urgency, dark patterns |
| **Sophisticated** | Restrained neutral palette, one accent, considered type scale | Rainbow accents, novelty fonts, gimmick cursors |
| **Editorial** | Magazine logic: strong headline, deliberate measure, asymmetry allowed | Everything centred, equal-weight card soup |
| **Technical** | Mono for indices and metadata; accurate engineering language | Buzzwords, "AI-powered" framing, invented benchmarks |
| **Human** | First person, real availability, real email, plain sentences | Corporate "we leverage synergies" voice, stock-photo people |
| **Intentional** | Every pixel is explainable | "It looked empty so I added a card" |

## Hard anti-patterns (never ship these)

Visual:
- **No purple / indigo / violet as an identity colour.** `#6366F1`-style indigo, and any
  purple-to-blue gradient, are permanently retired from this project. The old
  `redesign-v2` / `hero-excellence-v3` "Dark Obsidian Precision" system is historical
  reference only — do not resurrect it.
- No multi-stop or hue-shifting gradients. A near-invisible neutral gradient (a single
  value step, e.g. `#ffffff → #fafafa`) is the only acceptable use.
- No glassmorphism as decoration. Frosted blur is allowed **only** on the sticky
  navigation over scrolling content.
- No glow, no coloured drop shadows, no `box-shadow` with a saturated hue.
- No 3D, no tilted browser mockups floating in space, no perspective cards, no spline/
  three.js scenes, no animated gradient blobs or mesh backgrounds.
- No aurora/orb/beam background effects. No noise overlays as a "premium" tell.
- No generic dashboard aesthetics: stat tiles, sparklines, KPI cards, fake charts,
  fake terminal windows.
- No neon borders, no animated gradient borders, no shimmer sweeps.
- No emoji as UI iconography (icons come from `lucide-react`).

Content / integrity — these are absolute, inherited from `PROJECT_RULES.md`:
- **No fabricated statistics.** `+$42M client revenue`, `+184% conversion lift`,
  `99.8 average Lighthouse`, `50+ projects`, `4.9/5 rating` and anything like them are
  banned unless Sudip supplies verifiable evidence. This exact fake-metrics grid was
  removed from the codebase once already; do not reintroduce it in any form.
- **No fake testimonials or invented quotes**, not even as placeholders.
- **No client logo strips** unless the work was actually done for that client and they
  permit the use.
- **No invented business outcomes** in case studies. If the outcome is unknown, describe
  the work and the engineering decisions instead.
- No placeholder contact details that look real (e.g. `+1 (234) 567-890`). Either use a
  real value or omit the field.
- Capability statements are the honest substitute for metrics: "Performance focused",
  "Mobile first", "Accessible by default", "SEO ready".

Motion:
- No entrance animation on more than one element per viewport; never stagger a whole grid.
- No scroll-jacking, no scroll-driven scaling of large elements, no counters that count up.
- Always honour `prefers-reduced-motion` (`useReducedMotion` from `framer-motion`).

## Working rules

**Tokens only.** Colours come from the CSS variables in `src/app/globals.css`, surfaced via
`tailwind.config.ts`. Never hardcode a hex value in a component, and never use a Tailwind
palette colour (`bg-slate-900`, `text-blue-600`) — if a token is missing, add it to
`globals.css` + `tailwind.config.ts` deliberately and say why.

**Verify the class exists.** This codebase already contains orphaned classes such as
`text-accent-indigo` and `text-secondary` that no longer map to any token, so they render as
nothing. Before using a token class, grep `tailwind.config.ts` for it.

**One accent, used rarely.** Accent is for the primary action and, at most, one focus point
per viewport. If more than ~5% of a screenshot is accent-coloured, reduce it.

**Type carries the design.** Reach for scale, weight, measure, and tracking before you reach
for colour, borders, or shadows. Body measure stays ~60–75 characters.

**Space is the feature.** When a section feels weak, increase spacing and cut elements before
adding any.

**Composition over symmetry.** Centred everything is the default that makes a portfolio look
templated. Prefer a deliberate editorial arrangement (asymmetric split, strong left-aligned
headline, generous margin) where it strengthens hierarchy.

**Accessibility is not a phase.** Semantic landmarks, real labels, visible focus rings, ≥4.5:1
body contrast, keyboard-operable everything, ≥44px touch targets. Aesthetics never win over it.

**Performance before animation.** No new heavy dependency for a visual effect. Images go
through `next/image` with explicit sizing; remote hosts must be allowlisted in
`next.config.js`.

**Real content only.** Design against real copy from `CONTENT_GUIDE.md` and real project
records from the database. If content does not exist yet, design the honest empty state
("New case studies coming soon.") rather than inventing filler.

## Section-specific guidance

**Hero** — the signature section. Requires: strong headline, one concise positioning sentence,
one primary CTA, one secondary CTA, a subtle and truthful availability signal, and exactly
**one** meaningful visual anchor. See `docs/04-Hero-Section-PRD.md` and
`docs/05-Hero-Section-Design-Spec.md`. The visual anchor must be real (actual project imagery
or a restrained typographic/structural composition) — never a decorative 3D browser frame.

**Featured Work / Projects** — the work is the proof, so imagery quality dominates. Consistent
aspect ratios, real screenshots, honest tags. Never pad the grid with placeholder cards.

**Services** — mono index (`01`, `02`), short title, two-line summary, a few concrete
deliverables. No pricing theatre, no "most popular" ribbon.

**Process** — few steps, plainly named, no illustration per step.

**Contact** — must feel compact and low-friction; it is not a lead-gen funnel. See
`docs/03-Homepage-Architecture.md` for the field policy. Do not add fields without a
qualification reason.

**Navigation / Footer** — quiet, thin, token borders. Frosted nav is the single sanctioned
blur in the project.

## Self-review before you finish

Answer each of these explicitly; if any answer is unsatisfactory, fix it before reporting done.

1. Does every claim on screen have evidence? (any "no" ⇒ delete the claim)
2. Could this screen be mistaken for a generic AI SaaS landing page? (any "yes" ⇒ redesign)
3. Is there any purple, gradient, glow, glass, or 3D that is not explicitly sanctioned above?
4. Is the accent under ~5% of the visible surface?
5. Does anything animate that does not need to? Does it respect `prefers-reduced-motion`?
6. Would removing any element make the section stronger? (if yes, remove it)
7. Are all colour classes real tokens that exist in `tailwind.config.ts`?
8. Keyboard path, focus visibility, contrast, and 375px / 768px / 1440px layouts checked?
9. Does the change stay consistent with the current `portfolio-v3` visual direction rather
   than starting a new one?
10. `npm run build` and `npm run lint` still pass?
