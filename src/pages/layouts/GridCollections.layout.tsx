import React from 'react';

import { Box, Code, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

import CardCollection from '~components/CardCollection.component';

import { IAdapterCollection } from '~interfaces/Adapters.types';

import useCollections from '~lib/hooks/useColllections.hook';
import GridCollectionError from '~components/skeletons/error/GridCollectionError.component';

import { GridCollectionSkeleton } from '~components/skeletons';

type GridCollectionsProps = {
	controls: boolean;
};

const GridCollections: React.FC<GridCollectionsProps> = ({
	controls,
}: GridCollectionsProps) => {
	const { collections, error, isLoading, totalCollections } = useCollections();

	console.log({
		collections,
	});

	if (error.isError)
		return (
			<>
				<Heading>
					<Code>{error.code}</Code>
					<Text>{error.message}</Text>
				</Heading>
				<GridCollectionError />
			</>
		);

	if (isLoading) return <GridCollectionSkeleton length={totalCollections} />;

	return (
		<Box py={'2rem'}>
			{controls && <p>controls </p>}
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
