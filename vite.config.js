import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  base: "/modern-landing/",
  plugins: [
    handlebars({
      partialDirectory: "./partials",
    }),
  ],
});
