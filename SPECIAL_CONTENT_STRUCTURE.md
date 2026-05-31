# Special Content Structure

This document describes the pattern used for long-form, interactive content pages — like `/stoic` and `/stoic/th`. Use it as the reference when adding a new page of this kind.

---

## What it is

A "special content" page is a long-form editorial page that:

- Is divided into named **sections**, each with its own heading, prose, and optional interactive widget.
- Is fully **locale-separated** — all strings live in a data layer; no text is hardcoded in components.
- Has a **table of contents** that anchors to each section by `id`.
- Ends each major section with a **practice card** — a step-by-step guided exercise with an embedded widget per step.

---

## File layout

```
src/
  pages/
    stoic/
      index.astro             # thin page — picks locale data, renders StoicPage  →  /stoic
      th.astro                # same, Thai locale  →  /stoic/th

  data/stoic/
    types.ts                  # all TypeScript interfaces (StoicContent, Practice, widgets…)
    en/
      index.ts                # assembles en: StoicContent from the files below
      config.ts               # langSwitch, meta, header, toc
      what-is-stoic.ts
      dichotomy.ts
      stoic-triangle.ts
      when-frustrated.ts
      when-angry.ts
      when-task-undefined.ts
    th/                       # mirrors en/ with Thai strings

  components/stoic/
    StoicPage.astro           # orchestrator — renders header, toc, then each section
    PracticeCard.astro        # shared practice step renderer (with widget dispatch)
    sections/
      TableOfContents.astro
      WhatIsStoic.astro
      DichotomyOfControl.astro
      StoicTriangle.astro
      WhenFrustrated.astro
      WhenAngry.astro
      WhenTaskUndefined.astro
    widgets/
      CountdownTimer.astro
      TextEntry.astro
      ControlSort.astro
```

---

## Data layer (`src/data/stoic/`)

### `types.ts` — the single source of truth for shape

All interfaces live here. Nothing is inlined in component files.

Key types:

| Type           | Purpose                                                         |
| -------------- | --------------------------------------------------------------- |
| `StoicContent` | Top-level object passed from page → `StoicPage`                 |
| `Practice`     | A guided practice with `steps[]`, `eyebrow`, `heading`, `quote` |
| `PracticeStep` | One step: `heading`, `body`, `bullets[]`, `widget`              |
| `StoicWidget`  | Union: `TimerWidget \| TextWidget \| ControlSortWidget`         |

### Per-locale `index.ts`

Each locale folder has an `index.ts` that imports from sibling files and assembles the full `StoicContent` object:

```ts
export const en: StoicContent = {
  langSwitch,
  meta,
  header,
  toc,
  whatIsStoic,
  dichotomy,
  stoicTriangle,
  whenFrustrated,
  whenAngry,
  whenTaskUndefined,
};
```

### Per-section files

Each section is its own file exporting one typed constant, e.g.:

```ts
// when-frustrated.ts
export const whenFrustrated: StoicContent["whenFrustrated"] = { … }
```

Sections that include a practice card carry a `practice` field of type `Practice`, with `steps` each containing a `widget`.

### HTML in strings

Some strings contain inline HTML (`<em>`, `<span class="bg-highlight/20">`, `<br>`). Components render these with `set:html={…}`, not `{…}`. This is intentional — it allows rich inline formatting without needing MDX.

---

## Component layer (`src/components/stoic/`)

### `StoicPage.astro` — orchestrator

Receives `content: StoicContent` and renders:

1. Page header (eyebrow, title, description, lang-switch button)
2. `<TableOfContents>` (driven by `content.toc`)
3. Each section component wrapped in a `<div id="…">` anchor

```astro
<div id="when-frustrated">
  <WhenFrustrated content={content.whenFrustrated} />
</div>
```

### Section components

Each section component receives a slice of `StoicContent` (typed as `StoicContent["sectionName"]`). A typical section renders:

- Heading + source attribution
- Intro paragraph(s)
- A content-specific layout (two-column table, pillar cards, reminders grid…)
- `<PracticeCard practice={content.practice} />` (sections that have a practice)

### `PracticeCard.astro` — shared practice renderer

Receives a `Practice` object and renders a vertical step-by-step timeline. Each step is split into a 3:2 grid:

- **Left**: `heading`, `body`, `bullets[]`
- **Right**: widget, dispatched by `step.widget.type`

Widget dispatch:

```astro
{step.widget.type === "timer"   && <CountdownTimer … />}
{step.widget.type === "control" && <ControlSort … />}
{step.widget.type === "text"    && <TextEntry … />}
```

### Widgets (`widgets/`)

| Widget           | `type` key  | Purpose                                                                |
| ---------------- | ----------- | ---------------------------------------------------------------------- |
| `CountdownTimer` | `"timer"`   | Breathing/pause timer with configurable seconds and labels             |
| `TextEntry`      | `"text"`    | Freeform textarea for reflection prompts                               |
| `ControlSort`    | `"control"` | Drag-to-sort UI: items go into "in control" / "not in control" columns |

Widgets are Astro components. They use `<script>` blocks for interactivity — no React required, no `client:*` directive needed.

---

## Page file

The page itself is intentionally thin:

```astro
---
import ProseLayout from "@/layouts/ProseLayout.astro";
import StoicPage from "@/components/stoic/StoicPage.astro";
import { en } from "@/data/stoic/en";
---

<ProseLayout title={en.meta.title} description={en.meta.description} narrow={false}>
  <StoicPage content={en} />
</ProseLayout>
```

The page only: picks the locale, passes it down. All layout and section rendering is delegated to `StoicPage`.

---

## Adding a new section

1. **Define the shape** — add a new interface/field to `StoicContent` in `types.ts`.
2. **Write the data** — create `en/my-new-section.ts` (and `th/…`), export a typed constant.
3. **Register it** — import and add to `en/index.ts` (and `th/index.ts`).
4. **Build the component** — create `sections/MyNewSection.astro`, accept `content: StoicContent["myNewSection"]`.
5. **Wire it up** — add a `<div id="…"><MyNewSection content={content.myNewSection} /></div>` block in `StoicPage.astro`.
6. **Add a TOC entry** — add `{ label: "…", href: "#…" }` to the `toc` array in `config.ts` for each locale.

---

## Adding a new locale

1. Copy `en/` to the new locale folder (e.g. `ja/`), translate all strings.
2. Create a new page `src/pages/stoic/ja.astro` that imports `{ ja }` and passes it to `StoicPage`.
3. Update `langSwitch.href` in both locales to point at each other.
