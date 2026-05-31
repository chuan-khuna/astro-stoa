import type { StoicContent } from "@/data/stoic/types";

export const langSwitch: StoicContent["langSwitch"] = {
  label: "ภาษาไทย",
  href: "/stoic/th",
};

export const meta: StoicContent["meta"] = {
  title: "Stoicism — Stoa",
  description:
    "An introduction to Stoic philosophy: what it is, the dichotomy of control, the Stoic triangle, and key ideas from The Little Book of Stoicism.",
};

export const header: StoicContent["header"] = {
  eyebrow: "Philosophy",
  title: "Stoicism",
  description:
    "A guide to the ancient philosophy of living well — its foundations, its central practice, and how to apply it today.",
};

export const toc: StoicContent["toc"] = [
  { label: "What is Stoicism?", href: "#what-is-stoicism" },
  { label: "Focus on What You Control", href: "#dichotomy-of-control" },
  { label: "The Stoic Triangle", href: "#stoic-triangle" },
  { label: "When You Feel Frustrated", href: "#when-frustrated" },
  { label: "When Anger Rises", href: "#when-angry" },
  { label: "When the Task Is Not Yours to Define", href: "#when-task-undefined" },
];
