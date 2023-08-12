import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [solid()],
  output: "server",
  adapter: netlify()
});