import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "HostApp",
      filename: "remoteEntry.js",
      remotes: {
        etr_rnd_orderlist: "http://localhost:4173/assets/remoteEntry.js",
        etr_rnd_customerlist: "http://localhost:4174/assets/remoteEntry.js",
      },
      exposes: {
        "./Main": "./src/components/Pages/Main/Main"
      },
      shared: ["react", "react-dom", "react-router-dom"],
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
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
