import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});