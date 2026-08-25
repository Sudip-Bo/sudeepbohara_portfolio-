# 03 — Homepage Architecture

Status: active · Describes the homepage as implemented on `portfolio-v3`, the intended
direction for each section, and the forward-looking policies for Contact, Projects, Blog, and
data.
Nothing in this document authorises a visual change on its own. Implementation happens in
separate, explicitly scoped work.

---

## 1. What the homepage has to do

Answer, in order and without the visitor having to work for it, the five questions from
`PROJECT_RULES.md`:

1. Who is this? → Hero
2. What do they build? → Featured Work, Services
3. Why trust them? → the work itself, Process, Why Choose Us, Technologies
4. How do they work? → Process
5. How do I get in touch? → Contact (and the persistent nav CTA)

A visitor who reads only the Hero should still know what is offered and what to do next.

## 2. Current section order (implemented)

`src/app/page.tsx`:

```
Navigation
Hero
FeaturedWork
Services
Process
WhyChooseUs
Technologies
Contact
Footer
```

### Section-by-section intent

| # | Section | Component | Purpose | Direction |
|---|---|---|---|---|
| 1 | Navigation | `Navigation.tsx` | Persistent orientation + one CTA | Thin, quiet, frosted over scroll. The only sanctioned blur in the project. |
| 2 | Hero | `Hero.tsx` | Positioning + primary action | The signature section. Full spec in `docs/04` and `docs/05`. |
| 3 | Featured Work | `FeaturedWork.tsx` | Proof through real work | Imagery quality dominates. DB-backed (`featured: true`). Never padded with placeholders. |
| 4 | Services | `Services.tsx` | What can be commissioned | Mono index, short title, two-line summary, concrete deliverables. No pricing theatre. |
| 5 | Process | `Process.tsx` | Reduce risk; show predictability | Few steps, plainly named, no illustration per step. |
| 6 | Why Choose Us | `WhyChooseUs.tsx` | Differentiation | Capability statements only — never metrics. Weakest section conceptually; candidate for merging into Services or Process. |
| 7 | Technologies | `Technologies.tsx` | Technical credibility | Restrained pill row. Honest — only tools actually used. |
| 8 | Contact | `Contact.tsx` | Convert to conversation | Must be compact and low-friction. See §3. |
| 9 | Footer | `Footer.tsx` | Navigation + closure | Minimal, thin border, real links only. |

### Narrative notes

- **Featured Work before Services** is correct: show the work, then explain the offer.
- **Six mid-page sections is close to the ceiling.** The minimal direction argues for
  consolidation (most likely `WhyChooseUs` folding into `Services` or `Process`) rather than
  additions. Any proposal to add a section must justify which existing one it replaces.
- **One primary action per viewport.** The nav CTA, the Hero CTA, and the Contact submit are the
  only primary actions on the page; card links and the Services CTA are secondary.
- **No trust bar, logo strip, or metrics grid.** `src/components/trust/` previously held
  `TrustBar`, `LogoStrip`, `TrustBadge`, `FrostedDivider`, and a `TrustMetricsGrid` claiming
  `+$42M` client revenue and `+184%` conversion lift. It was unused dead code and has been
  deleted. Do not reintroduce any of it. Trust is carried by the work, the process, the
  availability signal, and the writing quality.

## 3. Contact UX policy (requirement for future implementation)

**Principle: the contact experience must not require excessive scrolling.** On desktop the form
should feel compact and sit naturally within its section/viewport. It is a conversation starter,
not a lead-qualification funnel.

### Field policy

Priority fields (keep):

1. **Name**
2. **Email**
3. **Service / project type**
4. **Brief project description**

**Budget** may remain *only* where it materially improves qualification. If it stays, make it a
small optional range selector, not a required gate.

Remove or avoid: company (unless it demonstrably helps), phone, timeline, "how did you hear
about us", file upload, marketing consent checkbox, anything else that adds friction without
changing whether Sudip can help.

### Layout requirements

- Desktop: compact two-column arrangement (form beside contact details) so the whole section is
  comprehensible without scrolling; avoid one tall stacked column of full-width fields.
- Consider pairing Name and Email on a single row on `md`+ to reduce vertical height.
- Textarea: ~4 rows, not 5+.
- Keep one clear submit action, full width on mobile, natural width on desktop.
- Preserve: honeypot spam field, `zod` validation, IP rate limiting, real `<label>`s, inline
  errors near the offending field, and the success/error states.
- The truthful reply commitment ("Usually replies within 24 hours") stays — it is real and it
  reduces hesitation.

### Current state and known issues

Two contact surfaces exist and they disagree:

- `src/components/Contact.tsx` (homepage) posts `name, email, service, message, honeypot`.
- `src/components/contact/ContactForm.tsx` (`/contact` page) additionally posts `budget` and
  `company`.
- **`src/app/api/contact/route.ts` requires `budget` (`z.string().min(1)`).** The homepage form
  never sends it, so a homepage submission is rejected with `400 Invalid input`. This is a live
  functional bug, not a design question. It must be fixed — either by making `budget` optional
  in the schema or by adding the field to the homepage form — as part of the contact work, and
  the two surfaces should share one form component.
- `Contact.tsx` displays a placeholder phone number (`+1 (234) 567-890`). Per the honesty rules
  in `docs/01-Brand.md`, remove it or replace it with a real number.
- Contact details are duplicated between `Contact.tsx` and `ContactInfo.tsx`; consolidate.

## 4. Projects system (forward-looking; do not implement yet)

**Real project imagery is the single most important asset for this portfolio.** The work is the
proof. Never substitute fake screenshots, mockup-generator images, invented client names, or
fabricated results — an honest empty state ("New case studies coming soon.") is always better.

The project system should eventually support, per project:

- Cover image (consistent aspect ratio, currently `aspect-[16/9]`)
- Image gallery
- Description
- Services delivered
- Technologies used
- Challenge
- Solution
- Outcome — **only where truthful and evidenced**; otherwise describe the work and the
  engineering decisions instead
- Live project link
- Case-study detail body

Current implementation for reference: `Project` in `prisma/schema.prisma` has `title`, `slug`,
`description`, `content`, `imageUrl`, `category`, `tags[]`, `featured`, `published`. The extra
fields above will require a schema change — a separate, deliberate piece of work. `/projects`
renders `ProjectGrid`, which fetches `/api/projects?published=true` on the client;
`/projects/[slug]` is server-rendered with `notFound()` on a miss and `generateStaticParams()`
that degrades gracefully when the database is unavailable at build time.

Note: `next.config.js` currently allowlists only `images.unsplash.com` for remote images. Real
project imagery will need its own allowlisted host or to be committed under `public/`.

## 5. Blog / editorial direction (forward-looking; do not implement yet)

The blog should read as a **studio journal**, not an SEO content mill. Fewer, longer, genuinely
useful pieces written in the same first-person voice as the rest of the site. No keyword-stuffed
listicles, no AI-generated filler, no publishing cadence for its own sake.

Themes:

- Web design and interface craft
- Frontend engineering (Next.js, TypeScript, performance)
- AI automation applied to real workflows
- Product thinking
- Business websites — what actually moves the needle for a small business
- Lessons from building products
- Technical and design experiments

Editorial requirements when it is built:

- Long-form, typographically excellent reading experience; measure ~65–75 characters.
- Restrained article furniture: title, date, reading time, tags. No author box, no social share
  clutter, no related-post grids stuffed with thumbnails.
- Code blocks styled within the neutral system.
- Honest metadata — no fake view counts or engagement numbers.
- Should be genuinely useful to someone who will never hire the studio.

`ROADMAP.md` places this at Version 3 (`/blog`, DB or MDX-driven).

## 6. Environment and data requirements (documentation only)

- **`DATABASE_URL` is required in production.** PostgreSQL, consumed via Prisma
  (`prisma/schema.prisma`). Without it the site still builds and renders, but every
  database-backed surface is empty.
- **`/projects` depends on database-backed project records.** So do Featured Work, Services, the
  `/projects/[slug]` detail pages, `/admin`, and contact-message persistence. An empty database
  means an empty portfolio, not an error.
- **`RESEND_API_KEY` is optional.** Without it, contact submissions are still persisted to the
  `Message` table and the email notification is silently skipped.
- `.env.example` documents both variables. No other environment variable is referenced by the
  code.
- Build behaviour is deliberately resilient: `generateStaticParams()` in
  `src/app/projects/[slug]/page.tsx` catches database unavailability and returns `[]`, letting
  the route render dynamically. This is what keeps Vercel builds green without a build-time
  database connection.
- No database is to be provisioned, and neither `prisma/schema.prisma` nor
  `prisma/migrations/` is to be modified, as part of the documentation recovery work.

## 7. Definition of done for any homepage change

- Reads correctly at 375 / 768 / 1440.
- One primary action per viewport; at most one entrance animation per viewport;
  `prefers-reduced-motion` respected.
- Every colour class is a real token in `tailwind.config.ts`.
- Every claim on screen is true and evidenced.
- Keyboard path and focus visibility verified; body contrast ≥ 4.5:1.
- `npm run lint` and `npm run build` pass.
- Consistent with `.devin/skills/ui-ux-pro-max/SKILL.md` and `docs/02-Design-System.md`.
