import React from 'react';

import {
	Badge,
	Box,
	Flex,
	Image,
	Spacer,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';

import { usePhoto } from '~lib/hooks';

import ButtonLikes from '~components/ButtonLikes.component';
import BoxImageDimensions from '~components/ImageDimensions.component';
import { TypeRelatedPhoto } from '~interfaces/Adapters.types';

const PhotoView: React.FC = () => {
	const { id } = useParams();

	const { photo } = usePhoto(id);
	return (
		<>
			{photo.image && (
				<Flex
					p={'2rem'}
					h={'100%'}
					justifyContent={''}
					minH={'90vh'}
					maxH={'90vh'}>
					<Box width={'50%'} display={'flex'} alignItems={'center'}>
						<Image
							borderRadius={'1rem'}
							src={photo.image}
							alt={photo.id}
							w={'100%'}
							objectFit={'contain'}
							maxH={'100%'}
							height={'100%'}
						/>
					</Box>

					<Box width={'50%'} p={'2rem'}>
						<Flex wrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
							<ButtonLikes likesProps={photo.likes} />
							<Spacer />
							<Wrap justifyContent={'flex-end'} alignItems={'flex-end'}>
								{photo.tags &&
									photo.tags.map((tag: string) => {
										return (
											<WrapItem key={tag}>
												<Badge
													colorScheme={'pink'}
													variant={'outline'}
													color={photo.color}>
													{tag}
												</Badge>
											</WrapItem>
										);
									})}
							</Wrap>
						</Flex>

						<Flex
							alignItems={'center'}
							justifyContent='space-between'
							gap={'1rem'}>
							<Flex
								flexDir={'column'}
								alignItems={'center'}
								gap={'.5rem'}
								my={'2rem'}>
								<Text color={'purpleTheme.500'}>{photo.width}</Text>
								<Box display={'flex'} alignItems={'center'} gap={'.5rem'}>
									<Text color={'purpleTheme.500'}>{photo.height}</Text>
									<BoxImageDimensions
										width={photo.width}
										height={photo.height}
										color={photo.color}
									/>
									<Text color={'purpleTheme.500'}>{photo.height}</Text>
								</Box>
								<Text color={'purpleTheme.500'}>{photo.width}</Text>
							</Flex>
							<Flex gap={'1rem'} alignItems={'center'} flexDir={'row-reverse'}>
								<Image
									src={photo?.profileImage}
									borderRadius={'1rem'}
									width={'5rem'}
									objectFit={'cover'}
								/>
								<Box my={'2rem'} textAlign={'end'}>
									<Text color={'purpleTheme.500'}>
										{'@'}
										{photo.userName}
									</Text>
									<Text color={'white'}>{photo.user}</Text>
									<Text color={'white'}>
										{photo.description && <Text>{photo.description}</Text>}
									</Text>
								</Box>
							</Flex>
						</Flex>
						<Flex wrap={'wrap'} gap={'2rem'} justifyContent={'center'}>
							{photo.relatedPhotos.map((photo: TypeRelatedPhoto) => {
								return (
									<Box key={photo.key}>
										<Image
											src={photo.image}
											width={'10rem'}
											borderRadius={'1rem'}
											objectFit={'contain'}
										/>
									</Box>
								);
							})}
						</Flex>
					</Box>
				</Flex>
			)}
		</>
	);
};

export default PhotoView;
