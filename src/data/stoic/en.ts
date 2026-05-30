import type { StoicContent } from "./types";

export const en: StoicContent = {
  langSwitch: { label: "ภาษาไทย", href: "/stoic-th" },

  meta: {
    title: "Stoicism — Stoa",
    description:
      "An introduction to Stoic philosophy: what it is, the dichotomy of control, the Stoic triangle, and key ideas from The Little Book of Stoicism.",
  },

  header: {
    eyebrow: "Philosophy",
    title: "Stoicism",
    description:
      "A guide to the ancient philosophy of living well — its foundations, its central practice, and how to apply it today.",
  },

  toc: [
    { label: "What is Stoicism?", href: "#what-is-stoicism" },
    { label: "Focus on What You Control", href: "#dichotomy-of-control" },
    { label: "The Stoic Triangle", href: "#stoic-triangle" },
    { label: "When You Feel Frustrated", href: "#when-frustrated" },
    { label: "When Anger Rises", href: "#when-angry" },
  ],

  whatIsStoic: {
    heading: "What is Stoicism?",
    paragraphs: [
      "Stoicism is a school of philosophy founded in Athens around 300 BC by Zeno of Citium. It holds that virtue — wisdom, justice, courage, and temperance — is the only true good, and that external things like wealth, reputation, or health are neither good nor bad in themselves.",
      "Stoics believed that the path to a good life runs through <em>reason</em> and alignment with nature. The universe, they argued, is governed by a rational order — the <em>logos</em> — and living in accordance with it brings inner tranquillity that no outside event can disturb.",
      'The philosophy reached its peak influence in Rome, expressed through the writings of three very different men: Seneca the courtier, Epictetus the former slave, and Marcus Aurelius the emperor. Their shared conviction: <span class="bg-highlight/20">circumstance does not determine character. Only you do.</span>',
    ],
    quote: {
      text: "Waste no more time arguing what a good man should be. Be one.",
      author: "Marcus Aurelius, <em>Meditations</em>",
    },
  },

  dichotomy: {
    heading: "Focus on What You Control",
    source: "The Dichotomy of Control — Epictetus, <em>Enchiridion</em> §1",
    intro:
      'Epictetus opens the <em>Enchiridion</em> with the single most clarifying idea in Stoic thought: <span class="bg-highlight/20">some things are up to us, some things are not.</span> Unhappiness arises almost entirely from confusing the two. The practice is simple to state and difficult to live: identify which category a thing belongs to, then respond accordingly.',
    inControlLabel: "In our control",
    notInControlLabel: "Not in our control",
    inControl: [
      { term: "Judgements", detail: "How we evaluate what happens to us." },
      { term: "Desires", detail: "What we choose to want or pursue." },
      { term: "Aversions", detail: "What we choose to resist or avoid." },
      { term: "Actions", detail: "How we respond and what we do." },
    ],
    notInControl: [
      { term: "Body & health", detail: "Illness, injury, age — all subject to fortune." },
      { term: "Reputation", detail: "Others’ opinions are theirs, not yours." },
      { term: "Wealth & property", detail: "Can be given or taken at any moment." },
      { term: "Outcomes", detail: "Results depend on countless factors beyond us." },
    ],
    howToApplyHeading: "How to apply it",
    howToApplyParagraphs: [
      "When something disturbs you, pause and ask: <em>Is this up to me?</em> If yes, act. If no, release your grip on the outcome. Aim for the shot, accept the landing. Prepare thoroughly for the interview, let go of the hiring decision. Give the speech with care, relinquish the audience’s reaction.",
      '<span class="bg-highlight/20">This is not passivity — it is precision.</span> You pour full energy into what you can actually move, and you stop wasting energy on what you cannot. The result is not indifference to the world but a kind of liberated engagement with it.',
    ],
    quote: {
      text: "Make the best use of what is in your power, and take the rest as it happens.",
      author: "Epictetus, <em>Enchiridion</em>",
    },
  },

  stoicTriangle: {
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
          "Accept external circumstances as they come, and direct your energy only toward your own actions. You cannot control weather, traffic, or other people’s opinions. You can control your thoughts, judgements, and responses. Letting go of what lies outside your power frees you from needless frustration.",
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
          "Recognise that you choose how you react to external events. Events themselves are neutral — a broken glass doesn’t upset you; it is your judgement of it as bad or clumsy that causes the pain. When you own your inner state, no external event can permanently take away your peace of mind.",
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
  },

  whenFrustrated: {
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
            "Be specific — not “things to go well” but exactly what you pictured.",
            "Whose behaviour were you counting on? What outcome did you assume?",
          ],
          widget: { type: "text", placeholder: "What did I expect to happen?" },
        },
        {
          heading: "Name what actually happened",
          body: "Strip the event down to facts — no interpretation, no blame, no story. Just what occurred. This is harder than it sounds; the mind immediately wraps events in meaning. Try to describe it as a camera would record it.",
          bullets: [
            'Use plain language. Leave out words like “unfair”, “as usual”, “always”.',
            "Just: what happened, when, and who was involved.",
          ],
          widget: { type: "text", placeholder: "What actually happened — just the facts?" },
        },
        {
          heading: "Ask: was that expectation mine to hold?",
          body: "Many expectations are borrowed — from social norms, from how things “should” work, from past patterns. Some were never realistic. Others were placed on things entirely outside your control. This question cuts to the root.",
          bullets: [
            "Was this outcome within someone else’s control, not yours?",
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
  },

  whenAngry: {
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
          "Seneca’s single most repeated advice: wait. Even a brief pause breaks the momentum. Anger fed immediately grows; anger paused almost always shrinks.",
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
          body: "Seneca’s first and most urgent instruction: do nothing. Not because the anger is wrong, but because action taken at peak anger almost always makes the situation worse — and harder to repair. Your only goal right now is to avoid doing anything that cannot be undone.",
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
  },
};
