import { Box } from '@chakra-ui/react';

import '@/styles/global.styles.css';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';

// solid - resposibility unique for each function
const App = () => {
	const isLoggedIn: boolean = true;
	// const [isLoggedIn, setIsLoggedIn] = useBoolean();

	return (
		<Box px={'10'} py={'5'} className='App'>
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
