import { useColorMode } from '@chakra-ui/react';

export default function useIsDarkMode(): boolean {
	const {
		colorMode,
	}: {
		colorMode: 'light' | 'dark';
	} = useColorMode();
	if (colorMode === 'dark') return true;
	return false;
}
