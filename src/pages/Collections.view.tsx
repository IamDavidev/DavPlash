import React from 'react';

import {
	Box,
	Text,
	Heading,
	Breadcrumb,
	BreadcrumbItem,
} from '@chakra-ui/react';
import GridCollections from './layouts/GridCollections.layout';
import { Link } from 'react-router-dom';
import { NextIcon, PrevIcon } from '~components/icons';

const CollectionsView: React.FC = () => {
	return (
		<>
			<Box>
				<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
					<BreadcrumbItem>
						<Link to='/plash'>Discover</Link>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
						<Text>Collections</Text>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<Text color={'blueTheme.500'}>
						<PrevIcon width={'4rem'} height={'4.5rem'} /> Discover
					</Text>
					more Collections <NextIcon width={'4rem'} height={'4.5rem'} />
				</Heading>
				<GridCollections controls={true} />
			</Box>
		</>
	);
};

export default CollectionsView;
