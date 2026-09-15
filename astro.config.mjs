// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://filesmanager.bfpcproject.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },  devToolbar: {
    enabled: false,
  },});
