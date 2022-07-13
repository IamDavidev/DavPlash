import { Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import CardImage from '~components/CardImage.component';

import { IPhotoSplash } from '~interfaces/photos.types';

export const GridPhotos = ({ photos }: any) => {
	return (
		<Box width={'100%'} my={'2rem'}>
			<Heading as={'h2'} color={'white'} fontSize={'4xl'}>
				Best Photos over{' '}
				<Text color={'purpleTheme.500'} display={'inline-flex'}>
					Last 7 days
				</Text>
			</Heading>

			<Wrap py={'2rem'} spacing={'1.5rem'} justify='center' width={'100%'}>
				{photos.results.map((photo: IPhotoSplash) => {
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
