import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const impossible: StoicAtWorkContent["impossible"] = {
  heading: "Work Larger Than the Team",
  source: "On deliberation and commitment — Epictetus, <em>Discourses</em>",
  epigraph: {
    text: "First, never commit to things without deliberation. Second, keep your commitments.",
    author: "Epictetus, <em>Discourses</em>",
  },
  situationLabel: "The situation",
  situation: [
    "Some work is designed to be unfinishable. It arrives as a large, ambitious brief — the kind that sounds impressive in a meeting. The team takes it on. It does not get done. And then, months or years later, it comes back. The same project, resold, re-briefed, handed to whoever is available.",
    "You recognize it when you see it. You have probably been inside it before.",
  ],
  howToThinkLabel: "How to think about it",
  howToThink: [
    "This pattern has a name in Stoic terms: it is the confusion between <em>preferred indifferents</em> — things that look like progress, a big project, a new client, a bold vision — and the actual work of keeping commitments with integrity.",
    'Organizations sometimes build their identity around the scale of what they promise, not the quality of what they deliver. <span class="bg-highlight/20">The programmer in this system is not failing. They are trying to carry something that was never structurally designed to be finished.</span>',
    "<em>Premeditatio malorum</em> — the Stoic practice of imagining difficulties before they arrive — applies here. When the brief is large and the team is small, name that gap early, explicitly, in writing. Not to protect yourself politically. To be honest about what is possible.",
  ],
  whatToDoLabel: "What to do",
  whatToDo: {
    bullets: [
      "When a large brief arrives, write down what would need to be true for it to succeed: team size, timeline, dependencies, unknowns.",
      "Share that list before the work starts. Once. In writing.",
      "This does not mean the situation will change. But it means you acted with integrity, and you have a record that you did.",
    ],
  },
  practice: {
    eyebrow: "PRACTICE",
    heading: "Name the gap",
    subheading: "Text reflection",
    steps: [
      {
        heading: "Describe a project that felt too large from the start",
        body: "The hardest part of an unfinishable project is that everyone could feel it from the beginning, and no one said it. Writing it down now — even after the fact — trains you to name the gap earlier next time, when naming it can still change something.",
        bullets: [
          "What did the brief promise, and to whom?",
          "What would have had to be true — people, time, scope — for it to actually land?",
          "What did you know on day one that no one said out loud?",
        ],
        widget: {
          type: "text",
          placeholder:
            "What did you know then that no one said out loud?",
          rows: 4,
        },
      },
    ],
    quote: {
      text: "First, never commit to things without deliberation. Second, keep your commitments.",
      author: "Epictetus, <em>Discourses</em>",
    },
  },
};
