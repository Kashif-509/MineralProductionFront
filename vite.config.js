import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // other config options
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Your Express server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
