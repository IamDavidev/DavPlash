import { Box, Heading } from '@chakra-ui/react';
import '@/styles/global.styles.css';

const App = () => {
	return (
		<Box padding={'10'} className='App'>
			<Heading as='h1' size={'3xl'} textColor='blue.500'>
				DavPlash
			</Heading>
		</Box>
	);
};

export default App;
