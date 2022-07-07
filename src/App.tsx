import { Box, Heading } from '@chakra-ui/react';

import '@/styles/global.styles.css';
import { GridPhotos } from '~pages/layouts/GridPhotos.layout';

// solid - resposibility unique for each function

export const ORDER_BY = {
	_LATEST_: 'latest',
	_OLDEST_: 'oldest',
	_POPULAR_: 'popular',
};

const App = () => {
	return (
		<Box padding={'10'} className='App'>
			<Heading as='h1' size={'3xl'} textColor='blue.500'>
				DavPlash
			</Heading>
			<GridPhotos />
		</Box>
	);
};

export default App;
