# CLAUDE.md

## Project

Stoa is a curated Stoic quotes site — a place to browse and discover meaningful quotes from Stoic philosophy. It is designed for readers who want to encounter well-chosen words without noise.

The site uses a content collection for quotes as its core data model, with a potential blog section in the future. The design direction favors typographic clarity and calm reading over visual complexity.

## Tech stack

- **Astro** — static site generation, routing, and content collections
- **Tailwind CSS** — all styling; no custom CSS unless Tailwind cannot cover it
- **shadcn/ui** — React UI components (requires `client:*` directives in `.astro` files)
- **TypeScript (strict)** — enforced across all source files via `astro/tsconfigs/strict`

---

## Commands

Use `bun` as the package manager (preferred). Dev server runs at `localhost:4321`.

---

## Adding shadcn components

shadcn/ui requires the `@astrojs/react` integration and `tailwindcss`. Add components via:

```bash
bunx shadcn@latest add <component>
```

Components land in `src/components/ui/`. Import them in `.astro` files using the `client:load` (or `client:visible`) directive since they are React components.

---

## Import alias

Always use the `@/` alias instead of relative paths. The alias maps to `src/` and is configured in both `tsconfig.json` and `astro.config.mjs`.

```ts
// ✅ correct
import { QuoteCard } from "@/components/QuoteCard";
import { cn } from "@/lib/utils";

// ❌ avoid
import { QuoteCard } from "../../../components/QuoteCard";
```

This applies to `.astro`, `.tsx`, `.ts` — all source files.

---

## Architecture

```
src/
  pages/
    index.astro                     # home page — quote listing
  layouts/
    Layout.astro                    # root HTML shell (<html>, <head>, global meta)
  components/
    ui/                             # shadcn/ui components
  lib/
    utils.ts                        # cn() and other shared utilities
  collection-definitions/
    quote.ts                        # quotes collection schema
  content.config.ts                 # imports all definitions, exports { collections }
  content/
    quotes/                         # .md / .mdx quote files
  data/                             # static config (e.g. site.ts)
public/                             # static assets served at /
```

---

## File & folder naming

| What                     | Format       | Examples                      |
| ------------------------ | ------------ | ----------------------------- |
| Astro / React components | `PascalCase` | `Hero.astro`, `QuoteCard.tsx` |
| Pages                    | `kebab-case` | `index.astro`, `[slug].astro` |
| Lib / utility files      | `kebab-case` | `utils.ts`, `format-date.ts`  |
| Data / config files      | `kebab-case` | `site.ts`, `quote-tags.ts`    |

---

## Content collections

### Naming convention

Definition file is **singular**; exported variable and content folder are **plural**:

```
quote.ts  →  export const quotes  →  src/content/quotes/
```

### Structure

```
src/
  collection-definitions/
    quote.ts
  content.config.ts         # imports all definitions, exports { collections }
  content/
    quotes/                 # .md / .mdx files
```

`content.config.ts` is kept thin — only imports and re-exports:

```ts
import { quotes } from "@/collection-definitions/quote";

export const collections = { quotes };
```

When adding a new collection: create the definition file, add the content folder, then register in `content.config.ts`.

**Documentation rule:** Whenever you change `src/collection-definitions/**` or `src/data/**`, update the matching reference doc in `project-skills/manage-content/references/<topic>.md`. A task is not complete until the reference docs are in sync.

---

## Fonts

**Font loading:** Astro Font API (`astro.config.mjs` → `fonts[]` with `fontProviders.google()`) + `FontLoader.astro` injected in `Layout.astro` `<head>`. CSS variables follow the `--font-<kebab-name>` convention (e.g. `--font-lato`).

Do **not** add Google Fonts `@import` to CSS — configure new fonts in `astro.config.mjs` and add a `<Font cssVariable="..." />` entry in `src/components/FontLoader.astro`.

Fonts in use:

---

## Styling

- Use **Tailwind** for all styling. Do not write custom CSS unless Tailwind cannot cover it.
- Define brand colours in `tailwind.config.*` rather than hardcoding hex values in class names.
- Use `cn()` from `@/lib/utils` for conditional or overridden class names.

---

## Troubleshooting display and animation issues

When animations, visual effects, or interactive behavior don't work, the cause is often Astro's default static rendering — React components render to HTML on the server and ship no JS unless a `client:*` directive is present.

| Directive             | When JS loads                  | Use for                                  |
| --------------------- | ------------------------------ | ---------------------------------------- |
| `client:load`         | Immediately on page load       | Above-the-fold interactive components    |
| `client:idle`         | When browser is idle           | Non-critical UI                          |
| `client:visible`      | When component enters viewport | Below-the-fold animations / effects      |
| `client:only="react"` | Immediately, skips SSR         | Components using `window`, WebGL, canvas |

If an animation works in isolation but breaks on the site, first check whether the component has the right `client:*` directive.

---

## Content management skill for LLM agent

**Purpose:** Guide for adding or updating site content.

Before adding, editing, or restructuring any content (collection definitions, data files, static config), read the skill file first:

```
project-skills/manage-content/SKILL.md
```

That file is the single source of truth for collection schemas, content formats, and doc-sync rules. It also acts as a routing table — pointing the agent to the correct reference doc for each collection or config.

Reference docs live alongside the skill at `project-skills/manage-content/references/<topic>.md` — where `<topic>` matches the collection or config it describes (e.g. `quotes.md`, `site-config.md`). Whenever you change `src/collection-definitions/**` or `src/data/**`, update the matching reference doc. A task touching content is not complete until the skill and its reference docs are in sync.

---

## Special directories

`project-skills/` is a living, in-repo skill folder. Skills here are the authoritative version for this project and are updated alongside the codebase.

To install or re-install the latest skill versions into Claude Code:

```bash
bunx skills@1.5.0 add ./project-skills -a 'universal' -a 'claude-code' -y -p
```

Run this after pulling changes that touched `project-skills/` so the agent uses the latest skill definitions.

---

Artifacts produced during AI-assisted sessions are stored under:

```
docs/<type>/yyyy-mm-dd-<topic>.md
```

The `<type>` folder is not limited to a fixed list — use whatever noun best describes the artifact. Common types include `prd`, `plan`, `research`, and `design`, but create new type folders as needed. Do not place artifacts directly in `docs/`.

---

## Deployment

Cloudflare Pages via `@astrojs/cloudflare`. Push to `main` triggers deploy.
