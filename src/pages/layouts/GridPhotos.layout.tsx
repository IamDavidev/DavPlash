import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import CardImage from '~components/CardImage.component';
import { TypePhotoPlash } from '~interfaces/photos.types';
import { usePhotosPlash } from '~lib/hooks';

export const GridPhotos = () => {
	const { photos } = usePhotosPlash();
	return (
		<Box width={'100%'} my={'2rem'}>
			<Wrap spacing={'1.5rem'} justify='center' width={'100%'}>
				{photos.results.map((photo: TypePhotoPlash) => {
					return (
						<WrapItem key={photo.id}>
							<CardImage
								image={photo.images.regular}
								likes={photo.likes}
								userName={photo.user.name}
								key={photo.id}
							/>
						</WrapItem>
					);
				})}
			</Wrap>
		</Box>
	);
};
