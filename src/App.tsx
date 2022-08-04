import { Box, useColorMode } from '@chakra-ui/react';

import '@/styles/global.styles.css';

import { FC, Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import LoadingSuspense from '~pages/layouts/LoadingSuspense.layout';
import Nabvar from '~pages/layouts/Navbar.layout';

import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

import { isDarkMode } from '~lib/utils/isDarkMode.util';

const App: FC = () => {
	const isLoggedIn: boolean = true;
	const { colorMode } = useColorMode();
	return (
		<Box
			px={'10'}
			py={'5'}
			minH={'100vh'}
			overflow={'hidden'}
			bg={isDarkMode(colorMode) ? 'bgDark.500' : 'bgLight.500'}>
			<Suspense fallback={<LoadingSuspense />}>
				<BrowserRouter>
					<Nabvar />
					{isLoggedIn ? (
						<>
							<PrivateRoutes />
						</>
					) : (
						<>
							<PublicRoutes />
						</>
					)}
				</BrowserRouter>
			</Suspense>
		</Box>
	);
};

export default App;
