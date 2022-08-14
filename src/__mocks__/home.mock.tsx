import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import HomeView from '~pages/Home.view';

export const MockHomePage = () => {
	return (
		<>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<HomeView />
				</BrowserRouter>
			</ChakraProvider>
		</>
	);
};
