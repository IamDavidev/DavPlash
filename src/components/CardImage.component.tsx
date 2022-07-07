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
import { ArrowRightIcon, HeartIcon } from './icons';
import VerifiedIcon from './icons/verified.icon';

type Props = {
	image: string;
	likes: number;
	userName: string;
};

function CardImage({ image, likes, userName }: Props) {
	return (
		<Box
			border={'2px'}
			borderColor={COLORS_THEME._GRAY_}
			borderRadius={'1rem'}
			width={'280px'}
			py='1rem'>
			<Image
				src={image}
				borderRadius={'10px'}
				boxSize={'250px'}
				objectFit={'cover'}
				margin={'auto'}
			/>
			<Box padding={'1rem'}>
				<Stack spacing={'1rem'}>
					<Button
						rightIcon={<VerifiedIcon width={19} height={20} />}
						textAlign='left'
						variant={'ghost'}
						_hover={{
							backgroundColor: COLORS_THEME._GRAY_,
							transition: 'all 0.8s ease-in-out',
						}}>
						<Text color={'cyanTheme.500'}>{userName}</Text>
					</Button>
					<Flex>
						<Button
							colorScheme={'grayTheme'}
							borderRadius={'.5rem'}
							border={'2px'}
							color={COLORS_THEME._GRAY_}
							borderColor={COLORS_THEME._GRAY_}
							variant={'outline'}
							rightIcon={
								<ArrowRightIcon
									width={20}
									height={20}
									color={COLORS_THEME._CYAN_}
								/>
							}>
							See More
						</Button>
						<Spacer />
						<Button
							colorScheme={'grayTheme'}
							borderRadius={'.5rem'}
							border={'2px'}
							color={COLORS_THEME._GRAY_}
							borderColor={COLORS_THEME._GRAY_}
							variant={'outline'}
							rightIcon={
								<HeartIcon
									width={'20'}
									height={20}
									color={COLORS_THEME._CYAN_}
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
