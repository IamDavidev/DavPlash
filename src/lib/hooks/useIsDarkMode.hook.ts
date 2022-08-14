import { useColorMode } from '@chakra-ui/react';

export default function useIsDarkMode(): boolean {
	const { colorMode } = useColorMode();
	if (colorMode === 'dark') return true;
	return false;
}
