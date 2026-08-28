# Architecture — Waitlist Repo

Every waitlist repo is a **standalone Next.js app at the repository root** — no monorepo subfolder, no `temp/` path.

## Folder layout

```
{product}-waitlist/
├── .cursor/
│   ├── WAITLIST-BUILD.md          # Build playbook
│   ├── spec/                      # Per-project specs
│   └── templates/                 # Generic reusable docs
├── .cursor/rules/
│   ├── build-waitlist.mdc
│   ├── dev-server-control.mdc
│   ├── design-handoff.mdc
│   └── product-landing-handoff/   # Project-specific handoff
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/waitlist-confirm/route.ts
├── components/
│   ├── landing-shell.tsx          # Shell + modal wiring
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── hero-mockup.tsx            # Optional per spec
│   ├── why-us-grid.tsx
│   ├── feature-showcase.tsx
│   ├── pricing-table.tsx          # Optional
│   ├── faq-section.tsx
│   ├── closing-cta-banner.tsx
│   ├── footer.tsx
│   ├── logo.tsx
│   ├── waitlist-context.tsx
│   ├── waitlist-form.tsx
│   ├── waitlist-modal.tsx
│   └── ui/                        # shadcn primitives
├── lib/
│   ├── copy.ts                    # ALL marketing copy
│   ├── utils.ts
│   ├── validators.ts
│   ├── submit-waitlist-client.ts
│   └── email/send-waitlist-confirmation.ts
├── public/
│   └── logo.svg
├── .env.local.example
├── components.json
├── package.json
└── README.md
```

## Component tree

```
page.tsx
├── LandingShell
│   ├── WaitlistProvider
│   ├── Navbar          → onOpenWaitlist
│   ├── HeroSection     → onOpenWaitlist
│   ├── {children}      → main sections
│   └── WaitlistModal
│       └── WaitlistForm → submitWaitlistClient + /api/waitlist-confirm
└── Footer
```

## Client vs server

| Client (`"use client"`) | Server |
|-------------------------|--------|
| navbar, hero, all sections with CTAs | layout.tsx, page.tsx (can be server) |
| landing-shell, waitlist-* | api/waitlist-confirm/route.ts |
| pricing-table (uses context) | send-waitlist-confirmation.ts |

## Copy discipline

- **`lib/copy.ts`** — single source for all strings
- **`lib/validators.ts`** — `WAITLIST_SOURCES` must match pricing tier CTAs
- Components import `copy` — never embed product-specific strings

## `next.config.ts`

If using Web3Forms from the browser, expose the key:

```ts
env: {
  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY,
},
```

## Reference

Canonical implementation: [leadgrab-waitlist](https://github.com/suneuron-labs/leadgrab-waitlist)
