import type { StoicContent } from "@/data/stoic/types";

export const whenTaskUndefined: StoicContent["whenTaskUndefined"] = {
  heading: "When the Task Is Not Yours to Define",
  source: "On working within what is given — Epictetus, <em>Enchiridion</em>",
  intro:
    'The brief arrived late, half-formed, or contradictory. The deadline was someone else\'s emergency. You are being asked to produce something that has not been clearly described. In these moments, the frustration is real — but the Stoics would ask you to notice where it is aimed. <span class="bg-highlight/20">The definition of the task belongs to the person who gave it. Your response to the task belongs entirely to you.</span> Those two things are not the same — and conflating them is the source of most of the suffering.',
  reminders: [
    {
      label: "The brief is not in your control",
      detail:
        "Who scopes the work, how clearly, and with what urgency — these belong to someone else. Resenting the brief is resenting a fact. Accept it as your starting condition.",
    },
    {
      label: "Your execution is",
      detail:
        "What you do with what you have been given is entirely yours. The quality of your judgment, your effort, and your output belong to you regardless of how the task arrived.",
    },
    {
      label: "Confusion is not failure",
      detail:
        "Receiving an unclear task does not mean you have done something wrong. It means the system around you is imperfect. Most systems are.",
    },
    {
      label: "One clarification beats ten complaints",
      detail:
        "If something must be known before you can begin, ask one sharp question. Not a list of objections — one question. Then act on the answer.",
    },
  ],
  practice: {
    eyebrow: "PRACTICE",
    heading: "A practice for this moment",
    subheading: "Step by step",
    steps: [
      {
        heading: "Write down what you actually know",
        body: "Before reaching for what is missing, take inventory of what is already in hand. Vague briefs often contain more than they appear to. Put it into plain words: what has been asked for, by when, and for whom. You may find the picture is clearer than it felt.",
        bullets: [
          "Write the task as you understand it — not as you wish it had been given.",
          "Note what is definite: the deadline, the format, the audience.",
          "Leave blanks where things are genuinely unknown. You will return to them.",
        ],
        widget: { type: "text", placeholder: "What do I actually know about this task?", rows: 3 },
      },
      {
        heading: "Separate the task from the brief",
        body: "The brief is a description of what is wanted. The task is what actually needs to exist at the end. These are often different things. A confused brief can still point to a clear task — if you are willing to define it yourself. That is not overstepping. It is what good work requires.",
        bullets: [
          "What is the real output? A document, a decision, a recommendation?",
          "Who will use it, and what do they need it to do?",
          "Strip away the noise. What is the simplest true version of this task?",
        ],
        widget: { type: "text", placeholder: "What is the actual task beneath the brief?" },
      },
      {
        heading: "Ask one question, not ten",
        body: "If something critical is missing, identify the single most important unknown — the one that, if answered, makes everything else followable. One precise question signals competence. A list of questions signals that you have not yet done the thinking yourself.",
        bullets: [
          "What is the one thing I cannot responsibly assume?",
          "Frame it as a yes/no or a choice between two options where possible.",
          "Ask it and move on. Do not wait for a perfect answer.",
        ],
        widget: { type: "text", placeholder: "What is the one thing I need to know?" },
      },
      {
        heading: "Define your own standard for done",
        body: "When no one has defined success clearly, define it yourself. This is not presumptuous — it is the only way to work when clarity does not arrive from outside. Write a single sentence that describes what good looks like. Commit to it. Adjust only if you learn something that changes the picture.",
        bullets: [
          "What would I be proud to hand over at the end of this?",
          "What would a reasonable person consider complete?",
          "Write it down so you can check against it later.",
        ],
        widget: { type: "text", placeholder: "What does done look like for this task?" },
      },
      {
        heading: "Begin with what you have",
        body: "Waiting for the brief to improve is waiting for something not in your control. The Stoics placed great weight on action — not reckless action, but the next right move with the information available. Begin now. You will learn more from doing than from waiting.",
        bullets: [
          "What is the first thing I can actually produce in the next thirty minutes?",
          "Start there. Not at the beginning — at what is possible right now.",
          "Let the work reveal what you still need to know.",
        ],
        widget: { type: "timer", seconds: 1800, labelStart: "Start 30 min", labelReset: "Reset", labelDone: "Done" },
      },
    ],
    quote: {
      text: "Do not seek for things to happen the way you want them to; but wish that what happens will happen the way it is, and you will have a tranquil flow of life.",
      author: "Epictetus, <em>Enchiridion</em> §8",
    },
  },
};
