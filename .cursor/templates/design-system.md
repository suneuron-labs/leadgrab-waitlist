# Design System — Waitlist Pages

Default aesthetic for all waitlist validation pages. Override accent color per spec; keep structure consistent.

## Color palette

| Role | Tailwind classes |
|------|------------------|
| Page background | `bg-slate-950` |
| Body text | `text-slate-100` |
| Secondary text | `text-slate-400` |
| Muted text | `text-slate-500` |
| Brand accent | `text-emerald-400`, `bg-emerald-500`, `hover:bg-emerald-400` |
| CTA button | `bg-emerald-500 text-black font-semibold rounded-xl` |
| Pill badge | `border-emerald-500/20 bg-emerald-500/10 text-emerald-400 rounded-full` |
| Borders | `border-slate-800`, `border-slate-800/80` |
| Cards | `bg-slate-900/50 rounded-2xl border-slate-800` |
| Glass navbar | `bg-slate-950/80 backdrop-blur-md sticky top-0 z-50` |
| Selection | `selection:bg-emerald-500 selection:text-black` |
| Error text | `text-red-400` |
| Success box | `border-emerald-500/20 bg-emerald-500/10 text-emerald-400` |

### Accent override

If spec defines a different accent (e.g. cyan, violet), replace `emerald-*` consistently. Do not mix two accent colors.

## Typography

| Element | Classes |
|---------|---------|
| Font | Geist Sans (`next/font/google`), Geist Mono for code |
| HTML | `font-sans antialiased scroll-smooth` |
| Hero H1 | `text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight lg:leading-[1.1]` |
| Accent span in H1 | `text-emerald-400` |
| Hero sub | `text-lg leading-relaxed text-slate-400` |
| Section H2 | `text-3xl sm:text-4xl font-bold text-slate-100` |
| Section subtitle | `text-lg text-slate-400` |
| Nav links | `text-sm text-slate-400 hover:text-slate-100` |

## Layout

| Pattern | Value |
|---------|-------|
| Max width | `max-w-5xl mx-auto` |
| Horizontal padding | `px-6` |
| Section vertical padding | `py-20` |
| Hero padding | `py-16 sm:py-20 lg:py-24` |
| Hero grid | `lg:grid-cols-2 gap-12 lg:gap-16` |
| Scroll anchor offset | `scroll-mt-24` on sections |

## Components (shadcn)

- Style: **base-nova**
- Base color: **neutral** with CSS variables
- Dark mode: default via `className="dark"` on `<html>`
- Icons: **lucide-react**
- Primitives needed: `button`, `input`, `card`, `dialog`

## `app/layout.tsx` pattern

```tsx
<html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
  <body className="min-h-full flex flex-col bg-slate-950 font-sans text-slate-100 selection:bg-emerald-500 selection:text-black">
```

## `app/globals.css` imports

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
```

Use shadcn CSS variables from the init — do not invent a new token system per project.

## Do-not drift

- No light-mode-first pages
- No purple-gradient-on-white startup aesthetic
- No inline marketing copy in JSX — use `lib/copy.ts`
- Keep one primary CTA style across navbar, hero, pricing, closing banner
