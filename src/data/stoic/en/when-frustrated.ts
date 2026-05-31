import type { StoicContent } from "@/data/stoic/types";

export const whenFrustrated: StoicContent["whenFrustrated"] = {
  heading: "When You Feel Frustrated",
  source: "On irritation and unmet expectations — Marcus Aurelius, <em>Meditations</em>",
  intro:
    'Frustration is almost always a collision between what you expected and what actually happened. The Stoics noticed that we rarely get frustrated at things themselves — <span class="bg-highlight/20">we get frustrated at our picture of how things <em>should</em> have gone.</span> That picture is entirely in your mind, and it can be revised. The situation remains; your grip on a particular outcome does not have to.',
  reminders: [
    {
      label: "Check your expectations",
      detail:
        "Frustration is the gap between what you expected and what happened. The event did not fail you — the expectation may have been unrealistic.",
    },
    {
      label: "Locate the judgment",
      detail:
        "Nothing is frustrating by nature. Your mind has judged it so. That judgment can be examined, and changed.",
    },
    {
      label: "Return to what you can do",
      detail:
        "When a path is blocked, a Stoic looks for the next action. Obstacle becomes redirection, not defeat.",
    },
    {
      label: "Let imperfection stand",
      detail:
        "Not everything will go smoothly. Expecting otherwise is the source of the friction, not the thing itself.",
    },
  ],
  practice: {
    eyebrow: "PRACTICE",
    heading: "A practice for this moment",
    subheading: "Step by step",
    steps: [
      {
        heading: "Pause",
        body: "The moment frustration rises, your brain shifts into a reactive mode — thoughts accelerate, the body tenses, and you become more likely to say something you will regret. The only way to interrupt this is to physically stop. Not slow down, but stop completely.",
        bullets: [
          "Stop moving. Put down what you are holding.",
          "Take one slow breath from the belly, not the chest.",
          "Feel your feet on the floor. Notice the weight of your body.",
        ],
        widget: { type: "timer", seconds: 60, labelStart: "Start", labelReset: "Reset", labelDone: "Done" },
      },
      {
        heading: "Name what you expected",
        body: "Frustration rarely makes its cause explicit — you feel it without having articulated the expectation that was violated. Naming it forces a confrontation: was this expectation reasonable in the first place? Was it yours to hold?",
        bullets: [
          "Be specific — not \"things to go well\" but exactly what you pictured.",
          "Whose behaviour were you counting on? What outcome did you assume?",
        ],
        widget: { type: "text", placeholder: "What did I expect to happen?" },
      },
      {
        heading: "Name what actually happened",
        body: "Strip the event down to facts — no interpretation, no blame, no story. Just what occurred. This is harder than it sounds; the mind immediately wraps events in meaning. Try to describe it as a camera would record it.",
        bullets: [
          'Use plain language. Leave out words like "unfair", "as usual", "always".',
          "Just: what happened, when, and who was involved.",
        ],
        widget: { type: "text", placeholder: "What actually happened — just the facts?" },
      },
      {
        heading: "Ask: was that expectation mine to hold?",
        body: “Many expectations are borrowed — from social norms, from how things \”should\” work, from past patterns. Some were never realistic. Others were placed on things entirely outside your control. This question cuts to the root.”,
        bullets: [
          "Was this outcome within someone else's control, not yours?",
          "Were you counting on a person to act against their nature?",
          "Did you expect certainty in a situation that was never certain?",
        ],
        widget: {
          type: "text",
          placeholder: "Was this expectation realistic? Was it within my control?",
          rows: 3,
        },
      },
      {
        heading: "Find the next open action",
        body: "Once you have released the expectation, attention can move to what is actually available. There is almost always something — even if it is only to sit with the discomfort, or to accept that this is how it is for now.",
        bullets: [
          "What is one thing I can do in the next ten minutes?",
          "If nothing — what can I let go of right now?",
          "What would I advise a close friend to do in this situation?",
        ],
        widget: { type: "text", placeholder: "What can I actually do from here?", rows: 2 },
      },
    ],
    quote: {
      text: "The impediment to action advances action. What stands in the way becomes the way.",
      author: "Marcus Aurelius, <em>Meditations</em> V.20",
    },
  },
};
