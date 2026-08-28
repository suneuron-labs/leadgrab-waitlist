# Product Handoff — Generic Template

When a waitlist validates demand, the **product app** (separate repo) borrows design from the waitlist repo.

Generate project-specific docs in `.cursor/rules/product-landing-handoff/` at waitlist build time.

---

## Repo relationship

| Repo | Role |
|------|------|
| `{product}-waitlist` | Validation site + frozen design reference |
| `{product}` / `{product}-app` | Real product — receives borrowed UI |

## Handoff workflow

1. Tag waitlist design: `git tag design-v1 && git push origin design-v1`
2. In product repo, clone or reference waitlist repo at that tag
3. Copy files per manifest (below)
4. Apply CTA migration (waitlist modal → install / sign in)
5. Edit `lib/copy.ts` for launch messaging

## File manifest

### COPY AS-IS

| Path | Notes |
|------|-------|
| `app/globals.css` | Theme tokens |
| `app/layout.tsx` | Fonts, dark mode — update metadata |
| `components.json` | shadcn config |
| `postcss.config.mjs`, `tsconfig.json` | Tooling |
| `lib/utils.ts` | `cn()` helper |
| `components/ui/*` | shadcn primitives |
| `public/logo.svg`, `components/logo.tsx` | Brand assets |

### ADAPT

| Path | Changes |
|------|---------|
| `components/navbar.tsx` | Install / Sign in CTAs |
| `components/hero-section.tsx` | Web Store link, no modal |
| `components/why-us-grid.tsx` | Copy only |
| `components/feature-showcase.tsx` | Copy only |
| `components/pricing-table.tsx` | Real checkout links when ready |
| `components/faq-section.tsx` | Post-launch answers |
| `components/closing-cta-banner.tsx` | Install CTA |
| `components/footer.tsx` | Updated links |
| `components/landing-shell.tsx` | **Rewrite** — drop modal/provider |
| `lib/copy.ts` | Seed + edit CTAs |
| `app/page.tsx` | Same section order |

### DO NOT COPY

| Path | Reason |
|------|--------|
| `components/waitlist-*.tsx` | Waitlist-only |
| `lib/submit-waitlist-client.ts` | Web3Forms |
| `lib/email/send-waitlist-confirmation.ts` | Resend waitlist email |
| `app/api/waitlist-confirm/` | Waitlist API |
| `lib/validators.ts` | Waitlist sources (unless adapting analytics) |

## CTA migration

| Waitlist | Product |
|----------|---------|
| "Join Early Beta" → modal | "Add to Chrome" → store URL |
| Pricing tier → modal | Tier → checkout or install |
| `WaitlistProvider` | Remove |
| `onOpenWaitlist` props | Remove |

Add in product repo:

```ts
// lib/urls.ts
export const CHROME_STORE_URL = "https://chrome.google.com/webstore/detail/...";
export const SIGN_IN_URL = "/login";
```

## Design tokens to preserve

See `.cursor/templates/design-system.md` — do not drift colors, fonts, or layout widths when porting.

## Per-project handoff folder

After building a waitlist, create `.cursor/rules/product-landing-handoff/` with:

- `README.md` — product name, repo names, tag to reference
- `file-manifest.md` — filled from above for this product
- `design-tokens.md` — snapshot if accent was customized
- `page-structure.md` — sections included in this waitlist
- `cta-migration.md` — product-specific CTA labels and URLs

Use `leadgrab-waitlist`'s `product-landing-handoff/` as a filled example.
