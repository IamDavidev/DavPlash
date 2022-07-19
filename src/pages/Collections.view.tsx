import React from 'react';

import { Box } from '@chakra-ui/react';

import useCollections from '~lib/hooks/useColllections.hook';

import GridCollections from './layouts/GridCollections.layout';
import { GridCollectionSkeleton } from '~components/skeletons';

const CollectionsView: React.FC = () => {
	const { collections, isLoading, totalCollections } = useCollections();

	if (isLoading) return <GridCollectionSkeleton length={totalCollections} />;

	return (
		<>
			<Box>
				<GridCollections collections={collections} />
			</Box>
		</>
	);
};

export default CollectionsView;
