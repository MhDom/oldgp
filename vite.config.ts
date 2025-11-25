import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target ES2015 to support older browsers (approx. 2017+)
    target: 'es2015',
    // Ensure CSS is compatible
    cssTarget: 'chrome61',
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    host: true
  }
});