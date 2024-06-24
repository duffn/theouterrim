import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import * as path from "path";

export default defineConfig({
  plugins: [RubyPlugin()],
  server: {
    hmr: {
      host: "localhost",
    },
  },
  resolve: {
    alias: {
      "~bootswatch": path.resolve(__dirname, "node_modules/bootswatch"),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
