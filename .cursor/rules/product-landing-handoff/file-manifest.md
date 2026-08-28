# File Manifest — Waitlist → Product Landing

Legend: **COPY AS-IS** · **ADAPT** · **DO NOT COPY**

## Design system & config (COPY AS-IS)

| Path | Notes |
|------|-------|
| `app/globals.css` | Tailwind v4 theme, shadcn tokens, dark mode vars |
| `app/layout.tsx` | Geist fonts, `dark` class, body slate/emerald base — update metadata only |
| `components.json` | shadcn config (base-nova, lucide, aliases) |
| `postcss.config.mjs` | Tailwind PostCSS |
| `tsconfig.json` | Path aliases `@/*` |
| `lib/utils.ts` | `cn()` helper |
| `components/ui/button.tsx` | Primary UI primitive |
| `components/ui/card.tsx` | Card primitive |
| `components/ui/input.tsx` | Input primitive |
| `components/ui/dialog.tsx` | Optional — only if product needs modals |
| `public/logo.svg` | Brand mark |
| `components/logo.tsx` | Logo component |

## Marketing sections (ADAPT)

| Path | Adapt |
|------|-------|
| `components/navbar.tsx` | Replace waitlist CTA with Install / Sign in; keep sticky slate header |
| `components/hero-section.tsx` | Change CTA to Chrome install; remove `onOpenWaitlist` prop |
| `components/hero-mockup.tsx` | Keep visual; update mock labels in copy if needed |
| `components/why-us-grid.tsx` | Keep layout; copy from `lib/copy.ts` |
| `components/feature-showcase.tsx` | Keep before/after table layout |
| `components/pricing-table.tsx` | Update tiers/links for real checkout when ready |
| `components/faq-section.tsx` | Update FAQ for launched product |
| `components/closing-cta-banner.tsx` | Point to install, not waitlist |
| `components/footer.tsx` | Update links (privacy, support, social) |
| `lib/copy.ts` | Seed all marketing text; edit CTAs and post-launch FAQ |
| `app/page.tsx` | Same section order; swap `LandingShell` for product shell |

## Layout shell (ADAPT — important)

| Path | Adapt |
|------|-------|
| `components/landing-shell.tsx` | **Rewrite** as product shell: drop `WaitlistProvider`, modal state, `WaitlistModal`. Keep Navbar + Hero + `{children}` pattern. |

## Waitlist-only (DO NOT COPY)

| Path | Reason |
|------|--------|
| `components/waitlist-modal.tsx` | Waitlist funnel |
| `components/waitlist-form.tsx` | Web3Forms submission |
| `components/waitlist-context.tsx` | Modal open state |
| `lib/submit-waitlist-client.ts` | Web3Forms client |
| `lib/validators.ts` | Waitlist source tracking — only needed if keeping analytics pattern |
| `lib/email/send-waitlist-confirmation.ts` | Resend confirmation |
| `app/api/waitlist-confirm/route.ts` | Server-side email API |

## Dependencies to carry over

From `package.json`, product marketing app needs at minimum:

- `next`, `react`, `react-dom`
- `tailwindcss`, `@tailwindcss/postcss`, `tw-animate-css`
- `shadcn`, `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`
- `lucide-react`

**Drop for product landing** (unless reused elsewhere): `resend`, `react-hook-form`, `@hookform/resolvers`, `zod` (unless product forms need them).

## Package name

This repo: `"leadgrab-waitlist"`. Product repo should use its own name (e.g. `"leadgrab-web"`).
