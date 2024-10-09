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
            '@logos': path.resolve('./src/assets/logos'), // Ensure the logos alias is added
            '@pages': path.resolve('./src/pages'),
            '@layout': path.resolve('./src/layout'),
            '@redux': path.resolve('./src/redux')
        }
    },
    plugins: [
        react({
            jsxRuntime: 'classic' // Using classic JSX runtime
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
    base: './', // Set base to relative path for production

    // The root directory of the project.
    root: './',

    // Specify the directory for the built files.
    build: {
        outDir: 'dist', // Vercel expects 'dist' as the output directory
        sourcemap: false,
        minify: true,
        assetsDir: 'assets', // Ensure assets are stored correctly
    },

    // Configure the development server.
    server: {
        port: 3000,
        open: true
    }
});
