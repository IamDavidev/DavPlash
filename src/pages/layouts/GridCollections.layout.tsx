import React from 'react';

import { Box, Wrap, WrapItem } from '@chakra-ui/react';

import CardCollection from '~components/CardCollection.component';

import { IAdapterCollection } from '~interfaces/Adapters.types';

type GridCollectionsProps = {
	collections: IAdapterCollection[];
};

const GridCollections: React.FC<GridCollectionsProps> = ({
	collections,
}: GridCollectionsProps) => {
	return (
		<Box py={'2rem'} pos={'relative'} zIndex={10}>
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
									id={collection.id}
									ImgCollection={collection.photos[0]}
									title={collection.title}
									totalPhotos={collection.totalPhotos}
									photos={collection.photos.slice(1)}
									tags={collection.tags}
								/>
							</WrapItem>
						);
					})}
			</Wrap>
		</Box>
	);
};

export default GridCollections;
