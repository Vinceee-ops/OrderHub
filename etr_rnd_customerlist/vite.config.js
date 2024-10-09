import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "etr_rnd_customerlist",
      filename: "remoteEntry.js",
      exposes: {
        "./CustomerSection": "./src/components/CustomerListComponent/CustomerListComponent"
      },
      shared: ["react", "react-dom"],
    })
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
})