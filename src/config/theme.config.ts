import { extendTheme } from '@chakra-ui/react';

export const COLORS_THEME = {
	DARK: {
		_PRIMARY_: '#746CFE',
		_SECONDARY_: '#ffffff',
		_TERTIARY_: '#3071e7',
		_BG_: '#010202',
		_BLACK_: '#000000',
		_HOVER_: '#222222',
	},
	LIGHT: {
		_PRIMARY_: '#000000',
		_SECONDARY_: '#7868E6',
		_CYAN_: '#a6b2ec',
		_BG_: '#F9F3EE',
		_BLUR_: '#ffeeff73',
		_WHITE_: '#ffffff',
		_HOVER_: '#fffacd',
	},
	_BLUE_: '#63b3ed',
};

export const colors = {
	primaryDark: {
		200: COLORS_THEME.DARK._PRIMARY_,
		300: COLORS_THEME.DARK._PRIMARY_,
		500: COLORS_THEME.DARK._PRIMARY_,
		600: COLORS_THEME.DARK._PRIMARY_,
	},
	secondaryDark: {
		200: COLORS_THEME.DARK._SECONDARY_,
		300: COLORS_THEME.DARK._SECONDARY_,
		500: COLORS_THEME.DARK._SECONDARY_,
		600: COLORS_THEME.DARK._SECONDARY_,
	},
	tertiaryDark: {
		200: COLORS_THEME.DARK._TERTIARY_,
		300: COLORS_THEME.DARK._TERTIARY_,
		500: COLORS_THEME.DARK._TERTIARY_,
		600: COLORS_THEME.DARK._TERTIARY_,
	},
	bgDark: {
		200: COLORS_THEME.DARK._BG_,
		300: COLORS_THEME.DARK._BG_,
		500: COLORS_THEME.DARK._BG_,
		600: COLORS_THEME.DARK._BG_,
	},
	blackDark: {
		200: COLORS_THEME.DARK._BLACK_,
		300: COLORS_THEME.DARK._BLACK_,
		500: COLORS_THEME.DARK._BLACK_,
		600: COLORS_THEME.DARK._BLACK_,
	},
	hoverDark: {
		200: COLORS_THEME.DARK._HOVER_,
		300: COLORS_THEME.DARK._HOVER_,
		500: COLORS_THEME.DARK._HOVER_,
		600: COLORS_THEME.DARK._HOVER_,
	},
	primaryLight: {
		200: COLORS_THEME.LIGHT._PRIMARY_,
		300: COLORS_THEME.LIGHT._PRIMARY_,
		500: COLORS_THEME.LIGHT._PRIMARY_,
		600: COLORS_THEME.LIGHT._PRIMARY_,
	},
	secondaryLight: {
		200: COLORS_THEME.LIGHT._SECONDARY_,
		300: COLORS_THEME.LIGHT._SECONDARY_,
		500: COLORS_THEME.LIGHT._SECONDARY_,
		600: COLORS_THEME.LIGHT._SECONDARY_,
	},
	cyanLight: {
		200: COLORS_THEME.LIGHT._CYAN_,
		300: COLORS_THEME.LIGHT._CYAN_,
		500: COLORS_THEME.LIGHT._CYAN_,
		600: COLORS_THEME.LIGHT._CYAN_,
	},
	bgLight: {
		200: COLORS_THEME.LIGHT._BG_,
		300: COLORS_THEME.LIGHT._BG_,
		500: COLORS_THEME.LIGHT._BG_,
		600: COLORS_THEME.LIGHT._BG_,
	},
	blurLight: {
		200: COLORS_THEME.LIGHT._BLUR_,
		300: COLORS_THEME.LIGHT._BLUR_,
		500: COLORS_THEME.LIGHT._BLUR_,
		600: COLORS_THEME.LIGHT._BLUR_,
	},
	whiteLight: {
		200: COLORS_THEME.LIGHT._WHITE_,
		300: COLORS_THEME.LIGHT._WHITE_,
		500: COLORS_THEME.LIGHT._WHITE_,
		600: COLORS_THEME.LIGHT._WHITE_,
	},
	hoverLight: {
		200: COLORS_THEME.LIGHT._HOVER_,
		300: COLORS_THEME.LIGHT._HOVER_,
		500: COLORS_THEME.LIGHT._HOVER_,
		600: COLORS_THEME.LIGHT._HOVER_,
	},
	blueG: {
		200: COLORS_THEME._BLUE_,
		300: COLORS_THEME._BLUE_,
		500: COLORS_THEME._BLUE_,
		600: COLORS_THEME._BLUE_,
	},
};

export const fonts = {
	body: `Poppins, sans-serif`,
	heading: `Poppins, sans-serif`,
};

export const shadows = {
	shadowDark: `0px 0px 10px 2px ${COLORS_THEME.DARK._PRIMARY_}`,
	shadowLight: `0px 0px 10px 2px ${COLORS_THEME.LIGHT._PRIMARY_}`,
};

export const breakpoints = {
	sm: '100px',
	md: '425px',
	lg: '768px',
	xl: '1024px',
	desk: '1440px',
};

export const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: true,
	},
	colors, // colors: colors
	shadows, // shadows: shadows
	fonts, // fonts: fonts
	breakpoints,
});
