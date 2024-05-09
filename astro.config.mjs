import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://hisamikurita.github.io',
    base: '/webgl-plane-polygon',
    vite: {
        plugins: [glsl()]
      }
});
