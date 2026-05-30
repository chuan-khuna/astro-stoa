// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare({ imageService: 'compile', prerenderEnvironment: 'node' }),
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
      name: "IBM Plex Sans Thai Looped",
      cssVariable: "--font-ibm-plex-sans-thai-looped",
      weights: [400, 500],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Inconsolata",
      cssVariable: "--font-inconsolata",
      weights: [400, 500],
      styles: ["normal"],
    },
  ],
});
