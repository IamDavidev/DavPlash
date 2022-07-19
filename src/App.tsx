import { Box } from '@chakra-ui/react';

import '@/styles/global.styles.css';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';
import { FC, Suspense } from 'react';
import LoadingSuspense from '~pages/layouts/LoadingSuspense.layout';

const App: FC = () => {
	const isLoggedIn: boolean = true;

	return (
		<Box px={'10'} py={'5'} className='App'>
			<Suspense fallback={<LoadingSuspense />}>
				<BrowserRouter>
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
