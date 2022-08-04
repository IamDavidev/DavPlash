import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CardPhotoRandom from '~components/CardPhotoRandom.component';
import { ArrowRightIcon, HeartIcon } from '~components/icons';
import { COLORS_THEME } from '~constants/theme.const';
import { useIsDarkMode } from '~lib/hooks';

const HeaderLayout = () => {
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Box
				pos={'relative'}
				zIndex={10}
				width={'100%'}
				my={'1rem'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}>
				<Heading
					as={'h1'}
					color={'white'}
					fontSize={'5rem'}
					display='flex'
					bgClip={'text'}
					bgGradient={`linear(to-b,${
						isDarkMode
							? COLORS_THEME.DARK._PRIMARY_
							: COLORS_THEME.LIGHT._PRIMARY_
					}, ${isDarkMode ? COLORS_THEME.DARK._BG_ : COLORS_THEME.LIGHT._BG_})`}
					justifyContent={'center'}
					alignItems={'center'}
					textAlign={'center'}
					width={'25ch'}
					my={'2rem'}>
					Discover, collect and sale extraordinary Photos
				</Heading>
				<Stack direction='row' spacing={4} justifyContent={'center'}>
					<Link to='/plash/discover/collections'>
						<Box
							borderRadius={'1rem'}
							borderColor={isDarkMode ? 'primraryDark' : 'secondaryLight'}
							borderWidth={2}
							display={'flex'}
							py={'.5rem'}
							px={'1rem'}
							alignItems={'center'}
							justifyContent={'center'}
							bg={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}
							color={isDarkMode ? 'bgDark.500' : 'bgLight.500'}>
							<Text mx={'2px'}>Get Started</Text>
							<HeartIcon
								width={20}
								height={20}
								color={isDarkMode ? 'secondaryDark' : 'primaryLight'}
							/>
						</Box>
					</Link>
					<Link to='/plash/discover/photos'>
						<Box
							borderRadius={'1rem'}
							borderColor={isDarkMode ? 'tertiaryDark.500' : 'primaryLight.500'}
							borderWidth={2}
							display={'flex'}
							py={'.5rem'}
							px={'1rem'}
							bg={'transparent'}
							alignItems={'center'}
							justifyContent={'center'}>
							<Text
								mx={'2px'}
								color={isDarkMode ? 'tertiaryDark.500' : 'primaryLight.500'}>
								Learn More
							</Text>
							<ArrowRightIcon
								width={20}
								height={20}
								color={isDarkMode ? 'tertiaryDark.500' : 'primaryLight.500'}
							/>
						</Box>
					</Link>
				</Stack>
			</Box>
			<Flex
				justifyContent={'center'}
				gap={'1.5rem'}
				my={'4rem'}
				pos={'relative'}
				zIndex={20}>
				<Box transform={'rotate(-10deg)'}>
					<CardPhotoRandom />
				</Box>
				<Box transform={'rotate(10deg)'}>
					<CardPhotoRandom />
				</Box>
				<Box transform={'rotate(-2deg)'}>
					<CardPhotoRandom />
				</Box>
				<Box transform={'rotate(10deg)'}>
					<CardPhotoRandom />
				</Box>
			</Flex>
		</>
	);
};

export default HeaderLayout;
