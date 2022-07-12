import { Box, Button, useBoolean } from '@chakra-ui/react';

import '@/styles/global.styles.css';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

// solid - resposibility unique for each function
const App = () => {
	// const isLogged: boolean = false;
	const [isLoggedIn, setIsLoggedIn] = useBoolean();

	return (
		<Box padding={'10'} className='App'>
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
