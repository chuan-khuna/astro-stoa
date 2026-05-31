// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "node",
  }),
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Spectral",
      cssVariable: "--font-spectral",
      weights: [200, 300, 400],
      styles: ["normal", "italic"],
    },
    {
      provider: fontProviders.google(),
      name: "Alegreya Sans",
      cssVariable: "--font-alegreya-sans",
      weights: [400, 500],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans Thai Looped",
      cssVariable: "--font-noto-sans-thai-looped",
      weights: [400, 500],
      styles: ["normal"],
      // Astro defaults `subsets` to ["latin"], which has no Thai glyphs —
      // without "thai" the woff2 ships empty for Thai text and the browser
      // silently falls back to a system font.
      subsets: ["thai", "latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Bai Jamjuree",
      cssVariable: "--font-bai-jamjuree",
      weights: [300, 400],
      styles: ["normal", "italic"],
      subsets: ["thai", "latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Inconsolata",
      cssVariable: "--font-inconsolata",
      weights: [400, 500],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "EB Garamond",
      cssVariable: "--font-eb-garamond",
      weights: [400],
      styles: ["normal", "italic"],
      // Greek subset for the nameStylised δτοα lettermark in Nav
      subsets: ["greek", "latin"],
    },
  ],
});
