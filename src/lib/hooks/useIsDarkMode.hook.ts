import { useColorMode } from '@chakra-ui/react';

export default function useIsDarkMode(): boolean {
	const { colorMode } = useColorMode();

	return colorMode === 'dark';
}
