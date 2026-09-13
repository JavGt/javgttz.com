import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/javgttz.com/",
  tsconfig: "tsconfig.json",
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@elements": path.resolve(__dirname, "src/elements"),
      "@scss": path.resolve(__dirname, "src/scss"),
    },
  },
});
