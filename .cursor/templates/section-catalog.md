# Section Catalog — Waitlist Pages

Build only sections checked in the user spec. Each section maps to a component + `lib/copy.ts` key.

## Required sections

### Hero (`components/hero-section.tsx`)

- Audience pill, headline with accent span, subheading
- Primary CTA → opens waitlist modal
- Trust subtext below CTA
- Optional: `hero-mockup.tsx` (product UI or before/after visual)
- Copy keys: `copy.hero`

### Landing shell (`components/landing-shell.tsx`)

- Always required — wires navbar, hero, modal, children
- Not a visible "section" but mandatory infrastructure

### Waitlist modal stack

- `waitlist-context.tsx`, `waitlist-modal.tsx`, `waitlist-form.tsx`
- Always required for waitlist repos

---

## Optional sections

### Why Us grid (`components/why-us-grid.tsx`)

- **Anchor:** `id="features"`
- 3-column card grid with Lucide icons
- Copy keys: `copy.whyUs`
- Use when: product has 3 clear differentiators

### Feature showcase (`components/feature-showcase.tsx`)

- **Anchor:** `id="how-it-works"`
- Before/after or raw-vs-clean comparison table
- Copy keys: `copy.showcase`
- Use when: product has a visual transformation story

### Pricing table (`components/pricing-table.tsx`)

- **Anchor:** `id="pricing"`
- 1–3 tiers; each CTA opens modal with tier-specific `WAITLIST_SOURCES` entry
- Copy keys: `copy.pricing`
- Use when: validating willingness to pay or plan preference
- Skip when: pre-product with no pricing hypothesis

### FAQ (`components/faq-section.tsx`)

- **Anchor:** `id="faq"`
- Accordion or stacked Q&A
- Copy keys: `copy.faq`
- Use when: objections need handling (privacy, bans, pricing, timeline)

### Closing CTA banner (`components/closing-cta-banner.tsx`)

- Full-width repeat CTA before footer
- Copy keys: `copy.closingCta`
- Use when: page is long (almost always include)

### Footer (`components/footer.tsx`)

- Product name, tagline, copyright, legal disclaimer
- Copy keys: `copy.footer`
- Always include

---

## Nav ↔ section contract

`copy.nav.links` hrefs must match section IDs:

| Default label | href | Component |
|---------------|------|-----------|
| Features | `#features` | WhyUsGrid |
| How It Works | `#how-it-works` | FeatureShowcase |
| Pricing | `#pricing` | PricingTable |
| FAQ | `#faq` | FaqSection |

Remove nav links for omitted sections.

---

## Page assembly (`app/page.tsx`)

```tsx
export default function Home() {
  return (
    <>
      <LandingShell>
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-12">
          {/* Include only spec-selected sections, in this order: */}
          <WhyUsGrid />
          <FeatureShowcase />
          <PricingTable />
          <FaqSection />
          <ClosingCtaBanner />
        </main>
      </LandingShell>
      <Footer />
    </>
  );
}
```

---

## Hero mockup variants

| Variant | Component approach |
|---------|-------------------|
| Product UI | CSS-drawn mock of app/extension interface (`hero-mockup.tsx`) |
| Before/after | Can reuse showcase pattern in hero, or simplified mini version |
| None | Single-column hero, centered copy, no mockup column |

Describe the mockup in the spec; do not use placeholder stock images unless spec requests.
