import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base debe ser el nombre del repo precedido y terminado por slash
  base: '/pizza-time-frontend-only.github.io/',
  build: {
    outDir: 'dist', // carpeta de salida, Vite ya usa 'dist' por defecto
  },
})
