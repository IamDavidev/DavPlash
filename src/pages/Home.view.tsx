import { Spacer } from '@chakra-ui/react';
import GridCollections from './layouts/GridCollections.layout';
import { GridPhotos } from './layouts/GridPhotos.layout';
import HeaderLayout from './layouts/Header.layout';

const HomeView = () => {
	return (
		<>
			<HeaderLayout />
			<Spacer />
			<GridCollections />
			<Spacer />
			<GridPhotos />
		</>
	);
};

export default HomeView;
