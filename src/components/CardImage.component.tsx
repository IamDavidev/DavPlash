import { Box, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react';

import { COLORS_THEME } from '@/config/theme.config';

import VerifiedIcon from './icons/verified.icon';

import { Link } from 'react-router-dom';
import ButtonMore from './ButtonMore.component';
import ButtonLikes from './ButtonLikes.component';
import { useIsDarkMode } from '~lib/hooks';

type ICardImageProps = {
	image: string;
	likes: number;
	name: string;
	userName: string;
	id: string;
};

function CardImage({
	image,
	likes,
	name,
	userName,
	id,
}: ICardImageProps): JSX.Element {
	const isDarkMode = useIsDarkMode();

	return (
		<Box
			data-test-id='image-card'
			border={'2px'}
			borderColor={
				isDarkMode
					? COLORS_THEME.DARK._SECONDARY_
					: COLORS_THEME.LIGHT._PRIMARY_
			}
			borderRadius={'1rem'}
			bg={isDarkMode ? 'blackDark.500' : 'whiteLight.500'}
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
					<Link to={`/plash/discover/users/${userName}`}>
						<Box
							_hover={
								isDarkMode
									? {
											backgroundColor: COLORS_THEME.DARK._HOVER_,
											transition: 'all 0.6s ease-in-out',
									  }
									: {
											backgroundColor: COLORS_THEME.LIGHT._HOVER_,
											transition: 'all 0.6s ease-in-out',
									  }
							}
							display={'flex'}
							borderRadius={'1rem'}
							justifyContent={'space-between'}
							padding={'.5rem'}
							gap={'2.5rem'}
							overflow={'hidden'}
							alignItems={'center'}>
							<Text
								color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
								{name.split(' ')[0]}
							</Text>
							<VerifiedIcon width={24} height={25} />
						</Box>
					</Link>
					<Flex>
						<ButtonMore
							data-test-id='card-image-btn-view'
							path={`/plash/discover/photos/${id}`}
							text='view'
							key={userName}
						/>
						<Spacer />
						<ButtonLikes likesProps={likes} />
					</Flex>
				</Stack>
			</Box>
		</Box>
	);
}

export default CardImage;
