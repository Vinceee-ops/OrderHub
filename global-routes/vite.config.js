import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'global-routes',
      filename: 'remoteEntry.js',
      remotes: {
        etr_rnd_orderlist: "http://localhost:4173/assets/remoteEntry.js",
        etr_rnd_customerlist: "http://localhost:4174/assets/remoteEntry.js",
        etr_rnd_host: "http://localhost:4175/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: 'esnext',
    modulePreload: { polyfill: false },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});
