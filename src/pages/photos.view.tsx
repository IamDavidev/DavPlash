import React from 'react';

import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Heading,
	Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import GridPhotos from './layouts/GridPhotos.layout';
import { NextIcon, PrevIcon } from '~components/icons';
import { COLORS_THEME } from '~constants/theme.const';

const PhotosView: React.FC = () => {
	return (
		<>
			<Box>
				<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
					<BreadcrumbItem>
						<Link to='/plash'>Discover</Link>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
						<Text>Photos</Text>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<PrevIcon
						width={'4rem'}
						height={'4.5rem'}
						color={COLORS_THEME._PURPLE_}
					/>
					<Text color={'blueTheme.500'}>Discover</Text>
					more Photos
					<NextIcon
						width={'4rem'}
						height={'4.5rem'}
						color={COLORS_THEME._PURPLE_}
					/>
				</Heading>
				<GridPhotos controls={true} />
			</Box>
		</>
	);
};

export default PhotosView;
