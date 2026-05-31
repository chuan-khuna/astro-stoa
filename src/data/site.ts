export const site = {
  name: "Stoa",
  /** Greek lettermark rendered in the nav logo — requires EB Garamond (Greek subset) as fallback */
  nameStylised: "δτοα",
  description: "A curated collection of quotes for reflection.",
  year: "2026",

  footer: {
    tagline: "A personal record of words that settled.",
    closingNote: "Compiled without noise.",
  },

  footerNav: [
    { label: "Home", href: "/" },
    { label: "Quotes", href: "/quotes" },
    { label: "Notes", href: "/notes" },
    { label: "Stoicism", href: "/stoic" },
  ],

  nav: {
    homeLabel: "Stoa — home",
    /** Scroll-anchor links (/#…) land on the home page sections; /stoic is a standalone page */
    sections: [
      { label: "Quotes", href: "/#quotes" },
      { label: "Notes", href: "/#notes" },
      { label: "Stoicism", href: "/stoic" },
    ],
  },
} as const;
