import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  base: '/horadepizza/', // Nombre del repositorio en GitHub
  server: {
    port: 3000, 
    open: true, 
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
