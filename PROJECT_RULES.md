# Project Rules & Design Guiding Principles

This document governs all architectural, visual, content, and engineering decisions for this codebase. Every update must adhere strictly to these principles.

---

## 1. Honesty & Integrity Principles
* **Never Fake Testimonials**: Every testimonial must be authentic and verifiable.
* **Never Fake Statistics**: Do not include arbitrary metrics (e.g. "4.9/5 Rating", "15+ Builds"). State capabilities and real values (e.g. "Performance Focused", "Mobile First", "SEO Ready").
* **Never Fake Client Logos**: Only display logos of companies with whom direct commercial or engineering work has been conducted.

---

## 2. Engineering & Design Hierarchy
1. **Performance Before Animation**: Smooth 60fps interaction and low latency take precedence over complex motion effects.
2. **Accessibility Before Aesthetics**: High color contrast, semantic HTML tags, keyboard navigation, and aria labels are non-negotiable.
3. **Originality Before Trends**: Build around business purpose and clarity rather than superficial web trends.

---

## 3. Core Page Guiding Questions
Every page and major component across the portfolio must clearly answer these 5 fundamental user questions:
1. **Who are we?** (Clear identity, values, and positioning)
2. **What do we build?** (Tangible capabilities, modern stack, real case studies)
3. **Why trust us?** (Engineering rigour, performance benchmarks, transparent communication)
4. **How do we work?** (Clear step-by-step collaborative process)
5. **How do you contact us?** (Frictionless, responsive, low-friction inquiry paths)

---

## 4. Production Release Gate & QA Checklist
Before any code goes to production, every single check item below must be verified and passed:

### 🎨 Design
- [ ] Mobile tested
- [ ] Desktop tested
- [ ] Tablet tested
- [ ] Dark mode consistent

### ⚙️ Functionality
- [ ] Contact form
- [ ] Email notifications
- [ ] Database persistence
- [ ] Admin login
- [ ] Dynamic CMS

### ⚡ Performance
- [ ] Lighthouse score ≥ 95
- [ ] Zero console errors
- [ ] Zero broken links
- [ ] Images fully optimized (`next/image`)

### 🔍 SEO
- [ ] Sitemap (`sitemap.ts`)
- [ ] Robots (`robots.ts`)
- [ ] Dynamic Metadata
- [ ] Open Graph tags
- [ ] Structured Data (JSON-LD)

### 🔒 Security
- [ ] Rate limiting (`@upstash/ratelimit` or custom middleware)
- [ ] Input validation & sanitization (`zod`)
- [ ] Environment variables protected (`.env.production`)
- [ ] Secure HTTP headers (`next.config.js`)

### 🚀 Deployment & Operations
- [ ] GitHub repository synced
- [ ] Vercel Preview build verified
- [ ] Production deployment clean
- [ ] Custom domain linked & SSL active
- [ ] Google Search Console verified
- [ ] Analytics active (Google Analytics / Plausible)

---

## 5. Production Workflow & Release Pipeline

```
Creative Direction (Antigravity)
          ↓
  Design Review (Client)
          ↓
 Implementation (Devin)
          ↓
Quality Assurance (Client)
          ↓
  GitHub Repository
          ↓
 Vercel Preview Deployment
          ↓
 Pre-Production Gate Verification
          ↓
   Production Launch
```
