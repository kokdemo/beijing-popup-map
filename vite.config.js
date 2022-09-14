import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root:"./src/",
  build: {
    outDir:"../"
  },
  base:"http://project.wocai.de/beijing-popup-map/"
})
