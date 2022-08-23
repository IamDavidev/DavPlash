import { defineConfig } from 'cypress';
import { URL_APP_IN_LOCALHOST } from '~constants/cypress.const';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config): void {
			// implement node event listeners here
		},
		baseUrl: URL_APP_IN_LOCALHOST,
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
	},
});
