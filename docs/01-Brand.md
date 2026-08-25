# 01 — Brand

Status: active · Supersedes the colour and surface sections of `BRAND_GUIDE.md`
Applies to: `portfolio-v3` and everything built on top of it

---

## 1. Who this is

**Sudip Bohara / SB Studio** — an independent digital studio that designs and builds websites,
web applications, and design systems for businesses that care about precision and performance.

Independent studio, not an agency pretending to be large, and not a freelancer marketplace
profile. One person accountable for the work, with real engineering depth behind it.

## 2. Positioning statement

> I design and build premium websites, web applications, and design systems for businesses that
> value precision and performance.

This is the sentence the whole site defends. Everything on the homepage either supports it or
is removed.

## 3. What the brand promises

- **Craft** — the site itself is the proof of the work. If the portfolio is sloppy, nothing
  else matters.
- **Clarity** — a visitor knows within one screen what is offered and what to do next.
- **Honesty** — no claim appears without evidence. This is a differentiator in a market full
  of invented metrics.
- **Performance** — fast by construction, not by afterthought.
- **Directness** — one point of contact, quick replies, plain language.

## 4. The nine adjectives

The brand's operating definition. Every visual, copy, and interaction decision must be
defensible against all nine.

| Adjective | In practice |
|---|---|
| **Minimal** | One idea per section. Space instead of ornament. |
| **Premium** | Precision of spacing and hierarchy — never effects. |
| **Calm** | Nothing competes for attention; motion is quiet and rare. |
| **Trustworthy** | Only verifiable claims; clear, low-friction next step. |
| **Sophisticated** | Neutral palette, one accent, considered type scale. |
| **Editorial** | Magazine logic: strong headline, deliberate measure, purposeful asymmetry. |
| **Technical** | Accurate engineering language; monospace for indices and metadata. |
| **Human** | First-person voice, real availability, real contact details. |
| **Intentional** | Every element is explainable. Nothing is there because it filled a gap. |

The governing idea: **expensive because of restraint**, not because of effects.

## 5. What the brand is not

- Not a SaaS product landing page.
- Not a "growth agency" with revenue claims and countdown urgency.
- Not a dark neon developer-aesthetic showcase.
- Not a template. If a section could be dropped into any other portfolio unchanged, it is
  probably wrong.

### Retired directions

**Dark Obsidian Precision** (`redesign-v2`, `hero-excellence-v3`, and the colour section of
`BRAND_GUIDE.md`): near-black canvas `#050507`, electric indigo `#6366F1`, cyan `#06B6D4`,
emerald `#10B981`, indigo glow shadows, heavy frosted glass. It was a legitimate experiment and
is preserved on those branches for reference, but it is **not** the direction. Do not resurrect
it, and do not partially reintroduce it (an indigo CTA on a light page is still the wrong
identity).

Note: orphaned `accent-indigo` / `accent-cyan` / `accent-emerald` class names still appear in
parts of `src/` (mostly `/admin`) from that era. They no longer resolve to tokens and render as
nothing. They are known debt to be cleaned up, not a colour direction.

## 6. Voice and tone

Carried forward from `CONTENT_GUIDE.md`, which remains authoritative on copy:

- Confident, articulate, direct, restraint-driven.
- Short active sentences. High scannability.
- First person singular (`I`) for accountability; `SB Studio` / `we` only for client
  engagements where it is accurate.
- Banned vocabulary: *cutting-edge, game-changing, revolutionary, next-level, synergy,
  world-class, best-in-class, AI-powered* (as a decorative adjective), *10x*.
- Prefer concrete nouns over adjectives. "Booking system for a clinic" beats "innovative
  solution".

## 7. Honesty rules (non-negotiable)

Inherited from `PROJECT_RULES.md` and hardened here because the codebase has violated them
before:

- **No fabricated statistics.** `+$42M client revenue`, `+184% conversion lift`, `99.8 average
  Lighthouse score`, project counts, star ratings — none of it ships without evidence Sudip can
  produce on request. A component making exactly these claims existed in `src/components/trust/`
  and has been deleted.
- **No fake testimonials.** Not even as placeholders or lorem.
- **No client logos** without real commercial work and permission.
- **No invented outcomes** in case studies. Describe the work, the constraints, and the
  engineering decisions instead.
- **No plausible-looking placeholder contact details.** A fake phone number (`+1 (234) 567-890`)
  is worse than no phone number.
- The honest substitutes for metrics are capability statements: *Performance focused,
  Mobile first, Accessible by default, SEO ready*.

## 8. Trust, without fake proof

Trust is earned on this site by: the quality of the site itself, real project imagery, a clear
process, a truthful availability signal, a fast and obvious contact path, and precise writing.
That is the entire toolkit until real evidence exists.

## 9. Audience

Small and mid-sized businesses, founders, and clinics/practices commissioning a serious web
presence; occasionally other studios or product teams needing frontend and design-system depth.
They are evaluating credibility and competence, not comparing feature checklists.

## 10. Brand assets — current state

- **Wordmark:** text-only, "Sudip Bohara", set in Inter with tight tracking. No logo mark
  exists yet; do not invent one.
- **Fonts:** Inter (display + body), JetBrains Mono (indices, metadata, technical pills), both
  loaded via `next/font/google` in `src/app/layout.tsx`.
- **Imagery:** `public/` currently contains only `robots.txt`. There is no OG image, favicon, or
  apple-touch-icon despite `layout.tsx` referencing `/og-image.png`, `/favicon.ico`, and
  `/apple-touch-icon.png`. Producing these is outstanding brand work.
- **Domain:** `https://sudeepbohara.com.np` (set as `metadataBase` and in `sitemap.ts`).
