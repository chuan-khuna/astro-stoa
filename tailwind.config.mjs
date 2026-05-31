/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        /* shadcn / tweakcn semantic tokens */
        background: "black",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        /* project tokens */
        paper: "var(--color-paper)",
        "paper-2": "var(--color-paper-2)",
        rule: "var(--color-rule)",
        neutral: "var(--color-neutral)",
        ink: "var(--color-ink)",
        highlight: "var(--color-highlight)",
        focus: "var(--color-focus)",
      },
      fontFamily: {
        display: "var(--font-spectral), var(--font-eb-garamond), var(--font-bai-jamjuree), serif",
        body: "var(--font-alegreya-sans), var(--font-noto-sans-thai-looped), sans-serif",
        mono: "var(--font-inconsolata)",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
