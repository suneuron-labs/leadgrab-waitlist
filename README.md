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
| `AZURE_TENANT_ID` | Microsoft 365 / Azure AD tenant ID |
| `AZURE_CLIENT_ID` | App registration client ID |
| `AZURE_CLIENT_SECRET` | App registration client secret |
| `WAITLIST_SENDER_EMAIL` | From/reply-to address and admin alert recipient, e.g. `waitlist@leadgrab.suneuron.com` |
| `GRAPH_MAILBOX_USER` | Primary licensed mailbox UPN — **required if `WAITLIST_SENDER_EMAIL` is an alias** |
| `RESEND_API_KEY` | Sends confirmation email to the user (external delivery) |
| `RESEND_FROM_EMAIL` | Verified Resend sender, e.g. `hello@leadgrab.suneuron.com` |

### Microsoft Graph setup (admin alerts)

Used for internal admin alerts to your M365 inbox. User confirmation emails go via **Resend** until M365 trial outbound restrictions are lifted.

1. [Azure Portal](https://portal.azure.com) → **App registrations** → **New registration** (e.g. `LeadGrab Waitlist`)
2. **Certificates & secrets** → create a **client secret** → copy value to `AZURE_CLIENT_SECRET`
3. Copy **Application (client) ID** → `AZURE_CLIENT_ID`
4. Copy **Directory (tenant) ID** → `AZURE_TENANT_ID`
5. **API permissions** → **Add permission** → **Microsoft Graph** → **Application permissions** → **Mail.Send**
6. **Grant admin consent** for the tenant
7. If `WAITLIST_SENDER_EMAIL` is an **alias** (not its own mailbox), set `GRAPH_MAILBOX_USER` to your **primary** M365 email (the licensed account the alias is attached to)

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
3. Environment variables: Azure Graph vars + `WAITLIST_SENDER_EMAIL`, `GRAPH_MAILBOX_USER`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
4. Deploy

## Page sections

- Nav + Hero (waitlist CTA)
- Why Us (`#features`)
- Feature showcase (`#how-it-works`)
- Pricing (`#pricing`)
- FAQ (`#faq`)
- Footer

All CTAs open the private-beta waitlist modal → Graph admin alert to your M365 inbox + Resend confirmation to the user.

## Design handoff

Generic process: `.cursor/templates/product-handoff.md`

Project-specific handoff docs: `.cursor/rules/product-landing-handoff/`. Tag a stable design snapshot before major visual changes:

```bash
git tag design-v1
git push origin design-v1
```

## Notes

- Copy lives in `lib/copy.ts`
- Chrome extension / product app is a separate repo (not this one)
