import react from '@vitejs/plugin-react';
import * as path from 'path';

import { loadEnv, defineConfig as vitedefineConfig } from 'vite';

// import { defineConfig, UserConfigExport } from 'vitest/config';

export default ({ mode }: { mode: string }): any => {
	return vitedefineConfig({
		plugins: [react()],
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

/**
 * config for tests : in production break for error in pluginOption[] only use when run test
 */
// export default ({ mode }: { mode: string }): UserConfigExport => {
// 	return defineConfig({
// 		plugins: [react()],
// 		test: {
// 			globals: true,
// 			environment: 'jsdom',
// 			setupFiles: './src/config/setup.config.ts',
// 			css: true,
// 		},
// 		resolve: {
// 			alias: {
// 				'~components': path.resolve(__dirname, './src/components'),
// 				'~interfaces': path.resolve(__dirname, './src/interfaces'),
// 				'~lib': path.resolve(__dirname, './src/lib'),
// 				'~constants': path.resolve(__dirname, './src/constants'),
// 				'~pages': path.resolve(__dirname, './src/pages'),
// 				'@': path.resolve(__dirname, './src'),
// 			},
// 		},
// 		define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
// 		server: {
// 			proxy: {
// 				'^/assets': {
// 					target: 'http://localhost:3000/',
// 				},
// 			},
// 		},
// 	});
// };
