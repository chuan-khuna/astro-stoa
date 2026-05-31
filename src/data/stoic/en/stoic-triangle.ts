import type { StoicContent } from "@/data/stoic/types";

export const stoicTriangle: StoicContent["stoicTriangle"] = {
  heading: "The Stoic Happiness Triangle",
  source: "Jonas Salzgeber — <em>The Little Book of Stoicism</em>",
  intro:
    "Salzgeber distils the entire practice of Stoicism into a single diagram: a triangle whose three sides support one goal at the centre — <em>Eudaimonia</em>, a flourishing life. Each side is a principle you can act on today.",
  svgLabels: {
    topVertex: "Live with Arete",
    bottomRightLine1: "Focus on What",
    bottomRightLine2: "You Control",
    bottomLeftLine1: "Take",
    bottomLeftLine2: "Responsibility",
    centre: "EUDAIMONIA",
    centreItalic: "a flourishing life",
  },
  pillars: [
    {
      number: "01",
      label: "Live with Arete",
      sub: "Excellence / Virtue",
      description:
        "Express the best version of yourself in every moment. Arete is the Greek word for excellence — it means acting from virtue rather than appetite or habit. The Stoics identified four cardinal virtues as the cornerstones of a well-lived life.",
      virtues: [
        { name: "Wisdom", detail: "Knowing how to live well and make good judgements in any situation." },
        { name: "Courage", detail: "Taking right action despite fear, discomfort, or opposition." },
        { name: "Justice", detail: "Acting fairly and with genuine care toward others." },
        { name: "Temperance", detail: "Mastering your desires; living with self-discipline and moderation." },
      ],
      note: null,
      quote: {
        text: "Waste no more time arguing what a good man should be. Be one.",
        author: "Marcus Aurelius, Meditations X.16",
      },
    },
    {
      number: "02",
      label: "Focus on What You Control",
      sub: "Selective Focus",
      description:
        "Accept external circumstances as they come, and direct your energy only toward your own actions. You cannot control weather, traffic, or other people's opinions. You can control your thoughts, judgements, and responses. Letting go of what lies outside your power frees you from needless frustration.",
      virtues: [],
      note: "This pillar maps directly to the Dichotomy of Control — the most foundational practice in Stoic philosophy. See the section above for a full breakdown.",
      quote: {
        text: "Make the best use of what is in your power, and take the rest as it happens.",
        author: "Epictetus, Enchiridion §15",
      },
    },
    {
      number: "03",
      label: "Take Responsibility",
      sub: "For your mental state",
      description:
        "Recognise that you choose how you react to external events. Events themselves are neutral — a broken glass doesn't upset you; it is your judgement of it as bad or clumsy that causes the pain. When you own your inner state, no external event can permanently take away your peace of mind.",
      virtues: [],
      note: "This is not about self-blame. It is about self-authorship: claiming the power you already have over your own response.",
      quote: {
        text: "Men are disturbed not by the things which happen, but by the opinions about the things.",
        author: "Epictetus, Enchiridion §5",
      },
    },
  ],
  whyTriangleHeading: "Why a triangle?",
  whyTriangleParagraphs: [
    "Salzgeber chose the triangle deliberately: each side reinforces the others. You cannot live with Arete while blaming your moods on circumstances. You cannot focus only on what you control without taking responsibility for your inner state. And responsibility without virtue collapses into passive resignation. Together the three sides hold the centre — Eudaimonia — stable.",
    "The triangle is not a checklist. It is a single, integrated practice: act with excellence, release what you cannot move, and own what happens inside you.",
  ],
};
