import React, { useState } from 'react';

import { Box, Code, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react';

import CardCollection from '~components/CardCollection.component';

import { IAdapterCollection } from '~interfaces/Adapters.types';

import GridCollectionError from '~components/skeletons/error/GridCollectionError.component';
import useCollections from '~lib/hooks/useColllections.hook';

import Controls from '~components/controls.compoenent';
import { GridCollectionSkeleton } from '~components/skeletons';

type GridCollectionsProps = {
	controls: boolean;
};

const GridCollections: React.FC<GridCollectionsProps> = ({
	controls,
}: GridCollectionsProps) => {
	const { collections, error, isLoading, totalCollections } = useCollections();
	const [page, setPage] = useState(1);

	if (error.isError)
		return (
			<>
				<Flex
					width={'100%'}
					justifyContent={'space-between'}
					fontSize={'2.5rem'}
					alignItems={'center'}>
					<Text>{error.message}</Text>
					<Code>{error.code}</Code>
				</Flex>
				<GridCollectionError />
			</>
		);

	if (isLoading) return <GridCollectionSkeleton length={totalCollections} />;

	return (
		<Box py={'2rem'} pos={'relative'} zIndex={10}>
			{controls && <Controls page={page} setPage={setPage} />}
			<Wrap
				spacing={'2.5rem'}
				justify={'center'}
				width={'100%'}
				alignItems={'center'}
				my={'3rem'}>
				{collections.length > 0 &&
					collections?.map((collection: IAdapterCollection) => {
						return (
							<WrapItem key={collection.shareKey}>
								<CardCollection
									ImgCollection={collection.photos[0]}
									title={collection.title}
									totalPhotos={collection.totalPhotos}
									photos={collection.photos.slice(1)}
								/>
							</WrapItem>
						);
					})}
			</Wrap>
		</Box>
	);
};

export default GridCollections;
