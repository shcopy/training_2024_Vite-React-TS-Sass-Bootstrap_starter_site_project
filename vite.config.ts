import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/training_2024_vite_bs_react_practise_site_project/",
  plugins: [
    react(),
    tsconfigPaths()
  ],
  build: {
    outDir: "dist",
  },

  server: {
    // port: 8080,
    // open: "pages/index.html", // 啟動 server 時預設開啟的頁面
    proxy:{
      "/api": {
        target: "https://freyja-uj95.onrender.com",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
