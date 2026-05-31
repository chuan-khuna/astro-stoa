import type { StoicAtWorkContent } from "@/data/stoic-at-work/types";

export const intro: StoicAtWorkContent["intro"] = {
  heading: "You Are Not Imagining It",
  epigraph: {
    text: "If it is not right, do not do it. If it is not true, do not say it.",
    author: "Marcus Aurelius, <em>Meditations</em>",
  },
  situation: [
    "You work hard. You show up. You ship. And yet the briefs keep arriving without plans, the scope keeps growing past what the team can carry, the promises keep being made by people who will not be the ones to keep them. The benefits shrink. The expectations do not.",
    'This is not a productivity problem. It is not a skill gap. <span class="bg-highlight/20">It is a structural reality that many programmers are living in right now</span> — made sharper by the belief that the LLM erased the cost of complexity.',
  ],
  howToThink: [
    "The Stoics did not pretend that bad situations were good. Marcus Aurelius wrote the <em>Meditations</em> while managing an empire in decline, a pandemic, and wars he did not choose. He did not call it fine. He asked: <em>given this, what is the right action?</em>",
    "That is the question this page tries to answer — for each of the four problems you are likely carrying right now.",
  ],
};
