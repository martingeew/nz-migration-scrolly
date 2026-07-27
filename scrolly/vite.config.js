import {defineConfig} from "vite";
import {svelte} from "@sveltejs/vite-plugin-svelte";

// Deployed to GitHub Pages at https://<user>.github.io/nz-migration-scrolly/,
// so the base path must match the repo name.
export default defineConfig({
  base: "/nz-migration-scrolly/",
  plugins: [svelte()]
});
