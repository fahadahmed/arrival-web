import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import federation from '@originjs/vite-plugin-federation';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`,
    }),
    federation({
      name: 'app',
      filename: 'remoteEntry.js',
      remotes: {
        attendance: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
