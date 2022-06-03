import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), VitePWA({})],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
