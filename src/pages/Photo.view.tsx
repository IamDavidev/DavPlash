import React from 'react';

import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Code,
	Divider,
	Flex,
	Heading,
	Image,
	Spacer,
	Tag,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';

import { Link, useParams } from 'react-router-dom';

import { useIsDarkMode, usePhoto } from '~lib/hooks';

import ButtonLikes from '~components/ButtonLikes.component';

import BoxImageDimensions from '~components/ImageDimensions.component';
import { TypeRelatedPhoto } from '~interfaces/Adapters.types';

const PhotoView: React.FC = () => {
	const isDarkMode = useIsDarkMode();

	const { id } = useParams();
	const { photo, error } = usePhoto(id);

	if (error.isError) {
		return (
			<>
				<Box
					minH={'100vh'}
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}>
					<Heading as={'h2'}>{error.message}</Heading>
					<Code>{error?.code}</Code>
				</Box>
			</>
		);
	}
	return (
		<>
			<Breadcrumb
				fontWeight={'bold'}
				fontSize={'md'}
				color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
				<BreadcrumbItem>
					<Link to='/plash'>Discover</Link>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<Link to='/plash/discover/photos'>Photos</Link>
				</BreadcrumbItem>

				<BreadcrumbItem
					isCurrentPage
					color={isDarkMode ? 'primaryDark.500' : 'cyanLight.500'}>
					<Link to={`/plash/discover/photos/${id}`}>{id}</Link>
				</BreadcrumbItem>
			</Breadcrumb>
			{photo.image && (
				<>
					<Flex p={'2rem'} h={'100%'} minH={'90vh'}>
						<Box width={'50%'} display={'flex'} alignItems={'center'}>
							<Image
								src={photo.image}
								alt={photo.id}
								w={'100%'}
								objectFit={'contain'}
								maxH={'100vh'}
								height={'100%'}
							/>
						</Box>
						<Box width={'50%'} px={'2rem'} pos={'sticky'} top={0}>
							<Flex
								wrap={'wrap'}
								justifyContent={'flex-start'}
								alignItems={'center'}>
								<ButtonLikes likesProps={photo.likes} />
								<Divider
									orientation={'horizontal'}
									my={'1rem'}
									bg={photo.color}
								/>
								<Spacer />
								<Wrap justifyContent={'flex-end'} alignItems={'flex-end'}>
									{photo.tags &&
										photo.tags.map((tag: string) => {
											return (
												<WrapItem key={tag}>
													<Tag
														colorScheme={'pink'}
														variant={'outline'}
														color={photo.color}>
														{tag}
													</Tag>
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
									<Text
										color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}>
										{photo.width}
									</Text>
									<Box display={'flex'} alignItems={'center'} gap={'.5rem'}>
										<Text
											color={
												isDarkMode ? 'primaryDark.500' : 'primaryLight.500'
											}>
											{photo.height}
										</Text>
										<BoxImageDimensions
											width={photo.width}
											height={photo.height}
											color={photo.color}
										/>
										<Text
											color={
												isDarkMode ? 'primaryDark.500' : 'primaryLight.500'
											}>
											{photo.height}
										</Text>
									</Box>
									<Text
										color={
											isDarkMode ? 'primaryDark.500' : 'primaryLight.5000'
										}>
										{photo.width}
									</Text>
								</Flex>
								<Flex
									gap={'1rem'}
									alignItems={'center'}
									flexDir={'row-reverse'}>
									<Image
										src={photo?.profileImage}
										borderRadius={'1rem'}
										width={'6rem'}
										objectFit={'cover'}
									/>
									<Box my={'2rem'} color={'primaryDark.500'} textAlign={'end'}>
										<Link to={`/plash/discover/users/${photo.userName}`}>
											{'@'}
											{photo.userName}
										</Link>
										<Text
											color={
												isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'
											}>
											{photo.user}
										</Text>
										<Box
											color={
												isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'
											}
											my={'.5rem'}>
											{photo.description ? (
												<Text>{photo.description}</Text>
											) : (
												<Text>{'No description'}</Text>
											)}
										</Box>
									</Box>
								</Flex>
							</Flex>
							<Divider
								orientation={'horizontal'}
								bg={photo.color}
								mb={'1rem'}
							/>
							<Heading
								as={'h3'}
								color={isDarkMode ? 'primaryDark' : 'primarySecondary'}
								fontSize={'3xl'}>
								{'Related photos'}
							</Heading>
							<Flex
								wrap={'wrap'}
								gap={'2rem'}
								justifyContent={'center'}
								my={'1rem'}>
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
				</>
			)}
		</>
	);
};

export default PhotoView;
