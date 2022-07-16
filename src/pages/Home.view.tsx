import { Spacer } from '@chakra-ui/react';
import GridCollections from './layouts/GridCollections.layout';
import HeaderLayout from './layouts/Header.layout';

const HomeView = () => {
	return (
		<>
			<HeaderLayout />
			<Spacer />
			<GridCollections />
		</>
	);
};

export default HomeView;
