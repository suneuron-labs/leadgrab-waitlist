# Design Tokens — WA LeadGrab Waitlist

Extracted from `app/globals.css`, `app/layout.tsx`, and section components. Use these values when building the product landing so visuals match.

## Color palette (Tailwind classes in use)

| Role | Classes | Usage |
|------|---------|-------|
| Page background | `bg-slate-950` | Body, full page |
| Primary text | `text-slate-100` | Headings, body on dark |
| Muted text | `text-slate-400`, `text-slate-500` | Subheadings, trust lines, nav links |
| Brand accent | `text-emerald-400`, `bg-emerald-500`, `hover:bg-emerald-400` | CTAs, highlights, selection |
| CTA button | `bg-emerald-500 text-black font-semibold rounded-xl` | Primary actions |
| Pill badge | `border-emerald-500/20 bg-emerald-500/10 text-emerald-400 rounded-full` | Hero pill |
| Borders | `border-slate-800/80` | Navbar, cards, dividers |
| Glass header | `bg-slate-950/80 backdrop-blur-md` | Sticky navbar |
| Text selection | `selection:bg-emerald-500 selection:text-black` | Body selection |

## Typography

| Element | Classes |
|---------|---------|
| Font family | Geist Sans (`--font-geist-sans`), Geist Mono for code |
| HTML default | `font-sans antialiased scroll-smooth` |
| Hero H1 | `text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight lg:leading-[1.1]` |
| Hero sub | `text-lg leading-relaxed text-slate-400` |
| Section titles | Bold, slate-100; subtitles in slate-400 |
| Nav links | `text-sm text-slate-400 hover:text-slate-100` |

## Layout

| Pattern | Value |
|---------|-------|
| Max content width | `max-w-5xl` |
| Horizontal padding | `px-6` |
| Main column | `mx-auto flex w-full max-w-5xl flex-1 flex-col` |
| Hero grid | `lg:grid-cols-2 gap-12 lg:gap-16` |
| Hero vertical padding | `py-16 sm:py-20 lg:py-24` |

## Components (shadcn)

- Style: **base-nova** (`components.json`)
- Base color: **neutral** with CSS variables in `globals.css`
- Dark mode: **default** — `<html className="dark ...">`
- Icons: **lucide-react**

## CSS variables (from globals.css)

Key tokens in `:root` / `.dark`:

- `--background`, `--foreground`
- `--primary` / `--primary-foreground` (dark mode primary uses emerald-ish `oklch(0.696 0.17 162.48)`)
- `--radius: 0.625rem` with derived `--radius-sm` through `--radius-4xl`
- `--border`, `--input`, `--ring`, `--muted`, `--accent`, `--destructive`

Import stack in `globals.css`:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
```

## Brand assets

- Favicon / logo: `/logo.svg` via `metadata.icons` in `layout.tsx`
- Logo component: `components/logo.tsx` (text + icon)

## Do not drift

When adapting the product landing, preserve:

1. Dark slate background + emerald accent (not a new color scheme)
2. `rounded-xl` on primary buttons
3. `max-w-5xl` content column
4. Geist font pairing
5. Sticky blurred navbar pattern
