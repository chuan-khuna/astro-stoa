import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const boast: StoicAtWorkContent["boast"] = {
  heading: "When They Promise, You Pay",
  source: "On keeping your self-respect — Marcus Aurelius, <em>Meditations</em>",
  epigraph: {
    text: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
    author: "Marcus Aurelius, <em>Meditations</em>",
  },
  situationLabel: "The situation",
  situation: [
    "You are in a meeting, or you hear it secondhand. A manager describes work that has not been done, capabilities the team does not have, timelines that are not possible. They say it with confidence. The client believes them. And you sit quietly, already calculating what this means for the next three months of your life.",
    'This is one of the most corrosive experiences in a workplace — <span class="bg-highlight/20">watching promises be made in your name, by people who will not be held to them.</span>',
  ],
  howToThinkLabel: "How to think about it",
  howToThink: [
    "You cannot control what others say. You cannot reach into a room and stop a claim from being made. What you can control is what you build, how you build it, and what you are willing to put your name on.",
    "Epictetus was direct: the opinions and actions of others are not in your power. What is in your power is your own response — not passive acceptance, but a clear separation between their words and your work.",
    'This does not mean staying silent. When a promise is made that affects your work, you have the right to ask, in writing: <em>"What are the requirements for this? What is the timeline? Who owns what?"</em> Not to sabotage — to make the gap visible before it becomes your problem alone.',
  ],
  whatToDoLabel: "What to do",
  whatToDo: {
    intro: "When you hear an overpromise:",
    bullets: [
      "Write it down: what was said, when, to whom.",
      'Then ask one clarifying question in writing: <em>"Can you help me understand what the scope and timeline look like from your side?"</em>',
      "This starts a record. It also sometimes stops the problem before it starts.",
    ],
  },
  practice: {
    eyebrow: "PRACTICE",
    heading: "Three minutes on the promise",
    subheading: "Timer — 3 minutes",
    steps: [
      {
        heading: "Write down the promise you will be the one to keep",
        body: "Set the timer and write without stopping for three minutes. Pick one promise that was made recently — by someone else, about your work. Do not argue with it or rehearse a confrontation. Just look at it clearly: what was promised, and what it would actually take to deliver.",
        bullets: [
          "What exactly was promised, and by whom?",
          "What would it genuinely take to deliver it — time, people, decisions?",
          "What is the honest gap between the promise and what is possible?",
        ],
        widget: {
          type: "timer",
          seconds: 180,
          labelStart: "Start",
          labelReset: "Reset",
          labelDone: "Done",
        },
      },
    ],
    quote: {
      text: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
      author: "Marcus Aurelius, <em>Meditations</em>",
    },
  },
};
