import { Box, Heading, Image, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { COLORS_THEME } from '@/config/theme.config';

import { useCollections, useIsDarkMode, usePhotos, useUsers } from '~lib/hooks';

import GridCollections from './layouts/GridCollections.layout';
import GridPhotos from './layouts/GridPhotos.layout';
import HeaderLayout from './layouts/Header.layout';

import heroGlow from '@/assets/svg/hero-glow.svg';

import { ArrowRightIcon } from '~components/icons';
import GridCollectionError from '~components/skeletons/error/GridCollectionError.component';
import GridImageError from '~components/skeletons/error/GridImageError.component';
import GridUserSkeletons from '~components/skeletons/GriUsersSkeleton.component';

import GridUsers from './layouts/GridUsers.layout';

const HomeView = () => {
	const isDarkMode = useIsDarkMode();

	const { photos, error: errorPhotos } = usePhotos();
	const { collections, error: errorCollections } = useCollections();
	const { users, error: errorUsers } = useUsers();

	return (
		<Box pos={'relative'}>
			<HeaderLayout />
			<section>
				<Box
					pos={'relative'}
					zIndex={10}
					w={'100%'}
					display={'flex'}
					flexDir={{
						sm: 'column',
						lg: 'row',
					}}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<Heading
						as={'h2'}
						size={'3xl'}
						my={'1rem'}
						color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}>
						Top Photos
					</Heading>
					<Link to='/plash/discover/photos'>
						{' '}
						<Box
							py={'.5rem'}
							px={'1.5rem'}
							borderRadius={'1rem'}
							display={'flex'}
							gap={'1rem'}
							alignItems={'center'}
							_hover={{
								bg: 'grayTheme.500',
								transition: 'all .8s ease-in-out',
								color: 'blacktheme.500',
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
								color={COLORS_THEME.DARK._PRIMARY_}
							/>
						</Box>
					</Link>
				</Box>
				{errorPhotos.isError && <GridImageError />}
				<GridPhotos photos={photos} />
			</section>
			<section>
				<Box
					pos={'relative'}
					zIndex={10}
					w={'100%'}
					display={'flex'}
					alignItems={'center'}
					flexDir={{
						sm: 'column',
						lg: 'row',
					}}
					justifyContent={'space-between'}>
					<Heading
						as={'h2'}
						size={{
							sm: '2xl',
							md: '3xl',
						}}
						color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
						my={'1rem'}>
						Top Collections
					</Heading>
					<Link to='/plash/discover/collections'>
						<Box
							py={'.5rem'}
							px={'1.5rem'}
							borderRadius={'1rem'}
							display={'flex'}
							gap={'1rem'}
							alignItems={'center'}
							_hover={{
								bg: COLORS_THEME.DARK._HOVER_,
								transition: 'all .8s ease-in-out',
								color: 'black',
							}}>
							<Text
								fontWeight={'semibold'}
								color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}
								fontSize={'1.2rem'}>
								View All
							</Text>
							<ArrowRightIcon
								width={25}
								height={24}
								color={COLORS_THEME.DARK._PRIMARY_}
							/>
						</Box>
					</Link>
				</Box>
				{errorCollections.isError && (
					<>
						<GridCollectionError />
					</>
				)}
				<GridCollections collections={collections} />
			</section>
			<section>
				<Box
					pos={'relative'}
					zIndex={10}
					w={'100%'}
					flexDir={{
						sm: 'column',
						lg: 'row',
					}}
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<Heading
						as={'h2'}
						size={'3xl'}
						color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
						my={'1rem'}>
						Users
					</Heading>
					<Link to='/plash/discover/users'>
						<Box
							py={'.5rem'}
							px={'1.5rem'}
							borderRadius={'1rem'}
							display={'flex'}
							gap={'1rem'}
							alignItems={'center'}
							_hover={{
								bg: 'grayTheme.500',
								transition: 'all .8s ease-in-out',
								color: 'black',
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
								color={COLORS_THEME.DARK._PRIMARY_}
							/>
						</Box>
					</Link>
				</Box>
				{errorUsers.isError && (
					<>
						<GridUserSkeletons length={10} />
					</>
				)}
				<GridUsers users={users.results} />
			</section>
			<Image
				pos={'absolute'}
				zIndex={1}
				top={'10%'}
				left={0}
				src={heroGlow}
				alt={'hero-glow'}
			/>
			<Image
				pos={'absolute'}
				zIndex={1}
				top={'35%'}
				left={0}
				src={heroGlow}
				alt={'hero-glow'}
			/>
			<Image
				pos={'absolute'}
				zIndex={1}
				top={'60%'}
				left={0}
				src={heroGlow}
				alt={'hero-glow'}
			/>
		</Box>
	);
};

export default HomeView;
