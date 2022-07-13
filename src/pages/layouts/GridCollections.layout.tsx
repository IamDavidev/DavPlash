import { Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

import CardCollection from '~components/CardCollection.component';

import { IGenericData } from '~interfaces/ApiSplash.types';

import { IAdapterCollection } from '~lib/adapters';

export interface IGridCollectionsProps {
	collections: IGenericData;
}

const GridCollections = ({ collections }: IGridCollectionsProps) => {
	return (
		<Box py={'2rem'}>
			<Heading as={'h2'} color={'white'} fontSize={'4xl'}>
				Top Collections over{' '}
				<Text color={'purpleTheme.500'} display={'inline-flex'}>
					Last 7 days
				</Text>
			</Heading>
			<Wrap
				spacing={'2.5rem'}
				justify={'center'}
				width={'100%'}
				alignItems={'center'}
				my={'3rem'}>
				{collections.results.map((collection: IAdapterCollection) => {
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
