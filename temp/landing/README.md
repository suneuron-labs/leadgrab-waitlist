# WA LeadGrab — Fake-Door Landing Page

Temporary validation landing page for WA LeadGrab. Lives in `temp/landing/` so the whole folder can be deleted after demand validation.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

```bash
cd temp/landing
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

1. Push `temp/landing/` to a repo or deploy as a subdirectory
2. Import project in [Vercel](https://vercel.com)
3. Set root directory to `temp/landing` if using monorepo
4. Add env vars: `WEB3FORMS_ACCESS_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
5. Deploy

Web3Forms works from the browser on production. Resend requires a verified domain.

## Page sections

- Nav + Hero (waitlist CTA)
- Why Us (`#features`)
- Feature showcase (`#how-it-works`)
- Pricing (`#pricing`)
- FAQ (`#faq`)
- Footer

All CTAs open the private-beta waitlist modal → Web3Forms (lead to you) + Resend (confirmation to user).

## Teardown

When validation is complete, delete the entire folder:

```bash
rm -rf temp/landing
```

No other repo files depend on this app.

## Notes

- Copy lives in `lib/copy.ts`
- Project rules in `.cursor/rules/` at repo root
- Chrome extension code is separate (not in this folder)
