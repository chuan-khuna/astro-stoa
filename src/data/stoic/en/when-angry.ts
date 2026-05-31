import type { StoicContent } from "@/data/stoic/types";

export const whenAngry: StoicContent["whenAngry"] = {
  heading: "When Anger Rises",
  source: "On anger and its antidotes — Seneca, <em>De Ira</em> (On Anger)",
  intro:
    'Seneca devoted an entire treatise to anger — a sign of how seriously the Stoics took it. His conclusion: <span class="bg-highlight/20">anger is never useful, never righteous, and always costs you more than whatever triggered it. It does not punish the person who wronged you; it punishes you first.</span> The Stoic goal is not to suppress anger but to dissolve it at its source — the judgment that harm was done and retaliation is owed.',
  insights: [
    {
      label: "Anger is a judgment",
      detail:
        "It begins with the belief that a wrong was done and retaliation is deserved. Both beliefs can be questioned before you act on them.",
    },
    {
      label: "You are not your anger",
      detail:
        "The feeling arose in you — it is not you. There is a gap between the impulse and the response. That gap is where your character lives.",
    },
    {
      label: "Delay is the cure",
      detail:
        "Seneca's single most repeated advice: wait. Even a brief pause breaks the momentum. Anger fed immediately grows; anger paused almost always shrinks.",
    },
    {
      label: "Consider the other person",
      detail:
        "They acted from their own fears, history, or misunderstanding. So do you. Understanding does not excuse — but it frees you from needing to punish.",
    },
  ],
  practice: {
    eyebrow: "PRACTICE",
    heading: "A practice for this moment",
    subheading: "Step by step",
    steps: [
      {
        heading: "Do not act yet",
        body: "Seneca's first and most urgent instruction: do nothing. Not because the anger is wrong, but because action taken at peak anger almost always makes the situation worse — and harder to repair. Your only goal right now is to avoid doing anything that cannot be undone.",
        bullets: [
          "Do not send the message. Do not make the call.",
          "Do not walk into the room ready to argue.",
          "Let the urge to act pass before you do anything.",
        ],
        widget: { type: "timer", seconds: 120, labelStart: "Start", labelReset: "Reset", labelDone: "Done" },
      },
      {
        heading: "Step away if you can",
        body: "Physical proximity to the source of anger keeps the nervous system activated. Even a brief change of environment — another room, outside, a short walk — breaks the sensory loop and lets the body begin to cool. You are not avoiding the problem; you are creating conditions where you can address it well.",
        bullets: [
          "Walk slowly, not urgently. Speed feeds the agitation.",
          "Avoid replaying the scene in your head as you walk.",
          "Notice what you see and hear around you instead.",
        ],
        widget: { type: "timer", seconds: 180, labelStart: "Start", labelReset: "Reset", labelDone: "Done" },
      },
      {
        heading: "Name what you believe happened",
        body: "Anger is always based on a story — a belief about what was done, by whom, and with what intention. That story may be accurate or it may not. Write it out without self-censorship. You are not looking for fairness yet; you are making the belief visible so it can be examined.",
        bullets: [
          "Who did what? What do you believe their intention was?",
          "What does this mean about you, them, or the relationship?",
        ],
        widget: { type: "text", placeholder: "What do I believe happened, and why?" },
      },
      {
        heading: "Question the belief",
        body: "The Stoics held that anger begins in a judgment: that a wrong was done and punishment is owed. Both parts are worth examining. The wrong may be real but smaller than it feels. The desire to punish may be doing more harm than the original act.",
        bullets: [
          "Is this the only possible interpretation of what happened?",
          "What would a neutral observer think?",
          "What changes if I am partially or entirely wrong?",
        ],
        widget: { type: "text", placeholder: "Is it true? Is there another explanation?" },
      },
      {
        heading: "Choose your response",
        body: "This is where the Stoic practice becomes active. You have examined the anger, found what is real, and now you choose what to do with it. A response chosen from reason serves the situation. A reaction driven by anger usually serves only the feeling.",
        bullets: [
          "What outcome do I actually want from this?",
          "What response is most likely to produce it?",
          "What would I say if I wanted to repair rather than win?",
        ],
        widget: {
          type: "text",
          placeholder: "How will I respond — from reason, not reaction?",
          rows: 2,
        },
      },
    ],
    quote: {
      text: "The greatest remedy for anger is delay.",
      author: "Seneca, <em>De Ira</em> II.29",
    },
  },
};
