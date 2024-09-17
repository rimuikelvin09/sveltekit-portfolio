import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      sass: {
        // Additional options for SASS can be specified here if needed
      },
    },
  },
});
