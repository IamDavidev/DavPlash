import { Heading, Wrap, WrapItem } from '@chakra-ui/react';
import CardCollection from '~components/CardCollection.component';

const GridCollections = ({ collections }: any) => {
	return (
		<>
			<Heading>Collections </Heading>
			<Wrap
				spacing={'1.5rem'}
				justify={'center'}
				width={'100%'}
				alignItems={'center'}>
				{collections.results.map((collection: any) => {
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
		</>
	);
};

export default GridCollections;
