import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import { GridCollectionSkeleton } from '~components/skeletons';
import GridCollectionError from '~components/skeletons/error/GridCollectionError.component';

import { useCollections, useIsDarkMode } from '~lib/hooks';

import GridCollections from './layouts/GridCollections.layout';

const CollectionsView: React.FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
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
					<Heading
						as={'h2'}
						color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
						fontSize={'4.5rem'}>
						<PrevIcon width={50} height={90} />
						<Text color={'blueTheme.500'}>Discover More Collections</Text>
						<NextIcon width={50} height={90} />
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
