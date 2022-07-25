import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import GridPhotos from './layouts/GridPhotos.layout';

const PhotosView: React.FC = () => {
	return (
		<>
			<Box>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<Text color={'blueTheme.500'}>Discover</Text>
					more Collections
				</Heading>
				<GridPhotos controls={true} />
			</Box>
		</>
	);
};

export default PhotosView;
