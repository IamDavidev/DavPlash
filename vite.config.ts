import react from '@vitejs/plugin-react';
import * as path from 'path';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

/// <reference types="vitest" />
export default ({ mode }: { mode: string }) => {
	return defineConfig({
		plugins: [react()],
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './src/config/setup.config.ts',
			css: true,
		},
		resolve: {
			alias: {
				'~components': path.resolve(__dirname, './src/components'),
				'~interfaces': path.resolve(__dirname, './src/interfaces'),
				'~lib': path.resolve(__dirname, './src/lib'),
				'~constants': path.resolve(__dirname, './src/constants'),
				'~pages': path.resolve(__dirname, './src/pages'),
				'@': path.resolve(__dirname, './src'),
			},
		},
		define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
		server: {
			proxy: {
				'^/assets': {
					target: 'http://localhost:3000/',
				},
			},
		},
	});
};
