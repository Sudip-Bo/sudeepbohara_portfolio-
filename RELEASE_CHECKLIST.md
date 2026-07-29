# Pre-Production Release Criteria & Checklist

Before promoting any code to live production, every single item across all categories must be verified and checked.

---

### 🎨 Design
- [ ] Mobile tested (iOS Safari & Android Chrome)
- [ ] Desktop tested (Chrome, Safari, Firefox, Edge)
- [ ] Tablet tested (iPad / Air breakpoints)
- [ ] Dark mode token & contrast consistency verified

### ⚙️ Functionality
- [ ] Contact form submission functional
- [ ] Email notifications active (Resend)
- [ ] Database persistence functional
- [ ] Admin login & session protection active
- [ ] Dynamic CMS fetching live content

### ⚡ Performance & Budget
- [ ] Lighthouse score ≥ 95 across all metrics
- [ ] Zero browser console errors
- [ ] Zero broken internal/external links
- [ ] Images optimized (Thumbnail, Medium, Full generated automatically via `next/image`)
- [ ] Performance budget enforced (JS Bundle target, font subsetting)

### 🔍 SEO
- [ ] Dynamic Sitemap (`sitemap.ts`)
- [ ] Robots configuration (`robots.ts`)
- [ ] Page metadata configured per route
- [ ] Open Graph social previews tested
- [ ] Structured Data (JSON-LD) validated

### 🔒 Security
- [ ] Rate limiting active (`@upstash/ratelimit` or middleware)
- [ ] Input validation & sanitization (`zod`)
- [ ] Environment variables secured (`.env.example` vs `.env.production`)
- [ ] Secure HTTP headers configured in `next.config.js`

### 🚀 Deployment & Operations
- [ ] GitHub repository main branch synced
- [ ] Vercel Preview build verified
- [ ] Production build cleanly deployed
- [ ] Custom domain linked & SSL active
- [ ] Google Search Console property verified
- [ ] Analytics active (Google Analytics / Plausible)
