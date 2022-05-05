import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import css from 'unocss/vite'
import { join as pathJoin } from 'path';
import autoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathJoin(__dirname, './src')}/`
    }
  },
  plugins: [
    react(),
    css(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'react',
        'react-router-dom',
      ]
    }),
    Inspect(),
    Pages(),
  ]
})
