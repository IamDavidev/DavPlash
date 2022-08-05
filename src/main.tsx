import ReactDOM from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './App';
import { theme } from './config/theme.config';
import ProviderLoggendIn from '~lib/context/loggenIn.context';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<ColorModeScript initialColorMode={theme.config.intitialColorMode} />
		<ProviderLoggendIn>
			<App />
		</ProviderLoggendIn>
	</ChakraProvider>
);
