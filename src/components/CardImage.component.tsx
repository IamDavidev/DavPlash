import { Box, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react';

import { COLORS_THEME } from '~constants/theme.const';

import VerifiedIcon from './icons/verified.icon';

import { Link } from 'react-router-dom';
import ButtonMore from './ButtonMore.component';
import ButtonLikes from './ButtonLikes.component';

type ICardImageProps = {
	image: string;
	likes: number;
	name: string;
	userName: string;
};

function CardImage({ image, likes, name, userName }: ICardImageProps) {
	return (
		<Box
			border={'2px'}
			borderColor={COLORS_THEME._PURPLE_LIGHT_}
			borderRadius={'1rem'}
			bg={'black'}
			width={'250px'}
			pt={1}>
			<Image
				src={image}
				borderRadius={'10px'}
				boxSize={'230px'}
				objectFit={'cover'}
				margin={'auto'}
			/>
			<Box padding={'1rem'}>
				<Stack spacing={'1rem'}>
					<Link to={`/plash/user/${userName}`}>
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
							<Text color={'blueTheme.500'}>{name}</Text>
							<VerifiedIcon width={24} height={25} />
						</Box>
					</Link>
					<Flex>
						<ButtonMore path='/' text='view' key={userName} />
						<Spacer />
						<ButtonLikes likesProps={likes} />
					</Flex>
				</Stack>
			</Box>
		</Box>
	);
}

export default CardImage;
