# CTA Migration — Waitlist → Product

Every waitlist CTA opens a modal via `WaitlistProvider` → `onOpenWaitlist()`. The product landing replaces these with real actions.

## Current waitlist CTA map

| Location | Current label (copy key) | Current action |
|----------|-------------------------|----------------|
| Navbar | `copy.nav.cta` — "Join Early Beta" | `onOpenWaitlist(WAITLIST_SOURCES.heroCta)` |
| Hero button | `copy.hero.cta` — "Join Early Beta" | `onOpenWaitlist()` |
| Pricing cards | Per-tier CTAs in `copy.pricing` | Opens modal with tier source |
| Closing banner | `copy.closing.cta` | Opens modal |
| Footer | None (links only) | — |

## Product CTA replacements

| Location | Suggested label | Action |
|----------|-----------------|--------|
| Navbar primary | "Add to Chrome" | `href` → Chrome Web Store URL (or `#install` anchor) |
| Navbar secondary (optional) | "Sign in" | `/login` or dashboard URL |
| Hero primary | "Add to Chrome — Free" | Web Store link, same styling |
| Hero secondary (optional) | "See how it works" | `#how-it-works` smooth scroll |
| Pricing free tier | "Install Free" | Web Store link |
| Pricing paid tiers | "Subscribe" / "Coming soon" | Stripe or waitlist until billing live |
| Closing banner | "Add to Chrome" | Web Store link |

## Code changes per component

### `navbar.tsx`

- Remove `onOpenWaitlist` prop
- Primary button: `<Button asChild><a href={CHROME_STORE_URL}>...</a></Button>` or external link
- Optional secondary ghost button for Sign in

### `hero-section.tsx`

- Remove `onOpenWaitlist` prop and `onClick`
- Use `<Button asChild>` wrapping anchor to Web Store
- Keep `Puzzle` icon from lucide-react

### `pricing-table.tsx`

- Replace modal triggers with links or product checkout URLs
- Keep card layout and emerald highlight on featured tier

### `closing-cta-banner.tsx`

- Replace modal open with Web Store link
- Keep full-width emerald banner styling

### `landing-shell.tsx`

- Delete waitlist wiring entirely (see `page-structure.md`)
- Remove imports: `WaitlistModal`, `WaitlistProvider`, `WAITLIST_SOURCES`

## Copy keys to update in `lib/copy.ts`

```ts
nav.cta          → "Add to Chrome"
hero.cta         → "Add to Chrome — Free"
// pricing.*.cta  → install / subscribe labels
closing.cta      → "Add to Chrome"
```

Add new constants file in product repo:

```ts
// lib/urls.ts
export const CHROME_STORE_URL = "https://chrome.google.com/webstore/detail/...";
export const SIGN_IN_URL = "/login";
```

## Analytics migration

Replace waitlist `source` field with product events:

| Waitlist source | Product event |
|-----------------|---------------|
| `hero_cta` | `install_click_hero` |
| `nav_cta` | `install_click_nav` |
| `pricing_free` | `install_click_pricing_free` |
| `closing_cta` | `install_click_closing` |

## Env vars to drop in product landing

- `WEB3FORMS_ACCESS_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

No server-side waitlist API needed unless product collects emails separately.
