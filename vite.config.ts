import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Página de venda, página de obrigado (pós-compra), termos e privacidade
      input: {
        principal: 'index.html',
        obrigado: 'obrigado/index.html',
        termos: 'termos/index.html',
        privacidade: 'privacidade/index.html',
      },
    },
  },
})
