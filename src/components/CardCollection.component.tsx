import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Spacer,
	Tag,
	Text,
} from '@chakra-ui/react';

import { COLORS_THEME } from '~constants/theme.const';

import ButtonMore from './ButtonMore.component';
import { TagIcon } from './icons';

interface CardCollectionProps {
	ImgCollection: {
		src: string;
		key: string;
	};
	title: string;
	totalPhotos: number;
	photos?: any[];
	tags: string[];
}

const CardCollection = ({
	ImgCollection,
	title,
	totalPhotos,
	tags,
}: CardCollectionProps) => {
	return (
		<Box
			bg={'black'}
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
					<Flex flexDirection={'row'} alignItems={'center'}>
						<Popover colorScheme={'blue'}>
							<PopoverTrigger>
								<Button colorScheme={'black'}>
									<Text mx={'.5rem'}>Tags</Text>
									<TagIcon
										width={20}
										height={21}
										color={COLORS_THEME._PURPLE_}
									/>
								</Button>
							</PopoverTrigger>
							<PopoverContent bg={'black'} borderColor={'purpleTheme.500'}>
								<PopoverArrow />
								<PopoverCloseButton color={'purpleTheme.500'} />
								<PopoverHeader color={'blueTheme.500'}>{title}</PopoverHeader>
								<PopoverBody>
									{tags &&
										tags.map((tag: string) => {
											return (
												<Tag
													key={tag}
													color={'purpleTheme.500'}
													mx={2}
													variant={'outline'}
													colorScheme={'pink'}>
													{tag}
												</Tag>
											);
										})}
								</PopoverBody>
							</PopoverContent>
						</Popover>
						<Spacer />
						<ButtonMore path='/' text='view' />
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

export default CardCollection;
