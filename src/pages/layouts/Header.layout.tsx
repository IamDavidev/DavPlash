import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CardPhotoRandom from '~components/CardPhotoRandom.component';
import { ArrowRightIcon, HeartIcon } from '~components/icons';
import { COLORS_THEME } from '@/config/theme.config';
import { useIsDarkMode } from '~lib/hooks';
import { useContext } from 'react';
import { LoggedInContext } from '~lib/context/loggenIn.context';

const HeaderLayout = () => {
	const { loggedIn } = useContext(LoggedInContext);

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
					my={'2rem'}>
					Discover, collect and sale extraordinary Photos
				</Heading>
				<Stack direction='row' spacing={4} justifyContent={'center'}>
					<Link to={loggedIn ? '/plash/discover/collections' : '/plash/login'}>
						<Box
							borderRadius={'1rem'}
							borderColor={isDarkMode ? 'primraryDark.500' : 'primaryLight.500'}
							borderWidth={2}
							display={'flex'}
							py={'.5rem'}
							_hover={
								isDarkMode
									? {
											boxShadow: 'shadowDark',
											transition: 'box-shadow 0.35s ease-in-out',
									  }
									: {
											boxShadow: 'shadowLight',
											transition: 'box-shadow 0.35s ease-in-out',
									  }
							}
							px={'1rem'}
							alignItems={'center'}
							justifyContent={'center'}
							bg={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
							color={isDarkMode ? 'bgDark.500' : 'bgLight.500'}>
							<Text mx={'2px'}>Get Started Collections</Text>
							<HeartIcon
								width={20}
								height={20}
								color={isDarkMode ? 'secondaryDark' : 'primaryLight'}
							/>
						</Box>
					</Link>
					<Link to={loggedIn ? '/plash/discover/photos' : '/plash/login'}>
						<Box
							borderRadius={'1rem'}
							borderColor={isDarkMode ? 'tertiaryDark.500' : 'primaryLight.500'}
							_hover={
								isDarkMode
									? {
											boxShadow: 'shadowDark',
											transition: 'box-shadow 0.35s ease-in-out',
									  }
									: {
											boxShadow: 'shadowLight',
											transition: 'box-shadow 0.35s ease-in-out',
									  }
							}
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
								Learn More Photos
							</Text>
							<ArrowRightIcon
								width={20}
								height={20}
								color={
									isDarkMode
										? COLORS_THEME.DARK._TERTIARY_
										: COLORS_THEME.LIGHT._PRIMARY_
								}
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
