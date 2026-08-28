# Page Structure — Waitlist Landing

Mirror this structure in the product landing unless there is a deliberate product reason to change it.

## Render tree

```
RootLayout (app/layout.tsx)
└── Home (app/page.tsx)
    ├── LandingShell
    │   ├── Navbar (sticky)
    │   ├── HeroSection
    │   ├── <main>
    │   │   ├── WhyUsGrid          → id="features"
    │   │   ├── FeatureShowcase    → id="how-it-works"
    │   │   ├── PricingTable       → id="pricing"
    │   │   ├── FaqSection         → id="faq"
    │   │   └── ClosingCtaBanner
    │   └── WaitlistModal (product: remove)
    └── Footer
```

## Section anchor IDs

Nav links in `lib/copy.ts` must match section IDs:

| Nav label | href | Component |
|-----------|------|-----------|
| Features | `#features` | `WhyUsGrid` |
| How It Works | `#how-it-works` | `FeatureShowcase` |
| Pricing | `#pricing` | `PricingTable` |
| FAQ | `#faq` | `FaqSection` |

## Product shell replacement

Replace `LandingShell` with something like:

```tsx
// ProductLandingShell — no waitlist
export function ProductLandingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />           {/* Install + Sign in, no onOpenWaitlist */}
      <HeroSection />      {/* Chrome install link, no modal */}
      {children}
    </>
  );
}
```

## Section order rationale

1. **Hero** — value prop + primary CTA above the fold
2. **Why Us** — differentiation (3 cards)
3. **How It Works** — before/after proof
4. **Pricing** — tiers (keep even if single free tier at launch)
5. **FAQ** — objection handling
6. **Closing CTA** — repeat primary action
7. **Footer** — legal / links

## Copy source

All user-facing strings: `lib/copy.ts`. When porting, copy the file wholesale, then edit CTAs and post-launch FAQ answers.

## Waitlist source tracking (DO NOT PORT)

`lib/validators.ts` defines `WAITLIST_SOURCES` for analytics on which CTA opened the modal. Product app should use its own analytics events (e.g. `cta_hero_install`, `cta_nav_install`).
