# Waitlist Build Playbook

**Trigger:** User provides a filled waitlist spec (`.cursor/spec/<project>.md`) and says **"build the waitlist"**.

Read this file first, then the spec, then the template files listed below. The spec is the source of truth for *what* to build; this playbook defines *how*.

---

## What you are building

| Attribute | Value |
|-----------|-------|
| Purpose | Fake-door / demand-validation landing page |
| Lifetime | Short-to-medium — design reference until product launches |
| Repo pattern | `{product-slug}-waitlist` (standalone Next.js app at repo root) |
| Product app | **Separate repo** — borrows look & feel from this waitlist later |
| Primary CTA | Opens waitlist modal (email capture) — **not** a working product |

Do not build auth, dashboards, payments, or core product logic in a waitlist repo.

---

## Read order

1. This file (`.cursor/WAITLIST-BUILD.md`)
2. User spec (`.cursor/spec/<project>.md`)
3. `.cursor/templates/design-system.md` — visual defaults
4. `.cursor/templates/architecture.md` — folder layout & component tree
5. `.cursor/templates/section-catalog.md` — which sections to scaffold
6. `.cursor/templates/waitlist-plumbing.md` — Web3Forms + Resend + modal flow
7. `.cursor/templates/product-handoff.md` — generate handoff docs after build

**Reference implementation:** this repo (`leadgrab-waitlist`) — clone patterns from here when unsure.

---

## Pre-flight (before writing code)

From the spec, confirm or ask once:

- [ ] **Product name** and **repo/package name** (`{slug}-waitlist`)
- [ ] **GitHub remote** (empty repo URL, if pushing)
- [ ] **Sections to include** (see section catalog — omit unused sections)
- [ ] **Pricing tiers** count (0–3) and prices
- [ ] **Hero mockup type** (product screenshot CSS mock / before-after / none)
- [ ] **Accent color** override (default: emerald) — optional
- [ ] **Founder name** for confirmation email sign-off

If the spec is complete, skip questions and build.

---

## Build steps

### 1. Scaffold

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --turbopack
```

Skip if repo already has Next.js at root. Then:

```bash
npx shadcn@latest init   # base-nova, neutral, cssVariables
npx shadcn@latest add button input card dialog
npm install react-hook-form @hookform/resolvers zod resend lucide-react
```

Match versions in reference `package.json` when possible.

### 2. Design system

Apply defaults from `.cursor/templates/design-system.md`:

- Dark slate canvas, emerald accent (or spec override)
- Geist Sans + Geist Mono via `next/font`
- `<html className="dark ...">` in `app/layout.tsx`
- `max-w-5xl mx-auto px-6` content column
- Sticky blurred navbar (`bg-slate-950/80 backdrop-blur-md`)

### 3. Copy layer

Create `lib/copy.ts` with **all** user-facing strings from the spec. Structure:

```
meta, nav, hero, whyUs, showcase, pricing, modal, faq, closingCta, footer
```

No hardcoded marketing copy in components — components read from `copy`.

### 4. Waitlist plumbing (standard — do not reinvent)

Copy the pattern from reference repo (see `.cursor/templates/waitlist-plumbing.md`):

| File | Role |
|------|------|
| `lib/validators.ts` | Zod schema + `WAITLIST_SOURCES` enum |
| `lib/submit-waitlist-client.ts` | Web3Forms POST from browser |
| `lib/email/send-waitlist-confirmation.ts` | Resend confirmation |
| `app/api/waitlist-confirm/route.ts` | Server route for email |
| `components/waitlist-context.tsx` | Modal open context |
| `components/waitlist-form.tsx` | Email form + submit flow |
| `components/waitlist-modal.tsx` | Dialog wrapper |
| `components/landing-shell.tsx` | Navbar + Hero + modal state + `{children}` |

Env vars in `.env.local.example`:

```
WEB3FORMS_ACCESS_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=hello@yourdomain.com
```

Expose Web3Forms key to client as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `next.config.ts` if using the reference pattern.

### 5. Marketing sections

Build only sections listed in the spec (see section catalog). Standard page:

```
app/page.tsx
├── LandingShell (navbar + hero + modal)
│   └── <main>
│       ├── WhyUsGrid           #id=features
│       ├── FeatureShowcase     #id=how-it-works
│       ├── PricingTable        #id=pricing  (optional)
│       ├── FaqSection          #id=faq
│       └── ClosingCtaBanner
└── Footer
```

Nav anchor hrefs in `copy.nav.links` must match section `id` attributes.

### 6. Project rules & handoff docs

Create/update in `.cursor/rules/`:

| File | Purpose |
|------|---------|
| `dev-server-control.mdc` | Never start/stop dev server |
| `build-waitlist.mdc` | Points back to this playbook |
| `design-handoff.mdc` | Product-app handoff trigger |
| `product-landing-handoff/` | Project-specific manifest (from template) |

Generate `product-landing-handoff/` from `.cursor/templates/product-handoff.md`, filling in product name and file paths.

### 7. README & verify

- Root `README.md` with setup, env vars, Vercel deploy steps
- `npm run build` must pass
- Do **not** start dev server (user controls that)

### 8. Tag design snapshot

After first successful build:

```bash
git tag design-v1
```

---

## Spec → code mapping

| Spec section | Code destination |
|--------------|------------------|
| Product name, tagline | `copy.meta`, `copy.nav.logo`, `copy.footer` |
| Nav links | `copy.nav.links` |
| Hero | `copy.hero` + `components/hero-section.tsx` |
| Audience pill | `copy.hero.pill` |
| Value props (3 cards) | `copy.whyUs.cards` + `why-us-grid.tsx` |
| How it works | `copy.showcase` + `feature-showcase.tsx` |
| Pricing tiers | `copy.pricing.tiers` + `validators.ts` sources |
| FAQ | `copy.faq.items` + `faq-section.tsx` |
| Waitlist modal copy | `copy.modal` |
| Confirmation email | `copy.modal.confirmationEmail` |
| Closing CTA | `copy.closingCta` |

---

## Product handoff (future)

This waitlist repo becomes the **design source of truth**. When the user builds the real app:

1. Read `.cursor/rules/product-landing-handoff/` in this repo
2. Copy **COPY AS-IS** files (theme, UI, assets)
3. **Adapt** marketing sections; swap waitlist CTAs for install/sign-in
4. **Do not copy** waitlist modal, form, Web3Forms, Resend API

Generic process: `.cursor/templates/product-handoff.md`

---

## Reuse across projects

To start a new waitlist project:

1. Copy `.cursor/` folder (this playbook + templates + rules) into the new repo
2. Copy spec template → `.cursor/spec/<new-product>.md` and fill it in
3. Say **"build the waitlist"** and attach the spec

Colors and copy vary per spec; architecture and plumbing stay the same.

---

## Do-not list

- Do not put the app in a `temp/` subfolder — root-level Next.js app
- Do not hardcode API keys
- Do not skip CTA source tracking (`WAITLIST_SOURCES`)
- Do not build real product features (auth, billing, extension logic)
- Do not start/stop the dev server
- Do not commit `.env.local`
