# ui-ux-pro-max

The design-judgement skill for the Sudip Bohara / SB Studio portfolio.

`SKILL.md` is the operative file — agents read it. This README explains, for humans, what the
skill is for, why it exists, and how to keep it healthy.

## What it does

It constrains any UI, layout, copy, or component work in this repository to one direction:

> minimal · premium · calm · trustworthy · sophisticated · editorial · technical · human · intentional

and it blocks the two failure modes this project has actually suffered:

1. **Drifting into generic AI-SaaS aesthetics** — purple/indigo identity colours, gradients,
   glassmorphism, glow, 3D mockups, dashboard stat tiles, over-animation.
2. **Fabricated trust signals** — invented metrics, testimonials, client logos, and business
   outcomes.

Both are real history, not hypotheticals. The `redesign-v2` / `hero-excellence-v3` branches
hold an abandoned indigo-accented "Dark Obsidian Precision" system, and `src/components/trust/`
once contained a metrics grid claiming `+$42M` client revenue and `+184%` conversion lift that
had no evidence behind it. The skill exists so neither returns.

## Why it exists

Design intent is the most fragile asset in this project: it lived in one person's head and in
docs on a single machine, and it was lost once already in a Windows reinstall. Committing the
intent as a skill means every future agent session — on any machine — starts from the same
taste, the same prohibitions, and the same honesty rules, instead of re-deriving them or
defaulting to whatever is fashionable.

## How it is used

- **Location:** `.devin/skills/ui-ux-pro-max/SKILL.md`, which is one of the directories Devin
  scans for repository skills. It is committed, so it travels with the repo.
- **Invocation:** agents invoke it by name (`ui-ux-pro-max`) at the start of any visual task.
  The frontmatter sets `triggers: ["user", "model"]`, so it can be auto-activated when a task
  is clearly UI work, or invoked explicitly.
- **Order of operations:** the skill's Step 0 forces the agent to read `docs/01`–`05`,
  `PROJECT_RULES.md`, and `CONTENT_GUIDE.md`, plus the current `globals.css` and
  `tailwind.config.ts`, *before* making any design decision. The skill is the lens; `docs/` is
  the direction; the CSS/Tailwind tokens are the ground truth about what exists today.

## Relationship to the other documents

| File | Role |
|---|---|
| `.devin/skills/ui-ux-pro-max/SKILL.md` | How to make and review decisions (the lens) |
| `docs/01-Brand.md` | Who the brand is, voice, positioning |
| `docs/02-Design-System.md` | Authoritative tokens, type scale, spacing, motion budget |
| `docs/03-Homepage-Architecture.md` | Homepage narrative, section order, contact field policy |
| `docs/04-Hero-Section-PRD.md` | What the Hero must accomplish |
| `docs/05-Hero-Section-Design-Spec.md` | How the Hero should be composed and behave |
| `PROJECT_RULES.md` | Honesty rules, engineering hierarchy, release gate |
| `CONTENT_GUIDE.md` | Copy tone, lengths, per-section examples |
| `BRAND_GUIDE.md` | Historical brand doc — predates the neutral direction, see caveat below |
| `ROADMAP.md` | Phased product vision (CMS, blog, case studies, portal) |

**Caveat on `BRAND_GUIDE.md`:** its colour section still describes the retired dark obsidian /
electric indigo palette. `docs/01-Brand.md` and `docs/02-Design-System.md` supersede it on
colour and surface. Its voice, typography and motion-philosophy sections remain valid.

## Maintaining the skill

Update `SKILL.md` when — and only when — the direction genuinely changes:

- A new anti-pattern gets shipped by mistake ⇒ add it to the hard anti-pattern list.
- A token is added or renamed in `globals.css` / `tailwind.config.ts` ⇒ update
  `docs/02-Design-System.md` first, then any reference here.
- Real, evidenced metrics or testimonials become available ⇒ relax the specific integrity rule,
  and record where the evidence lives.

Keep it prescriptive and short enough to be read in full every time. Do not turn it into a
general design-theory document — its value is that it is specific to this portfolio. Never
weaken the honesty rules to make a section look fuller.
