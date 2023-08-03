import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import { resolve } from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    minify: true,
    outDir: resolve(__dirname, "dist/ui"),
    assetsInlineLimit: 100000000,
  },
});
