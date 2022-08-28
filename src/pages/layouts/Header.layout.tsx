import { COLORS_THEME } from '@/config/theme.config';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import CardPhotoRandom from '~components/CardPhotoRandom.component';
import { ArrowRightIcon, HeartIcon } from '~components/icons';
import { LoggedInContext } from '~lib/context/loggenIn.context';
import { useIsDarkMode } from '~lib/hooks';

const HeaderLayout: FC = (): JSX.Element => {
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
					color={isDarkMode ? 'white' : 'black'}
					fontSize={{
						sm: '2.5rem',
						lg: '3.5rem',
					}}
					display='flex'
					alignItems={'center'}
					textAlign={'center'}
					my={'2rem'}>
					Discover, collect and sale extraordinary Photos
				</Heading>
				<Stack
					direction={{
						sm: 'column',
						md: 'row',
					}}
					spacing={4}
					justifyContent={'center'}>
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
							px={'2rem'}
							alignItems={'center'}
							justifyContent={'center'}
							bg={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
							color={isDarkMode ? 'bgDark.500' : 'bgLight.500'}>
							<Text mx={'2px'}>Collections</Text>
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
							px={'2rem'}
							bg={'transparent'}
							alignItems={'center'}
							justifyContent={'center'}>
							<Text
								mx={'2px'}
								color={isDarkMode ? 'tertiaryDark.500' : 'primaryLight.500'}>
								Photos
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
				overflow={'hidden'}
				gap={'1.5rem'}
				my={'4rem'}
				padding={'1rem'}
				pos={'relative'}
				zIndex={20}>
				<Box
					transform={'rotate(-10deg)'}
					display={{
						sm: 'none',
						xl: 'block',
					}}>
					<CardPhotoRandom />
				</Box>
				<Box
					transform={'rotate(10deg)'}
					display={{
						sm: 'none',
						lg: 'block',
					}}>
					<CardPhotoRandom />
				</Box>
				<Box transform={'rotate(-2deg)'}>
					<CardPhotoRandom />
				</Box>
				<Box
					display={{
						sm: 'none',
						xl: 'block',
					}}
					transform={'rotate(10deg)'}>
					<CardPhotoRandom />
				</Box>
			</Flex>
		</>
	);
};

export default HeaderLayout;
