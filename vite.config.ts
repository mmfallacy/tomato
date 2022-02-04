import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react()],
    server: { host: '0.0.0.0' },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
