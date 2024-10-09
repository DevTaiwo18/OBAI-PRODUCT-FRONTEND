import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@components': path.resolve('./src/components'),
            '@utils': path.resolve('./src/utils'),
            '@constants': path.resolve('./src/constants'),
            '@images': path.resolve('./src/assets/images'), // Images inside src/assets
            '@icons': path.resolve('./src/assets/icons'),
            '@pages': path.resolve('./src/pages'),
            '@layout': path.resolve('./src/layout'),
            '@redux': path.resolve('./src/redux')
        }
    },
    plugins: [
        react({
            jsxRuntime: 'classic'
        })
    ],
    base: './',  // This is important for relative paths during deployment
    build: {
        outDir: 'dist',
        assetsDir: 'assets', // Ensure that assets are placed in 'dist/assets'
        sourcemap: false,
        minify: true
    },
    server: {
        port: 3000,
        open: true
    }
});
