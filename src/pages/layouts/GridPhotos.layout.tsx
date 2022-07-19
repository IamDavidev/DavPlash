import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import CardImage from '~components/CardImage.component';
import { IAdapterPhotos } from '~interfaces/Adapters.types';

const GridPhotos = ({ photos }: { photos: IAdapterPhotos[] }) => {
	return (
		<Box width={'100%'} my={'2rem'}>
			<Wrap
				py={'2rem'}
				spacing={'2rem'}
				spacingX={'3.5rem'}
				justify='center'
				width={'100%'}>
				{photos.length > 0 &&
					photos.map((photo: IAdapterPhotos) => {
						console.log(photo);
						return (
							<WrapItem key={photo.id}>
								<CardImage
									image={photo.images.regular}
									likes={photo.likes}
									name={photo.user.name}
									userName={photo.user.username}
									key={photo.id}
								/>
							</WrapItem>
						);
					})}
			</Wrap>
		</Box>
	);
};

export default GridPhotos;
