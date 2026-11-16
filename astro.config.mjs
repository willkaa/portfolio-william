import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  compressHTML: false,
  build: { format: "file" },
  vite: {
    build: { minify: false },
  },
});
