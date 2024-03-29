import { FC } from 'react';

import { Box, Wrap, WrapItem } from '@chakra-ui/react';

import CardCollection from '~components/CardCollection.component';

import { IAdapterCollection } from '~interfaces/Adapters.types';

type GridCollectionsProps = {
	collections: IAdapterCollection[];
};

const GridCollections: FC<GridCollectionsProps> = ({ collections }) => {
	return (
		<Box py={'2rem'} pos={'relative'} zIndex={10}>
			<Wrap
				id='test-home-container-card-photos'
				spacing={'2.5rem'}
				justify={'center'}
				width={'100%'}
				p={{
					sm: '1rem',
					md: '.5rem',
				}}
				alignItems={'center'}
				my={'3rem'}>
				{collections.length > 0 &&
					collections?.map((collection: IAdapterCollection) => {
						return (
							<WrapItem
								w={{
									sm: '100%',
									md: 'auto',
								}}
								key={collection.shareKey}>
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
