import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CardPhotoRandom from '~components/CardPhotoRandom.component';
import { ArrowRightIcon, HeartIcon } from '~components/icons';
import { COLORS_THEME } from '~constants/theme.const';

const HeaderLayout = () => {
	return (
		<>
			<Box
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
					bgGradient={`linear(to-b,${COLORS_THEME._PURPLE_}, ${COLORS_THEME._BLACK_})`}
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
							borderColor={'purpleTheme.500'}
							borderWidth={2}
							display={'flex'}
							py={'.5rem'}
							px={'1rem'}
							alignItems={'center'}
							justifyContent={'center'}
							bg={'purpleTheme.500'}
							color={COLORS_THEME._BLACK_}>
							<Text>Get Started</Text>
							<HeartIcon width={20} height={20} color={COLORS_THEME._BLACK_} />
						</Box>
					</Link>
					<Link to='/plash/discover/photos'>
						<Box
							borderRadius={'1rem'}
							borderColor={'blueTheme.500'}
							borderWidth={2}
							display={'flex'}
							py={'.5rem'}
							px={'1rem'}
							bg={'transparent'}
							alignItems={'center'}
							justifyContent={'center'}>
							<Text color={'blueTheme.500'}>Learn More</Text>
							<ArrowRightIcon
								width={20}
								height={20}
								color={COLORS_THEME._BLUE_}
							/>
						</Box>
					</Link>
				</Stack>
			</Box>
			<Flex justifyContent={'center'} gap={'1.5rem'} my={'4rem'}>
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
