# Cursor — Waitlist Factory

This folder contains the reusable system for building validation waitlist pages.

## Quick start

1. Copy `.cursor/spec/waitlist-spec.template.md` → `.cursor/spec/your-product.md`
2. Fill in the spec
3. Tell the agent: **"build the waitlist"** (attach the spec)

## Key files

| Path | Role |
|------|------|
| `WAITLIST-BUILD.md` | **Main playbook** — attach this + spec every time |
| `spec/waitlist-spec.template.md` | Blank spec to fill in |
| `templates/` | Generic design, architecture, plumbing, handoff docs |
| `rules/build-waitlist.mdc` | Agent rule — triggers build workflow |
| `rules/product-landing-handoff/` | Project-specific design handoff (leadgrab example) |

## Reuse in a new repo

Copy the entire `.cursor/` folder into a new empty repo before saying "build the waitlist".

Reference implementation: [leadgrab-waitlist](https://github.com/suneuron-labs/leadgrab-waitlist)
