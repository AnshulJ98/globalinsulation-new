import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lit()],
  base: '/',
  output: 'server',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ["solid-use", "@xstate/svelte",'whatwg-url']
    }
},
});