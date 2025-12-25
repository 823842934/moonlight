import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  build: {
    format: "file", // <-- makes dist/404.html (not dist/404/index.html)
  },
  trailingSlash: "never",
});
