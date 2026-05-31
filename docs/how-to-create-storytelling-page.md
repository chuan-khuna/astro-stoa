# How to Create a Storytelling Page

A "storytelling page" is a long-form, editorially structured page — divided into named sections, each with prose and an optional interactive widget — with a table of contents, multi-locale support, and guided practice exercises. The `/stoic` page is the canonical example.

---

## What it is

A storytelling page:

- Splits content into named **sections**, each with a heading, prose, and optional interactive widget.
- Is **fully locale-separated** — all strings live in a typed data layer; no text is hardcoded in components.
- Has a **table of contents** that anchor-links to each section by `id`.

---

## Directory layout

The pattern uses four areas of the codebase. Each has a specific role:

```
src/
  pages/
    <topic>/
      index.astro           # Route entry: /topic
      th.astro              # Route entry: /topic/th (one file per locale)

  data/<topic>/
    types.ts                # ALL TypeScript interfaces for this page
    en/
      index.ts              # Assembles full content object from sibling files
      config.ts             # langSwitch, meta, header, toc
      <section-name>.ts     # One file per section, exports a typed slice
      …
    th/                     # Mirrors en/ with translated strings

  components/<topic>/
    <Topic>Page.astro       # Orchestrator: renders header, TOC, then each section
    sections/               # One component per named section
      TableOfContents.astro
      <SectionName>.astro
      …
    shared/                 # Layout components reused across multiple sections
      PracticeCard.astro    #   ↑ example from /stoic — create whatever shared components your page needs
    widgets/                # Interactive leaf components embedded inside practice steps
      CountdownTimer.astro  #   ↑ examples from /stoic — add, remove, or rename widgets freely
      TextEntry.astro
      ControlSort.astro
```

### Why this split?

| Layer                 | Responsibility        | Rule                                                        |
| --------------------- | --------------------- | ----------------------------------------------------------- |
| `pages/`              | Routing only          | Picks locale data, delegates all rendering to `<Topic>Page` |
| `data/<topic>/`       | All strings and shape | No components. No JSX. Pure typed TS objects                |
| `components/<topic>/` | All rendering         | No hardcoded strings. Everything comes from props           |

Keeping strings out of components makes the page trivially translatable and independently testable.

---

## Layer 1 — Data (`src/data/<topic>/`)

### `types.ts` — shape first

Define all interfaces here before writing any content or components. This file is the contract between the data layer and the component layer.

```ts
// src/data/<topic>/types.ts

export type TimerWidget = {
  type: "timer";
  seconds: number;
  labelStart: string;
  labelReset: string;
  labelDone: string;
};

export type TextWidget = {
  type: "text";
  placeholder: string;
  rows?: number;
};

// Union of all widget variants
export type PageWidget = TimerWidget | TextWidget;

export interface PracticeStep {
  heading: string;
  body: string;
  bullets: string[];
  widget: PageWidget;
}

export interface Practice {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: PracticeStep[];
  quote: { text: string; author: string };
}

export interface PageContent {
  langSwitch: { label: string; href: string };
  meta: { title: string; description: string };
  header: { eyebrow: string; title: string; description: string };
  toc: { label: string; href: string }[];
  // One field per section:
  intro: { heading: string; paragraphs: string[] };
  coreIdea: {
    heading: string;
    source: string;
    intro: string;
    practice: Practice;
  };
}
```

**Rules:**

- Every field in `PageContent` maps 1:1 to a section component.
- Widget variants are a TypeScript union — components dispatch on `widget.type`.
- Sections with a guided exercise carry a `practice: Practice` field.

---

### Per-locale `index.ts` — the assembler

Each locale folder has one `index.ts` that imports from sibling files and exports the complete `PageContent` object:

```ts
// src/data/<topic>/en/index.ts
import { langSwitch, meta, header, toc } from "./config";
import { intro } from "./intro";
import { coreIdea } from "./core-idea";

export const en: PageContent = {
  langSwitch,
  meta,
  header,
  toc,
  intro,
  coreIdea,
};
```

The `index.ts` contains **no string literals** — it is only an assembler.

---

### `config.ts` — page-level metadata

```ts
// src/data/<topic>/en/config.ts
export const langSwitch = { label: "ภาษาไทย", href: "/<topic>/th" };

export const meta = {
  title: "My Topic | Stoa",
  description: "…",
};

export const header = {
  eyebrow: "A Guide To",
  title: "My Topic",
  description: "…",
};

export const toc: PageContent["toc"] = [
  { label: "Introduction", href: "#intro" },
  { label: "Core Idea", href: "#core-idea" },
];
```

---

### Per-section files — one file, one typed export

Each section is its own file. It exports a single typed constant that matches the corresponding field in `PageContent`:

```ts
// src/data/<topic>/en/core-idea.ts
export const coreIdea: PageContent["coreIdea"] = {
  heading: "The Core Idea",
  source: "Source: …",
  intro: "…",
  practice: {
    eyebrow: "Practice",
    heading: "Try It Now",
    subheading: "5 minutes",
    steps: [
      {
        heading: "Step one",
        body: "…",
        bullets: ["…", "…"],
        widget: {
          type: "timer",
          seconds: 60,
          labelStart: "Start",
          labelReset: "Reset",
          labelDone: "Done",
        },
      },
    ],
    quote: { text: "…", author: "Marcus Aurelius" },
  },
};
```

Mirror this file in `th/core-idea.ts` with translated strings.

---

### HTML in strings

Some strings may contain inline HTML (`<em>`, `<span>`, `<br>`). Components render these with `set:html={…}`, not `{…}`. This is intentional — it allows rich inline formatting without MDX.

---

## Layer 2 — Components (`src/components/<topic>/`)

### `<Topic>Page.astro` — the orchestrator

This is the only component the page file renders. It receives the full `PageContent` object and wires up all sections:

```astro
---
// src/components/<topic>/<Topic>Page.astro
import type { PageContent } from "@/data/<topic>/types";
import TableOfContents from "./sections/TableOfContents.astro";
import Intro from "./sections/Intro.astro";
import CoreIdea from "./sections/CoreIdea.astro";

interface Props { content: PageContent }
const { content } = Astro.props;
---

<!-- Page header -->
<div class="border-b border-rule">
  <div class="pt-12 pb-4">
    <p>{content.header.eyebrow}</p>
    <h1>{content.header.title}</h1>
    <p>{content.header.description}</p>
    <a href={content.langSwitch.href}>{content.langSwitch.label}</a>
  </div>
</div>

<TableOfContents sections={content.toc} />

<div id="intro">
  <Intro content={content.intro} />
</div>

<div id="core-idea">
  <CoreIdea content={content.coreIdea} />
</div>
```

**Rules:**

- The `id` on each wrapping `<div>` must match the `href` value in `toc` (minus the `#`).
- The orchestrator contains no strings and no section-specific markup.

---

### `sections/` — one component per section

Each section component receives a slice of `PageContent` typed via `PageContent["sectionName"]`:

```astro
---
// src/components/<topic>/sections/CoreIdea.astro
import PracticeCard from "@/components/<topic>/shared/PracticeCard.astro";
import type { PageContent } from "@/data/<topic>/types";

interface Props { content: PageContent["coreIdea"] }
const { content } = Astro.props;
---

<section>
  <h2>{content.heading}</h2>
  <p class="text-muted">{content.source}</p>
  <p set:html={content.intro} />

  <PracticeCard practice={content.practice} />
</section>
```

A typical section renders:

1. Heading + source attribution
2. Intro prose (use `set:html` if the string may contain HTML)
3. Section-specific content layout (table, grid, list…)
4. `<PracticeCard practice={content.practice} />` — only if the section has a practice

---

### `shared/` — layout components reused across sections

Put a component in `shared/` when more than one section component renders it. The folder name signals reuse, not a specific component set — what lives here is entirely up to the page.

**Example from `/stoic`:** `PracticeCard.astro` renders the step timeline and is used by three different section components, so it lives here rather than in `sections/`.

A shared component receives a typed slice of the content object. The `/stoic` example dispatches widgets inside `PracticeCard`:

```astro
{step.widget.type === "timer"   && <CountdownTimer … />}
{step.widget.type === "text"    && <TextEntry … />}
{step.widget.type === "control" && <ControlSort … />}
```

Your page may have completely different shared components — a pull-quote block, a comparison table, a figure caption — whatever the design calls for.

---

### `widgets/` — interactive leaf components

Widgets are interactive Astro components embedded inside practice steps (or anywhere else interaction is needed). They use `<script>` blocks for client-side JS — no React, no `client:*` directive required.

The `widgets/` folder is not a fixed list. The `/stoic` page ships three:

| Component        | `type` key  | Purpose                                    |
| ---------------- | ----------- | ------------------------------------------ |
| `CountdownTimer` | `"timer"`   | Breathing / pause timer                    |
| `TextEntry`      | `"text"`    | Freeform reflection textarea               |
| `ControlSort`    | `"control"` | Drag-to-sort: in-control vs not-in-control |

Your page may need none of these, some of them, or entirely different ones. Create widgets as your content requires.

Put a component in `widgets/` when:

- It has client-side interactivity (`<script>` block)
- It maps to a specific `type` key in the data layer's widget union
- It is a leaf — it renders itself, not other section-level components

---

## Layer 3 — Page files (`src/pages/<topic>/`)

Page files are intentionally thin — one locale per file:

```astro
---
// src/pages/<topic>/index.astro
import ProseLayout from "@/layouts/ProseLayout.astro";
import TopicPage from "@/components/<topic>/<Topic>Page.astro";
import { en } from "@/data/<topic>/en";
---

<ProseLayout title={en.meta.title} description={en.meta.description} narrow={false}>
  <TopicPage content={en} />
</ProseLayout>
```

The page file only: selects the locale data and passes it to the orchestrator. All layout and rendering is delegated.

---

## Step-by-step: adding a new storytelling page

### 1. Define the shape

Create `src/data/<topic>/types.ts`. Write all interfaces. Include a `PageContent` top-level interface with one field per section.

### 2. Write the data — English first

```
src/data/<topic>/en/
  config.ts            ← langSwitch, meta, header, toc
  intro.ts             ← one export per section
  core-idea.ts
  …
  index.ts             ← assembles PageContent from the above
```

### 3. Add the Thai (or other) locale

Mirror every file under `src/data/<topic>/th/` with translated strings. Update `langSwitch.href` in both locales to point at each other.

### 4. Build the orchestrator

Create `src/components/<topic>/<Topic>Page.astro`. Import all section components and wire each to a `<div id="…">` anchor.

### 5. Build section components

One `.astro` file per section in `src/components/<topic>/sections/`. Each receives `content: PageContent["sectionName"]`.

### 6. Add shared and widget components

- Place `PracticeCard.astro` in `shared/` if it serves multiple sections.
- Place interactive widgets in `widgets/` with `<script>` blocks for JS.

### 7. Create the page routes

```
src/pages/<topic>/index.astro   → /<topic>
src/pages/<topic>/th.astro      → /<topic>/th
```

Each is ~5 lines: import layout, import orchestrator, import locale data, render.

---

## Adding a new section to an existing page

1. Add a new field to `PageContent` in `types.ts`.
2. Create `en/<section>.ts` and `th/<section>.ts` with the typed constant.
3. Import and add to `en/index.ts` and `th/index.ts`.
4. Create `sections/<Section>.astro`.
5. Add `<div id="…"><Section content={content.section} /></div>` to `<Topic>Page.astro`.
6. Add `{ label: "…", href: "#…" }` to `toc` in `config.ts` for each locale.

---

## Adding a new widget type

1. Add a new variant type (e.g. `ChecklistWidget`) to `types.ts` and add it to the `PageWidget` union.
2. Create `widgets/<Checklist>.astro` with any `<script>` block for interactivity.
3. Add a dispatch branch in `PracticeCard.astro`:
   ```astro
   {step.widget.type === "checklist" && <Checklist … />}
   ```
4. Use the new `type` key in any section data file.
