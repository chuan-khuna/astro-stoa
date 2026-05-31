import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const langSwitch: StoicAtWorkContent["langSwitch"] = {
  label: "ภาษาไทย",
  href: "/stoic-at-work/th",
};

export const meta: StoicAtWorkContent["meta"] = {
  title: "Stoic at Work — Stoa",
  description:
    "Four recurring problems a working programmer faces — impossible briefs, work larger than the team, overpromising management, and shrinking returns — read through Stoic philosophy. Not about staying calm; about seeing clearly, then deciding.",
};

export const header: StoicAtWorkContent["header"] = {
  eyebrow: "Philosophy at Work",
  title: "Stoic at Work",
  description:
    "For the programmer who works hard, ships daily, and keeps meeting the same four problems. This is not about being calm. It is about having a clear mind when things are unfair — so you can act well, protect yourself, and know when enough is enough.",
};

export const toc: StoicAtWorkContent["toc"] = [
  { label: "You Are Not Imagining It", href: "#intro" },
  { label: "The 6-Hour Brief", href: "#fast-brief" },
  { label: "Work Larger Than the Team", href: "#impossible" },
  { label: "When They Promise, You Pay", href: "#boast" },
  { label: "When Work Costs More Than It Returns", href: "#cost" },
  { label: "After the Deadline", href: "#recovery" },
];
