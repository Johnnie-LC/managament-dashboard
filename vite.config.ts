import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:`/managament-dashboard/`,
  resolve:{
    alias: {
      "@":resolve(__dirname, './src'),
      '@styles': resolve(__dirname, './src/styles'),
      '@routes': resolve(__dirname, './src/routes'),
      '@presentation': resolve(__dirname, './src/presentation'),
      '@domain': resolve(__dirname, './src/domain'),
      "@application": resolve(__dirname,'./src/application'),
      "@infrastructure": resolve(__dirname,'./src/infrastructure'),
      "@stores": resolve(__dirname, './src/presentation/stores'),
      "@components": resolve(__dirname, './src/presentation/components')
    }
  }
})
