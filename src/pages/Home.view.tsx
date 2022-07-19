import { Spacer } from '@chakra-ui/react';

import { useColllections, usePhotos } from '~lib/hooks';

import GridCollections from './layouts/GridCollections.layout';
import GridPhotos from './layouts/GridPhotos.layout';
import HeaderLayout from './layouts/Header.layout';

const HomeView = () => {
	const { photos } = usePhotos();
	const { collections } = useColllections();

	return (
		<>
			<HeaderLayout />
			<Spacer />
			<GridCollections collections={collections} />
			<Spacer />
			<GridPhotos photos={photos} />
		</>
	);
};

export default HomeView;
