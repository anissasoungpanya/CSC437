import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: ".",
  publicDir: "public",
  resolve: {
    alias: {
      // Ensure @calpoly/mustang resolves correctly
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        yosemite: resolve(__dirname, "parks/yosemite.html"),
        zion: resolve(__dirname, "parks/zion.html"),
        channel: resolve(__dirname, "parks/channel.html"),
      },
    },
  },
});
