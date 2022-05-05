import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import css from 'unocss/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.join(__dirname, './src')}/`
    }
  },
  plugins: [
    react(),
    css(),
  ]
})
