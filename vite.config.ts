import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      "@":resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/styles'),
      '@routes': resolve(__dirname, './src/routes'),
      '@presentation': resolve(__dirname, './src/presentation'),
      '@domain': resolve(__dirname, './src/domain')
    }
  }
})
