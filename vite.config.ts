import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Nizar-Hosni/', // Updated to match the repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
