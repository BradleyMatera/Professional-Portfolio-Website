import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactapptest/', // Adjust this to your repo name for GitHub Pages
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'public/index.html'
    }
  }
});
