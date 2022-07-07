import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from '@/styles/theme/theme.chakra';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Box bg='blackTheme.500' minHeight={'100vh'}>
				<App />
			</Box>
		</ChakraProvider>
	</React.StrictMode>
);
