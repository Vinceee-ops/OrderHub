import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "etr_rnd_orderlist",
      filename: "remoteEntry.js",
      exposes: {
        "./OrderSection": "./src/components/OrderListComponent/OrderListComponent",
        "./TestComponent": "./src/components/TestComponent/Testcomponent",
      },
      remotes: {
        etr_rnd_orderlist: "http://localhost:4173/assets/remoteEntry.js",
        etr_rnd_customerlist: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    cors: {
      origin: '*',
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
