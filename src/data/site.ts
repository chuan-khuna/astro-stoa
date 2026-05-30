export const site = {
  name: "Meditations",
  description: "A curated collection of quotes for reflection.",
  tagline: "An ongoing collection",
  established: "Est. 2026",
  year: "MMXXVI",

  footer: {
    tagline: "A personal record of words that settled.",
    closingNote: "Compiled without noise.",
  },

  nav: {
    homeLabel: "Meditations — home",
    sections: [
      { label: "Quotes", href: "/quotes" },
      { label: "Notes",  href: "/notes"  },
    ],
  },
} as const;
