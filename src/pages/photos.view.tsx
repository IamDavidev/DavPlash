import React from 'react';

import { Box, Code, Heading, Text } from '@chakra-ui/react';

import { useIsDarkMode, usePhotos } from '~lib/hooks';

import { COLORS_THEME } from '@/config/theme.config';

import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import { GridImagesSkeleton } from '~components/skeletons';

import GridImageError from '~components/skeletons/error/GridImageError.component';

import GridPhotos from './layouts/GridPhotos.layout';

const PhotosView: React.FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
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

	return (
		<>
			<Box>
				<>
					<Heading
						as={'h2'}
						color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
						fontSize={'4.5rem'}>
						<PrevIcon
							width={50}
							height={90}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
						<Text color={'blueTheme.500'}>Discover More Photos</Text>
						<NextIcon
							width={50}
							height={90}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
					</Heading>
				</>
				<>
					{error.isError && (
						<>
							<Text color={'red.500'}>{error.message}</Text>
							<>
								<Heading>
									<Code>{error.code}</Code>
									<Text>{error.message}</Text>
								</Heading>
								<GridImageError />
							</>
						</>
					)}
					{!error.isError && (
						<Controls
							page={page}
							setPage={setPagePhotos}
							setOrderBy={setOrderByPhotos}
							setQuery={setQueryPhotos}
						/>
					)}
				</>
				<>
					{isLoading && <GridImagesSkeleton length={totalPhotos} />}
					{photos && <GridPhotos photos={photos} />}
				</>
			</Box>
		</>
	);
};

export default PhotosView;
