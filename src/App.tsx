import { Box, Button, Heading, useBoolean } from '@chakra-ui/react';

import '@/styles/global.styles.css';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

// solid - resposibility unique for each function

export const ORDER_BY = {
	_LATEST_: 'latest',
	_OLDEST_: 'oldest',
	_POPULAR_: 'popular',
};

const App = () => {
	// const isLogged: boolean = false;
	const [isLoggedIn, setIsLoggedIn] = useBoolean();
	console.log(isLoggedIn);
	return (
		<Box padding={'10'} className='App'>
			<Heading as='h1' size={'3xl'} textColor='blue.500'>
				DavPlash
			</Heading>
			<Button
				colorScheme={'pink'}
				onClick={() => {
					setIsLoggedIn.toggle();
				}}>
				<span>{isLoggedIn ? 'Logout' : 'Login'}</span>
			</Button>
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
			{/* <GridPhotos /> */}
		</Box>
	);
};

export default App;
