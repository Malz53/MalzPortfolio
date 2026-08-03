import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from "url";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(fileURLToPath(import.meta.url)), 'components'),
      '#constants': resolve(fileURLToPath(import.meta.url)), 'constants'),
      '#store': resolve(fileURLToPath(import.meta.url)), 'store'),
      '#hoc': resolve(fileURLToPath(import.meta.url)), 'hoc'),
      '#windows': resolve(fileURLToPath(import.meta.url)), 'windows'),
    }
  }
});
