import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from /My-google-home-page/; locally it lives at the root.
  base: command === "build" ? "/My-google-home-page/" : "/",
  plugins: [react()],
  server: { port: 3000, open: true },
}));
