import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import css from 'unocss/vite'
import path from 'path';
import autoImport from 'unplugin-auto-import/vite';

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
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'react',
      ]
    }),
  ]
})
