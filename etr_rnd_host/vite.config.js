import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "HostApp",
      remotes: {
        etr_rnd_orderlist: "http://localhost:4173/assets/remoteEntry.js",
        etr_rnd_customerlist: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    cors: {
      origin: 'http://localhost:4175',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
  build: {
    rollupOptions: {
      external: ['AppRoutes'], 
    },
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
