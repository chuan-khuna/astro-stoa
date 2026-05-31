export type TimerWidget = {
  type: "timer";
  seconds: number;
  labelStart: string;
  labelReset: string;
  labelDone: string;
};

export type TextWidget = {
  type: "text";
  placeholder: string;
  rows?: number;
};

export type WorkWidget = TimerWidget | TextWidget;

export interface PracticeStep {
  heading: string;
  body: string;
  bullets: string[];
  widget: WorkWidget;
}

export interface Practice {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: PracticeStep[];
  quote: { text: string; author: string };
}

export interface Epigraph {
  text: string;
  author: string;
}

export interface WhatToDo {
  /** Optional lead-in prose (may contain inline HTML). */
  intro?: string;
  /** Optional highlighted callout — e.g. a push-back template (may contain HTML). */
  template?: string;
  /** Optional bulleted list of concrete actions. */
  bullets?: string[];
  /** Optional closing prose (may contain inline HTML). */
  outro?: string;
}

/** Shared shape for the five "problem" sections of the page. */
export interface WorkSection {
  heading: string;
  /** Attribution line under the heading (may contain inline HTML). */
  source: string;
  epigraph: Epigraph;
  /** "The situation" prose — one entry per paragraph (may contain HTML). */
  situation: string[];
  situationLabel: string;
  /** "How to think about it" prose — one entry per paragraph (may contain HTML). */
  howToThink: string[];
  howToThinkLabel: string;
  whatToDoLabel: string;
  whatToDo: WhatToDo;
  practice: Practice;
}

export interface StoicAtWorkContent {
  langSwitch: { label: string; href: string };
  meta: { title: string; description: string };
  header: { eyebrow: string; title: string; description: string };
  toc: { label: string; href: string }[];
  intro: {
    heading: string;
    epigraph: Epigraph;
    situation: string[];
    howToThink: string[];
  };
  fastBrief: WorkSection;
  impossible: WorkSection;
  boast: WorkSection;
  cost: WorkSection;
  recovery: WorkSection;
}
