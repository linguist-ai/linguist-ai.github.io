import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: "404.html", dest: "dist" }, // configure the source and destination paths
          ],
          hook: "writeBundle", // copy after bundle has been written
        }),
      ],
    },
  },
});
