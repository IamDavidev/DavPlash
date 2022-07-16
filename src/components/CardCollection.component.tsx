import {
	Avatar,
	AvatarGroup,
	Box,
	Flex,
	Heading,
	Image,
	Spacer,
	Text,
} from '@chakra-ui/react';

import { COLORS_THEME } from '~constants/theme.const';

import ButtonMore from './ButtonMore.component';

interface CardCollectionProps {
	ImgCollection: {
		src: string;
		key: string;
	};
	title: string;
	totalPhotos: number;
	photos: any[];
}

const CardCollection = ({
	ImgCollection,
	title,
	totalPhotos,
	photos,
}: CardCollectionProps) => {
	return (
		<Box
			minWidth={'100%'}
			width={'400px'}
			maxWidth={'400px'}
			border={'2px'}
			borderColor={COLORS_THEME._PURPLE_LIGHT_}
			borderRadius={'1rem'}>
			<Flex gap={'1rem'} p={3}>
				<Image
					src={ImgCollection.src}
					alt={title}
					title={title}
					boxSize={'120px'}
					objectFit={'cover'}
					minWidth={'120px'}
					borderRadius={'1rem'}
				/>
				<Flex p={'.5rem'} flexDirection={'column'} width={'100%'}>
					<Box display='flex' flexDirection={'column'} gap='4px'>
						<Heading as={'h3'} fontSize={'lg'} color={'white'}>
							{title}
						</Heading>
						<Box
							fontSize={'sm'}
							gap={1}
							display={'flex'}
							color={'cyanTheme.300'}>
							<Text color={'blueTheme.500'}>{totalPhotos}</Text>
							<Text color={'white'} opacity={0.7}>
								{' '}
								photos
							</Text>
						</Box>
					</Box>
					<Spacer />
					<Flex flexDirection={'row'}>
						<AvatarGroup size='md' max={4}>
							{photos.map(photo => {
								return <Avatar name='' src={photo.src} key={photo.key} />;
							})}
						</AvatarGroup>

						<Spacer />

						<ButtonMore path='/' text='view' />
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

export default CardCollection;
