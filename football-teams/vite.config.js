import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://run.mocky.io/v3/4e3c58e1-a76d-4e9b-9290-389440d87ebb',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
