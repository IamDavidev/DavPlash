import { Button } from '@chakra-ui/react';
import '@/styles/global.styles.css';

const App = () => {
	const key = import.meta.env.VITE_X_KEY;
	console.log({ key });
	return (
		<div className='App'>
			<Button colorScheme={'blackAlpha'}> David Lezama </Button>
		</div>
	);
};

export default App;
