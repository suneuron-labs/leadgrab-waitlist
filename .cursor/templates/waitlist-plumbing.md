# Waitlist Plumbing — Standard Integration

Same across all waitlist projects. Copy from reference repo and parameterize product name in subjects/messages.

## Flow

```
User clicks CTA
  → LandingShell sets source + opens WaitlistModal
  → WaitlistForm validates email (Zod)
  → submitWaitlistClient() POSTs to Web3Forms (notifies founder)
  → POST /api/waitlist-confirm → Resend (confirmation to user)
  → Success state in modal
```

## Environment variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `WEB3FORMS_ACCESS_KEY` | `.env.local` | Founder notification |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | via `next.config.ts` | Client-side Web3Forms |
| `RESEND_API_KEY` | `.env.local` | Server-only |
| `RESEND_FROM_EMAIL` | `.env.local` | Verified sender domain |

Never commit `.env.local`. Commit `.env.local.example` with empty values.

## `lib/validators.ts`

Define one entry per CTA source for analytics:

```ts
export const WAITLIST_SOURCES = {
  heroCta: "Hero CTA",
  closingBanner: "Closing CTA Banner",
  freeTrial: "Free Trial Tier ($0)",
  proMonthly: "Pro Monthly Tier ($12/mo)",
  // add tier sources matching copy.pricing.tiers
} as const;
```

Adjust tier source strings to match spec pricing.

## `lib/submit-waitlist-client.ts`

- POST `https://api.web3forms.com/submit`
- Include: email, CTA source, intended plan, timestamp
- Subject line: `{Product Name} Beta Waitlist — {source}`
- Return typed `{ success: true } | { success: false; error: string }`

## `app/api/waitlist-confirm/route.ts`

- Validate body with `waitlistSchema`
- Call `sendWaitlistConfirmation()`
- Return 400 on invalid email, 500 on Resend failure

## `lib/email/send-waitlist-confirmation.ts`

- Read `copy.modal.confirmationEmail` for subject + html + text
- Use Resend SDK server-side only

## Modal UX requirements

- Loading state on submit (spinner, disabled button)
- Inline validation errors (Zod)
- Submit error message from API
- Success message replaces form
- Reset form when modal closes (`key={`${open}-${source}`}` on form)

## CTA wiring pattern

Every CTA that opens the waitlist:

```tsx
onClick={() => openWaitlist(WAITLIST_SOURCES.heroCta)}
```

Pricing tiers use their tier's `waitlistSource` from copy/config.

## Fake-door ethics

- CTAs promise **early access / waitlist** — not a working product download
- Modal explains batch rollout honestly (from spec)
- Confirmation email sets timeline expectations

## Testing checklist

- [ ] Build passes (`npm run build`)
- [ ] Modal opens from navbar, hero, pricing, closing CTA
- [ ] Source field populated per CTA
- [ ] Web3Forms receives submission (needs env + user to test live)
- [ ] Resend sends confirmation (needs verified domain)

Agent: ask user to run dev server and test — do not start server yourself.
