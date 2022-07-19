import { Box } from '@chakra-ui/react';
import React from 'react';
import { GridImagesSkeleton } from '~components/skeletons';

import { usePhotos } from '~lib/hooks';

import GridPhotos from './layouts/GridPhotos.layout';

const PhotosView: React.FC = () => {
	const { photos, isLoading, totalPhotos } = usePhotos();

	if (isLoading) return <GridImagesSkeleton length={totalPhotos} />;

	return (
		<>
			<Box>
				<GridPhotos photos={photos} />
			</Box>
		</>
	);
};

export default PhotosView;
