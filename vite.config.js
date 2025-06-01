import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@api': path.resolve(__dirname, 'src/api')
    }
  }
})
