# Notes collection reference

**Definition:** `src/collection-definitions/note.ts`
**Content folder:** `src/content/notes/`
**Registered in:** `src/content.config.ts`

## Frontmatter schema

| Field     | Type       | Required | Description                                      |
| --------- | ---------- | -------- | ------------------------------------------------ |
| `title`   | `string`   | yes      | Display title of the note                        |
| `date`    | `date`     | yes      | Publication date; used for sorting               |
| `tags`    | `string[]` | no       | Freeform tags for browsing/filtering             |
| `excerpt` | `string`   | no       | Short preview for listings and meta description  |
| `draft`   | `boolean`  | no       | When `true`, hidden from listings                |

## Body

Prose MDX — reflections, essays, short writings. No wrapper needed.

## Example

```mdx
---
title: "On stillness"
date: 2026-05-30
tags: [reflection, attention]
excerpt: "A short description shown in listings and meta tags."
draft: false
---

The body of the note goes here as MDX.
```

## File naming

Each note lives in its own folder: `src/content/notes/<slug>/index.mdx`

Example: `src/content/notes/on-stillness/index.mdx`
