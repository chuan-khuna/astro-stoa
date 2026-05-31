import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const recovery: StoicAtWorkContent["recovery"] = {
  heading: "After the Deadline",
  source: "On time as the only thing truly yours — Seneca, <em>Letters</em>",
  epigraph: {
    text: "Begin at once to live, and count each separate day as a separate life.",
    author: "Seneca, <em>Letters</em>",
  },
  situationLabel: "The situation",
  situation: [
    "The day ends. The site is live, or it isn't. The meeting is over. The overpromise is made. The insurance is still cancelled.",
    "You are tired. The unfairness has not disappeared just because the clock ran out.",
  ],
  howToThinkLabel: "How to think about it",
  howToThink: [
    "Seneca wrote about time as the only thing truly yours. Not money, not recognition, not the outcome of decisions other people made — time. And <span class=\"bg-highlight/20\">each day is its own life.</span> What happened today does not have to be the shape of tomorrow.",
    "The Stoic practice here is not forgetting. It is resetting. You note what happened. You note what you will do differently. Then you put today down — not because it did not matter, but because carrying it into tomorrow helps no one, least of all you.",
  ],
  whatToDoLabel: "What to do",
  whatToDo: {
    intro: "Before closing your laptop:",
    bullets: [
      "Write one sentence: <em>\"Tomorrow, I will protect [one specific thing] that I did not protect today.\"</em>",
      "Not a system. Not a policy. One thing.",
    ],
  },
  practice: {
    eyebrow: "PRACTICE",
    heading: "Put today down",
    subheading: "Text reflection",
    steps: [
      {
        heading: "What would tomorrow look like if today's weight did not carry forward?",
        body: "Resetting is not pretending the day was fine. It is choosing not to begin tomorrow already exhausted by it. Write one honest line about what you will protect tomorrow — one specific thing, not a resolution to fix everything. Then close the laptop and let the rest of today stay in today.",
        bullets: [
          "What is the one thing you did not protect today?",
          "What would it look like to protect just that, tomorrow?",
          "What can you set down right now, instead of carrying it overnight?",
        ],
        widget: {
          type: "text",
          placeholder:
            "Tomorrow, I will protect ______ that I did not protect today.",
          rows: 3,
        },
      },
    ],
    quote: {
      text: "Begin at once to live, and count each separate day as a separate life.",
      author: "Seneca, <em>Letters</em> 101",
    },
  },
};
