import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
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
					fontSize={'6xl'}
					display='flex'
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					textAlign={'center'}
					width={'30ch'}
					my={'2rem'}>
					Discover, collect and sale extraordinary NFTs
				</Heading>
				<Stack direction='row' spacing={4} justifyContent={'center'}>
					<Button
						leftIcon={
							<HeartIcon width={20} height={20} color={COLORS_THEME._WHITE_} />
						}
						borderRadius={'1rem'}
						colorScheme='purpleTheme'
						variant='solid'>
						get started
					</Button>
					<Button
						rightIcon={
							<ArrowRightIcon
								width={20}
								height={20}
								color={COLORS_THEME._BLUE_}
							/>
						}
						colorScheme={'blueTheme.500'}
						color={'blueTheme.500'}
						variant='outline'>
						learn more
					</Button>
				</Stack>
			</Box>
			<Flex justifyContent={'space-evenly'} my={'4rem'}>
				<Box>
					<CardPhotoRandom />
				</Box>
				<Box>
					<CardPhotoRandom />
				</Box>
				<Box>
					<CardPhotoRandom />
				</Box>
				<Box>
					<CardPhotoRandom />
				</Box>
			</Flex>
		</>
	);
};

export default HeaderLayout;
