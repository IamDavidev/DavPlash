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
import Footer from '~pages/layouts/Footer.layout';

const App: FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	const { loggedIn } = useContext(LoggedInContext);
	return (
		<Box px={'10'} py={'5'} bg={isDarkMode ? 'bgDark.500' : 'bgLight.500'}>
			<Suspense fallback={<LoadingSuspense />}>
				<BrowserRouter>
					<Nabvar />
					<Box minH={'100vh'}>
						{loggedIn ? (
							<>
								<PrivateRoutes />
							</>
						) : (
							<>
								<PublicRoutes />
							</>
						)}
					</Box>
					<Footer />
				</BrowserRouter>
			</Suspense>
		</Box>
	);
};

export default App;
