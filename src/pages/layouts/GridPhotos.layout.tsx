import React from 'react';

import { Box, Code, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

import { usePhotos } from '~lib/hooks';

import CardImage from '~components/CardImage.component';
import { GridImagesSkeleton } from '~components/skeletons';

import GridImageError from '~components/skeletons/error/GridImageError.component';

import { IAdapterPhotos } from '~interfaces/Adapters.types';
import Controls from '~components/controls.compoenent';

interface IGridPhotosProps {
	controls: boolean;
}

const GridPhotos: React.FC<IGridPhotosProps> = ({ controls }) => {
	const {
		photos,
		totalPhotos,
		isLoading,
		error,
		page,
		setPagePhotos,
		setOrderByPhotos,
		setQueryPhotos,
	} = usePhotos();

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

	return (
		<Box width={'100%'} my={'2rem'} pos={'relative'} zIndex={10}>
			{controls && (
				<Controls
					page={page}
					setPage={setPagePhotos}
					setQuery={setQueryPhotos}
					setOrderBy={setOrderByPhotos}
				/>
			)}
			{isLoading && <GridImagesSkeleton length={totalPhotos} />}
			{!isLoading && (
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
										id={photo.id}
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
			)}
		</Box>
	);
};

export default GridPhotos;
