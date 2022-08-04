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

import { useIsDarkMode } from '~lib/hooks';

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
	id: string;
}

const CardCollection = ({
	ImgCollection,
	title,
	totalPhotos,
	tags,
	id,
}: CardCollectionProps) => {
	const isDarkMode = useIsDarkMode();

	return (
		<Box
			bg={isDarkMode ? 'blackDark.500' : 'whiteLight.500'}
			minWidth={'100%'}
			width={'400px'}
			maxWidth={'400px'}
			border={'2px'}
			borderColor={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
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
						<Heading
							as={'h3'}
							fontSize={'lg'}
							color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
							{title}
						</Heading>
						<Box
							fontSize={'sm'}
							gap={1}
							display={'flex'}
							color={'cyanTheme.300'}>
							<Text
								color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
								{totalPhotos}
							</Text>
							<Text
								color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}
								opacity={0.7}>
								{' '}
								photos
							</Text>
						</Box>
					</Box>
					<Spacer />
					<Flex flexDirection={'row'} alignItems={'center'}>
						<Popover colorScheme={'blue'}>
							<PopoverTrigger>
								<Button
									bg={isDarkMode ? 'blackDark' : 'whiteLight'}
									_hover={{ bg: 'none' }}>
									<Text
										mx={'.5rem'}
										color={
											isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'
										}>
										Tags
									</Text>
									<TagIcon
										width={20}
										height={21}
										color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
									/>
								</Button>
							</PopoverTrigger>
							<PopoverContent
								bg={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}
								borderColor={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}>
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
													colorScheme={isDarkMode ? 'pink' : 'blue'}>
													{tag}
												</Tag>
											);
										})}
								</PopoverBody>
							</PopoverContent>
						</Popover>
						<Spacer />
						<ButtonMore
							path={`/plash/discover/collections/${id}`}
							text='view'
						/>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

export default CardCollection;
