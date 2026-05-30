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

export type ControlSortWidget = {
  type: "control";
  placeholder: string;
  inControlLabel: string;
  notInControlLabel: string;
};

export type StoicWidget = TimerWidget | TextWidget | ControlSortWidget;

export interface Virtue {
  name: string;
  detail: string;
}

export interface TrianglePillar {
  number: string;
  label: string;
  sub: string;
  description: string;
  virtues?: Virtue[];
  note?: string | null;
  quote: { text: string; author: string };
}

export interface PracticeStep {
  heading: string;
  body: string;
  bullets: string[];
  widget: StoicWidget;
}

export interface Practice {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: PracticeStep[];
  quote: { text: string; author: string };
}

export interface StoicContent {
  langSwitch: { label: string; href: string };
  meta: { title: string; description: string };
  header: { eyebrow: string; title: string; description: string };
  toc: { label: string; href: string }[];
  whatIsStoic: {
    heading: string;
    paragraphs: string[];
    quote: { text: string; author: string };
  };
  dichotomy: {
    heading: string;
    source: string;
    intro: string;
    inControlLabel: string;
    notInControlLabel: string;
    inControl: { term: string; detail: string }[];
    notInControl: { term: string; detail: string }[];
    howToApplyHeading: string;
    howToApplyParagraphs: string[];
    quote: { text: string; author: string };
    controlSort: {
      heading: string;
      intro: string;
      placeholder: string;
      inControlLabel: string;
      notInControlLabel: string;
    };
  };
  stoicTriangle: {
    heading: string;
    source: string;
    intro: string;
    svgLabels: {
      topVertex: string;
      bottomRightLine1: string;
      bottomRightLine2: string;
      bottomLeftLine1: string;
      bottomLeftLine2: string;
      centre: string;
      centreItalic: string;
    };
    pillars: TrianglePillar[];
    whyTriangleHeading: string;
    whyTriangleParagraphs: string[];
  };
  whenFrustrated: {
    heading: string;
    source: string;
    intro: string;
    reminders: { label: string; detail: string }[];
    practice: Practice;
  };
  whenAngry: {
    heading: string;
    source: string;
    intro: string;
    insights: { label: string; detail: string }[];
    practice: Practice;
  };
}
