import { Box, Spacer, Heading, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { useColllections, usePhotos } from '~lib/hooks';

import { ArrowRightIcon } from '~components/icons';

import { COLORS_THEME } from '~constants/theme.const';

import GridCollections from './layouts/GridCollections.layout';
import GridPhotos from './layouts/GridPhotos.layout';
import HeaderLayout from './layouts/Header.layout';
import GridCollectionsSkeleton from '~components/skeletons/GridCollectionSkeleton.component';
import { GridImagesSkeleton } from '~components/skeletons';

const HomeView = () => {
	const { photos, isLoading: isLoadingPhotos, totalPhotos } = usePhotos();
	const {
		collections,
		isLoading: isLoadingCollecions,
		totalCollections,
	} = useColllections();

	return (
		<>
			<HeaderLayout />
			<Spacer bg={'blueTheme.500'} height={'1'} />{' '}
			<section>
				<Box
					w={'100%'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<Heading
						as={'h2'}
						size={'3xl'}
						color={'purpleTheme.500'}
						my={'1rem'}
						bgGradient={`linear(to-b,${COLORS_THEME._PURPLE_},${COLORS_THEME._NAV_})`}
						bgClip={'text'}>
						Top Photos
					</Heading>
					<Link to='/plash/discover/photos'>
						{' '}
						<Box
							py={'.8rem'}
							px={'3rem'}
							borderRadius={'1rem'}
							display={'flex'}
							gap={'1rem'}
							alignItems={'center'}
							_hover={{
								bg: 'grayTheme.500',
								transition: 'all .8s ease-in-out',
							}}>
							<Text
								fontWeight={'semibold'}
								color={'purpleTheme.500'}
								fontSize={'1.2rem'}>
								View All
							</Text>
							<ArrowRightIcon
								width={25}
								height={24}
								color={COLORS_THEME._PURPLE_}
							/>
						</Box>
					</Link>
				</Box>
				{isLoadingPhotos ? (
					<GridImagesSkeleton length={totalPhotos} />
				) : (
					<GridPhotos photos={photos} />
				)}
			</section>
			<Spacer bg={'blueTheme.500'} height={'1'} />
			<section>
				<Box
					w={'100%'}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<Heading
						as={'h2'}
						size={'3xl'}
						bgGradient={`linear(to-b,${COLORS_THEME._PURPLE_},${COLORS_THEME._NAV_})`}
						bgClip={'text'}
						my={'1rem'}>
						Top Collections
					</Heading>
					<Link to='/plash/discover/collecions'>
						{' '}
						<Box
							py={'.8rem'}
							px={'3rem'}
							borderRadius={'1rem'}
							display={'flex'}
							gap={'1rem'}
							alignItems={'center'}
							_hover={{
								bg: 'grayTheme.500',
								transition: 'all .8s ease-in-out',
							}}>
							<Text
								fontWeight={'semibold'}
								color={'purpleTheme.500'}
								fontSize={'1.2rem'}>
								View All
							</Text>
							<ArrowRightIcon
								styles='display:inline-flex;'
								width={25}
								height={24}
								color={COLORS_THEME._PURPLE_}
							/>
						</Box>
					</Link>
				</Box>
				{isLoadingCollecions ? (
					<GridCollectionsSkeleton length={totalCollections} />
				) : (
					<GridCollections collections={collections} />
				)}
			</section>
		</>
	);
};

export default HomeView;
