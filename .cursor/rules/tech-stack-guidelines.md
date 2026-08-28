# Tech Stack — Waitlist Pages

> Full design rules: `.cursor/templates/design-system.md`
> Build workflow: `.cursor/WAITLIST-BUILD.md`

## Stack

- **Framework:** Next.js App Router, TypeScript, React 19
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (base-nova)
- **Icons:** lucide-react
- **Fonts:** Geist Sans + Geist Mono
- **Forms:** React Hook Form + Zod
- **Lead capture:** Web3Forms (browser) + Resend (confirmation email)

## Code rules

- TypeScript with explicit types
- `"use client"` at line 1 for client components
- Single-responsibility components
- All marketing copy in `lib/copy.ts`
- Forms: loading states, disabled submit, inline errors, success feedback

## Visual defaults

Dark slate canvas, emerald accent, `max-w-5xl` column, sticky blurred navbar, rounded-xl CTAs. Override accent per spec only — do not change layout patterns.
