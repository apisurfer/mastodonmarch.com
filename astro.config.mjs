import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mastodonmarch.com",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "server",
  adapter: cloudflare(),
});
