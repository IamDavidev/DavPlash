import { Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import CardImage from '~components/CardImage.component';
import { IAdapterPhotos } from '~interfaces/Adapters.types';
import { usePhotos } from '~lib/hooks';

export const GridPhotos = () => {
	const { photos } = usePhotos();

	return (
		<Box width={'100%'} my={'2rem'}>
			<Heading as={'h2'} color={'white'} fontSize={'4xl'}>
				Best Photos over{' '}
				<Text color={'purpleTheme.500'} display={'inline-flex'}>
					Last 7 days
				</Text>
			</Heading>

			<Wrap py={'2rem'} spacing={'1.5rem'} justify='center' width={'100%'}>
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
