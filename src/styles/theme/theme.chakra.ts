import { extendTheme } from '@chakra-ui/react';
import { colors, fonts } from '~constants/theme.const';

export const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: true,
	},
	colors, // colors: colors
	fonts, // fonts: fonts
});
