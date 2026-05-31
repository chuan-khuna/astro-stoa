import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const fastBrief: StoicAtWorkContent["fastBrief"] = {
  heading: "The 6-Hour Brief",
  source: "On what is in your power — Epictetus, <em>Enchiridion</em>",
  epigraph: {
    text: "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus, <em>Enchiridion</em>",
  },
  situationLabel: "The situation",
  situation: [
    'It is 11:30. A message arrives: <em>"Can you copy this site and get it live by 6?"</em> No context. No discussion. Just a deadline that someone else set for your time.',
    'The LLM era has made this worse. The assumption is now explicit: AI is fast, therefore you are fast, therefore six hours is enough. <span class="bg-highlight/20">No one mentions the decisions inside the brief</span> — architecture, edge cases, what breaks in production next week, who owns it when something goes wrong.',
  ],
  howToThinkLabel: "How to think about it",
  howToThink: [
    "A language model autocompletes. A developer decides. Those are different jobs.",
    "The anger you feel is proportionate. You are being treated as though your judgment does not exist. The Stoic response is not to suppress that anger — it is to use it as information, then turn toward what you can actually act on.",
  ],
  whatToDoLabel: "What to do",
  whatToDo: {
    intro: "When the brief is unrealistic, say so clearly, once:",
    template:
      'I can have <em>[X]</em> done by 6. To do the full brief well, I would need until <em>[realistic time]</em>. Which do you want?',
    outro:
      "No apology. No lengthy explanation. You have stated reality, offered a choice, and returned the decision to where it belongs. Then you do your best work with the time that remains.",
  },
  practice: {
    eyebrow: "PRACTICE",
    heading: "Name the brief",
    subheading: "Text reflection",
    steps: [
      {
        heading: "Describe the last brief like this",
        body: "Before you can answer a brief well, you have to see what it actually asked of you — and, more importantly, what it silently assumed. The assumption is usually about your time: that it is infinite, interruptible, and free. Naming the assumption is the first step to declining it.",
        bullets: [
          "What did it ask for, in plain terms?",
          "What did it assume about your time, your tools, your judgment?",
          "What decision inside the brief was handed to you without being named?",
        ],
        widget: {
          type: "text",
          placeholder:
            "What did the last brief ask? What did it assume about your time?",
          rows: 4,
        },
      },
    ],
    quote: {
      text: "Make the best use of what is in your power, and take the rest as it happens.",
      author: "Epictetus, <em>Enchiridion</em> 1",
    },
  },
};
