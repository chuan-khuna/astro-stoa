import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const cost: StoicAtWorkContent["cost"] = {
  heading: "When Work Costs More Than It Returns",
  source: "On the wisdom to avoid — Seneca, <em>Letters</em>",
  epigraph: {
    text: "It is not that I am brave enough to endure it, but that I am wise enough to avoid it.",
    author: "Seneca, <em>Letters</em>",
  },
  situationLabel: "The situation",
  situation: [
    "You have been working hard. Longer hours. More complexity. More responsibility transferred downward. And somewhere in the last year or two, the returns started moving in the opposite direction — lower real compensation, insurance cancelled, benefits quietly removed, health worn down in ways that take longer to recover from each time.",
    'This is not a personal failure. It is an accounting problem. <span class="bg-highlight/20">The inputs are going up. The outputs are going down.</span> And at some point, that equation has a limit.',
  ],
  howToThinkLabel: "How to think about it",
  howToThink: [
    "Stoicism is not endurance without end. Seneca wrote repeatedly about the cost of staying too long in situations that extract more than they return. Marcus Aurelius stepped back from commitments that were not his to carry. Epictetus — who was enslaved, and could not simply leave — still argued that internal freedom was the line worth protecting at all cost.",
    "For a programmer with choices, Stoicism asks you to be honest with yourself about the accounting. Not to dramatize it, not to catastrophize — but to see it clearly. <em>What is this costing me? What am I getting? Is that exchange sustainable?</em>",
    "Call this the honest audit. Not a complaint. Not a resignation letter. A clear-eyed look at whether the arrangement you are in still makes sense.",
  ],
  whatToDoLabel: "What to do",
  whatToDo: {
    bullets: [
      "Write down what you are giving: hours, health, expertise, stability.",
      "Write down what you are receiving: compensation, growth, respect, security.",
      "If the two columns are badly misaligned, that is not a feeling. It is a fact. And facts can inform decisions.",
    ],
    outro:
      "This section does not tell you to stay or leave. It says: look clearly. Then decide from that clarity, not from exhaustion or inertia.",
  },
  practice: {
    eyebrow: "PRACTICE",
    heading: "The honest audit",
    subheading: "Text reflection",
    steps: [
      {
        heading: "What is this work costing you that does not show up in your job description?",
        body: "The official cost of a job is in the contract: hours, salary, title. The real cost is rarely written anywhere — sleep, attention, the people you stopped seeing, the health you keep promising to get back to. Name it plainly. You are not deciding anything yet; you are just refusing to pretend the cost is zero.",
        bullets: [
          "What are you spending that no one is counting?",
          "What did you used to have — energy, focus, time — that this work has quietly taken?",
          "If the cost stayed exactly this high for another year, would the exchange still make sense?",
        ],
        widget: {
          type: "text",
          placeholder:
            "What is this work costing you that does not show up in your job description?",
          rows: 4,
        },
      },
    ],
    quote: {
      text: "It is not that I am brave enough to endure it, but that I am wise enough to avoid it.",
      author: "Seneca, <em>Letters</em>",
    },
  },
};
