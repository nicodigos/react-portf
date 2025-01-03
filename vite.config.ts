import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [react()],
  base: "/react-portf/",
  build: {
    outDir: "dist",
    assetsDir: "",
  },
});
