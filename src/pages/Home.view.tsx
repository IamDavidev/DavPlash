import { Box, Heading, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { COLORS_THEME } from '~constants/theme.const';

import GridCollections from './layouts/GridCollections.layout';
import HeaderLayout from './layouts/Header.layout';

import { ArrowRightIcon } from '~components/icons';
import GridPhotos from './layouts/GridPhotos.layout';

const HomeView = () => {
	return (
		<>
			<HeaderLayout />
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
								color={COLORS_THEME._PURPLE_}
							/>
						</Box>
					</Link>
				</Box>
				<GridPhotos />
			</section>
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
								color={COLORS_THEME._PURPLE_}
							/>
						</Box>
					</Link>
				</Box>
				<GridCollections controls={false} />
			</section>
		</>
	);
};

export default HomeView;
