// @flow
import {
	Box,
	Flex,
	Image,
	Spacer,
	Stack,
	Text,
	Button,
} from '@chakra-ui/react';

import { COLORS_THEME } from '~constants/theme.const';

import { HeartIcon } from './icons';

import VerifiedIcon from './icons/verified.icon';

import { Link } from 'react-router-dom';
import ButtonMore from './ButtonMore.component';

type Props = {
	image: string;
	likes: number;
	userName: string;
};

function CardImage({ image, likes, userName }: Props) {
	const userNameLink = userName.split(' ').join('-').toLocaleLowerCase();

	return (
		<Box
			border={'2px'}
			borderColor={COLORS_THEME._PURPLE_LIGHT_}
			borderRadius={'1rem'}
			bg={'black'}
			width={'250px'}
			py='1rem'>
			<Image
				src={image}
				borderRadius={'10px'}
				boxSize={'230px'}
				objectFit={'cover'}
				margin={'auto'}
			/>
			<Box padding={'1rem'}>
				<Stack spacing={'1rem'}>
					<Link to={`/plash/user/${userNameLink}`}>
						<Box
							_hover={{
								backgroundColor: COLORS_THEME._GRAY_,
								transition: 'all 0.6s ease-in-out',
							}}
							display={'flex'}
							borderRadius={'1rem'}
							justifyContent={'space-between'}
							padding={'.5rem'}
							gap={'2.5rem'}
							overflow={'hidden'}
							alignItems={'center'}>
							<Text color={'cyanTheme.500'}>{userName.split(' ')[0]}</Text>
							<VerifiedIcon width={24} height={25} />
						</Box>
					</Link>
					<Flex>
						<ButtonMore path='/' text='view' key={userName} />
						<Spacer />
						<Button
							colorScheme={'grayTheme'}
							borderRadius={'.5rem'}
							border={'2px'}
							_hover={{
								backgroundColor: COLORS_THEME._GRAY_,
								transition: 'all 0.6s ease-in-out',
							}}
							color={COLORS_THEME._WHITE_}
							borderColor={COLORS_THEME._PURPLE_LIGHT_}
							variant={'outline'}
							rightIcon={
								<HeartIcon
									width={'20'}
									height={20}
									color={COLORS_THEME._PURPLE_LIGHT_}
								/>
							}>
							{likes}
						</Button>
					</Flex>
				</Stack>
			</Box>
		</Box>
	);
}

export default CardImage;
