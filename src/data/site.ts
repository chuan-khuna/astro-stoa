export const site = {
  name: "Stoa",
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
    sections: [
      { label: "Quotes", href: "/quotes" },
      { label: "Notes", href: "/notes" },
      { label: "Stoicism", href: "/stoic" },
    ],
  },
} as const;
