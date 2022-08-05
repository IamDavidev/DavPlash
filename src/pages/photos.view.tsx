import React from 'react';

import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Code,
	Heading,
	Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { usePhotos } from '~lib/hooks';

import { COLORS_THEME } from '@/config/theme.config';

import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import { GridImagesSkeleton } from '~components/skeletons';

import GridImageError from '~components/skeletons/error/GridImageError.component';

import GridPhotos from './layouts/GridPhotos.layout';

const PhotosView: React.FC = () => {
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

	console.log(error.isError);
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
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
					<Text color={'blueTheme.500'}>Discover</Text>
					more Photos
					<NextIcon
						width={'4rem'}
						height={'4.5rem'}
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
				</Heading>
				<Box>
					<Controls
						page={page}
						setPage={setPagePhotos}
						setQuery={setQueryPhotos}
						setOrderBy={setOrderByPhotos}
					/>
					{isLoading && <GridImagesSkeleton length={totalPhotos} />}
				</Box>
				{photos && <GridPhotos photos={photos} />}
			</Box>
		</>
	);
};

export default PhotosView;
