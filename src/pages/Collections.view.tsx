import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import { GridCollectionSkeleton } from '~components/skeletons';
import GridCollectionError from '~components/skeletons/error/GridCollectionError.component';

import { useCollections } from '~lib/hooks';

import GridCollections from './layouts/GridCollections.layout';

const CollectionsView: React.FC = () => {
	const {
		collections,
		error,
		isLoading,
		page,
		totalCollections,
		setPageCollections,
		setQueryCollections,
	} = useCollections();
	if (error.isError)
		return (
			<>
				<Flex
					width={'100%'}
					justifyContent={'space-between'}
					fontSize={'2.5rem'}
					alignItems={'center'}>
					<Text>{error.message}</Text>
				</Flex>
				<GridCollectionError />
			</>
		);

	return (
		<>
			<Box>
				<>
					<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
						<PrevIcon width={'4rem'} height={'4.5rem'} />
						<Text color={'blueTheme.500'}>Discover More Collections</Text>
						<NextIcon width={'4rem'} height={'4.5rem'} />
					</Heading>
				</>
				<>
					<Controls
						page={page}
						setPage={setPageCollections}
						setQuery={setQueryCollections}
					/>
				</>
				<>
					{isLoading && <GridCollectionSkeleton length={totalCollections} />}
					{collections.length > 0 && (
						<GridCollections collections={collections} />
					)}
				</>
			</Box>
		</>
	);
};

export default CollectionsView;
