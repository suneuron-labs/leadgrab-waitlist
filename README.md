# WA LeadGrab — Waitlist Landing Page

Standalone Next.js waitlist / fake-door landing page for WA LeadGrab demand validation.

**Repo:** [suneuron-labs/leadgrab-waitlist](https://github.com/suneuron-labs/leadgrab-waitlist)

When the real product launches, borrow the design from this repo into the product app. See `.cursor/rules/product-landing-handoff/` for the handoff manifest and agent instructions.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy env example and fill in keys:

```bash
cp .env.local.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `WEB3FORMS_ACCESS_KEY` | Notifies you when someone joins the waitlist |
| `RESEND_API_KEY` | Sends confirmation email to the user |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `hello@leadgrab.suneuron.com` |

3. Start the dev server (**you run this — the agent will not start/stop it**):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Import [leadgrab-waitlist](https://github.com/suneuron-labs/leadgrab-waitlist) in [Vercel](https://vercel.com)
2. Root directory: `.` (default — Next.js auto-detected)
3. Environment variables: `WEB3FORMS_ACCESS_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
4. Deploy

Web3Forms works from the browser on production. Resend requires a verified domain.

## Page sections

- Nav + Hero (waitlist CTA)
- Why Us (`#features`)
- Feature showcase (`#how-it-works`)
- Pricing (`#pricing`)
- FAQ (`#faq`)
- Footer

All CTAs open the private-beta waitlist modal → Web3Forms (lead to you) + Resend (confirmation to user).

## Design handoff

Copy and design tokens for the future product landing page live in `.cursor/rules/product-landing-handoff/`. Tag a stable design snapshot before major visual changes:

```bash
git tag design-v1
git push origin design-v1
```

## Notes

- Copy lives in `lib/copy.ts`
- Chrome extension / product app is a separate repo (not this one)
