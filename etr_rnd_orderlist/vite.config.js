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
        // "./OrderSection": "./src/components/OrderListComponent/OrderListComponent"
        "./RemoteRoute": "./src/remoteRoute/remoteRoute"
      },
      shared: ["react", "react-dom"],
    }),
  ],
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
