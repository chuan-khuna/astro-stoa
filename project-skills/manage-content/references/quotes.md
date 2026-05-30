# Quotes collection reference

**Definition:** `src/collection-definitions/quote.ts`
**Content folder:** `src/content/quotes/`
**Registered in:** `src/content.config.ts`

## Frontmatter schema

All fields are optional.

| Field     | Type       | Description                                                          |
| --------- | ---------- | -------------------------------------------------------------------- |
| `author`  | `string`   | Who said or wrote the quote                                          |
| `source`  | `string`   | Book, speech, interview, etc.                                        |
| `tags`    | `string[]` | Freeform tags for browsing/filtering                                 |
| `excerpt` | `string`   | Short display text for cards; falls back to truncated body if absent |

## Body

The full quote text in plain Markdown. No wrapper needed.

## Example

```md
---
author: "Marcus Aurelius"
source: "Meditations"
tags: [stoicism, resilience]
excerpt: "You have power over your mind, not outside events."
---

You have power over your mind, not outside events.
Realize this, and you will find strength.
```

## File naming

Use `kebab-case` slugs. Convention: `<author-lastname>-<first-few-words>.md`

Example: `marcus-aurelius-power-over-mind.md`
