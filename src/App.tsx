import { Box } from '@chakra-ui/react';

import '@/styles/global.styles.css';

import { FC, Suspense, useContext } from 'react';

import { BrowserRouter } from 'react-router-dom';

import LoadingSuspense from '~pages/layouts/LoadingSuspense.layout';
import Nabvar from '~pages/layouts/Navbar.layout';

import { LoggedInContext } from '~lib/context/loggenIn.context';
import { useIsDarkMode } from '~lib/hooks';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

const App: FC = () => {
	const isDarkMode = useIsDarkMode();
	const { loggedIn } = useContext(LoggedInContext);
	return (
		<Box
			px={'10'}
			py={'5'}
			minH={'100vh'}
			bg={isDarkMode ? 'bgDark.500' : 'bgLight.500'}>
			<Suspense fallback={<LoadingSuspense />}>
				<BrowserRouter>
					<Nabvar />
					{loggedIn ? (
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
