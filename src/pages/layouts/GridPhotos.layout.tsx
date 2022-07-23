import React from 'react';

import { Box, Code, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

import { usePhotos } from '~lib/hooks';

import CardImage from '~components/CardImage.component';
import { GridImagesSkeleton } from '~components/skeletons';

import GridImageError from '~components/skeletons/error/GridImageError.component';

import { IAdapterPhotos } from '~interfaces/Adapters.types';

const GridPhotos: React.FC = () => {
	const { photos, totalPhotos, isLoading, error } = usePhotos();

	if (error.isError)
		return (
			<>
				<Heading>
					<Code>{error.code}</Code>
					<Text>{error.message}</Text>
				</Heading>
				<GridImageError />
			</>
		);

	if (isLoading) return <GridImagesSkeleton length={totalPhotos} />;

	return (
		<Box width={'100%'} my={'2rem'} pos={'relative'} zIndex={10}>
			<Wrap
				py={'2rem'}
				spacing={'2rem'}
				spacingX={'3.5rem'}
				justify='center'
				width={'100%'}>
				{photos.length > 0 &&
					photos.map((photo: IAdapterPhotos) => {
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
