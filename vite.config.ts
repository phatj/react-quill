import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, UserConfig } from "vite";
import checker from "vite-plugin-checker";
import pluginRewriteAll from "vite-plugin-rewrite-all";

const plugins: UserConfig["plugins"] = [
  react(),
  pluginRewriteAll(),
  checker({
    typescript: true,
  }),
];

if (process.env.ANALYZE === "true") {
  plugins.push(visualizer({ gzipSize: true, brotliSize: true }));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,

  resolve: {
    alias: {
      "~": resolve(__dirname),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
