import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@utils': path.resolve('./src/utils'),
      '@constants': path.resolve('./src/constants'),
      '@images': path.resolve('./src/assets/images'),
      '@icons': path.resolve('./src/assets/icons'),
      '@pages': path.resolve('./src/pages'),
      '@layout': path.resolve('./src/layout'),
      '@redux': path.resolve('./src/redux'),
      // Add more aliases for other directories as needed
    }
  },
  plugins: [
    react({
      jsxRuntime: 'classic', // Using classic JSX runtime
    }),
  ],
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  base: './', // Set base to current directory to correctly resolve assets in production
  build: {
    outDir: 'dist', // Vercel expects the output folder to be 'dist'
    sourcemap: false,
    minify: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
