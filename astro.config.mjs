import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lit()],
  base: '/',
  output: 'server'
});