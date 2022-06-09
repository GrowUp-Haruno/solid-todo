import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    VitePWA({
      manifest: manifest,
      includeAssets: [
        'robots.txt',
        'icons/*.{png,ico}',
      ],
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
