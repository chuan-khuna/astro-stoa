import type { StoicContent } from "@/data/stoic/types";

export const dichotomy: StoicContent["dichotomy"] = {
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
    { term: "Reputation", detail: "Others' opinions are theirs, not yours." },
    { term: "Wealth & property", detail: "Can be given or taken at any moment." },
    { term: "Outcomes", detail: "Results depend on countless factors beyond us." },
  ],
  howToApplyHeading: "How to apply it",
  howToApplyParagraphs: [
    "When something disturbs you, pause and ask: <em>Is this up to me?</em> If yes, act. If no, release your grip on the outcome. Aim for the shot, accept the landing. Prepare thoroughly for the interview, let go of the hiring decision. Give the speech with care, relinquish the audience's reaction.",
    '<span class="bg-highlight/20">This is not passivity — it is precision.</span> You pour full energy into what you can actually move, and you stop wasting energy on what you cannot. The result is not indifference to the world but a kind of liberated engagement with it.',
  ],
  quote: {
    text: "Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus, <em>Enchiridion</em>",
  },
  controlSort: {
    heading: "Sort it yourself",
    intro:
      "Name something troubling you right now, then file it where it belongs. Watch how much of your worry lands in the right-hand column — and how little of it you can actually move.",
    placeholder: "What's weighing on you?",
    inControlLabel: "In my control",
    notInControlLabel: "Not up to me",
  },
};
