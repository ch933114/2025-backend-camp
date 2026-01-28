import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,          // ⭐ 允許外部（Docker）連線
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,  // ⭐ Docker volume 必開
    },
    hmr: {
      host: "localhost", // ⭐ 瀏覽器連線用
      port: 5173,
    },
  },
});