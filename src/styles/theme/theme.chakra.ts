import { extendTheme } from '@chakra-ui/react';

// @/constants/theme.chakra.ts
export const colors = {
	nav: {
		500: '#080c25',
	},
	gray: {
		500: '#161e35',
	},
	blue: {
		500: '#3071e7',
	},
	white: {
		500: '#fff',
	},
	black: {
		500: '#000',
	},
	cyanCale: {
		500: '#a6b2ec',
	},
	// ...
};

export const theme = extendTheme({
	colors, // colors: colors
});
