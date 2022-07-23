import React from 'react';

import { Box, Text, Heading } from '@chakra-ui/react';
import GridCollections from './layouts/GridCollections.layout';

const CollectionsView: React.FC = () => {
	return (
		<>
			<Box>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<Text color={'blueTheme.500'}>Discover</Text>
					more Collections
				</Heading>
				<GridCollections controls={true} />
			</Box>
		</>
	);
};

export default CollectionsView;
