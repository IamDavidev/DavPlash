import ReactDOM from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';

import { theme } from '@/styles/theme/theme.chakra';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<ColorModeScript initialColorMode={theme.config.intitialColorMode} />
		<App />
	</ChakraProvider>
);
