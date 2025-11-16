import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    target: 'ES2020',
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html',
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})