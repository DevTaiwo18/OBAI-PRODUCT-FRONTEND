import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
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
            '@redux': path.resolve('./src/redux')
        }
    },
    plugins: [
        react({
            jsxRuntime: 'classic'
        })
    ],
    esbuild: {
        loader: 'jsx'
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            }
        }
    },
    // Remove or leave out the base path for Vercel deployment
    // base: './',

    build: {
        outDir: 'build',
        sourcemap: false,
        minify: true
    },

    server: {
        port: 3000,
        open: true
    }
});

