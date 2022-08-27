import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Flex,
	Heading,
	Tag,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import CardImage from '~components/CardImage.component';
import CardImageRotate from '~components/CardImageRotate.component';
import { IAdapterPhotos } from '~interfaces/Adapters.types';
import { useCollection, useIsDarkMode } from '~lib/hooks';

const CollectionView: React.FC = (): JSX.Element => {
	const { id } = useParams();

	const isDarkMode = useIsDarkMode();

	const {
		collection,
		setId,
		photosCollection,
		setPerPage,
		perPage,
		isLoading,
	} = useCollection();

	useEffect((): void => {
		if (id) setId(id as string);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<>
			<Breadcrumb
				fontWeight={'bold'}
				fontSize={'xl'}
				color={isDarkMode ? '#fff' : '#000'}>
				<BreadcrumbItem>
					<Link to='/plash'>Discover</Link>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<Link to='/plash/discover/collections'>Collections</Link>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
					<Text>{collection.title.replaceAll(' ', '-')}</Text>
				</BreadcrumbItem>
			</Breadcrumb>
			{isLoading && <Box minH={'100vh'}></Box>}
			<Box>
				<Flex
					flexDir={'row'}
					justifyContent={'space-between'}
					flexDirection={{
						sm: 'column',
						lg: 'row',
					}}
					alignItems={'center'}>
					<Box width={'100%'} height={'100%'}>
						<Flex
							justifyContent={'center'}
							alignItems={'flex-start'}
							p={'1rem'}
							gap={'1rem'}
							height={'100%'}
							flexDir={'column'}>
							<Heading
								as={'h2'}
								fontSize={'6xl'}
								color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}>
								{collection.title}
							</Heading>
							{collection.description && (
								<Text color={'white'}>{collection.description}</Text>
							)}
							<Wrap>
								{collection.tags &&
									collection?.tags.map((tag: any): JSX.Element => {
										return (
											<Tag
												key={tag.key}
												color={'purpleTheme.500'}
												variant={'outline'}
												colorScheme={'purple'}>
												{tag.value}
											</Tag>
										);
									})}
							</Wrap>
						</Flex>{' '}
					</Box>
					{collection.photosCollection && (
						<CardImageRotate photos={collection.photosCollection} />
					)}
				</Flex>
				<Box mt={'1rem'} mb={'4rem'}>
					<Heading as={'h3'} color={'purpleTheme.500'}>
						{collection.totalPhotos} photos
					</Heading>
				</Box>
				<Wrap
					py={'2rem'}
					spacing={'2rem'}
					spacingX={'3.5rem'}
					justify='center'
					width={'100%'}>
					{photosCollection &&
						photosCollection.map((photo: IAdapterPhotos) => {
							return (
								<WrapItem key={photo.id}>
									<CardImage
										id={photo.id}
										image={photo.images.regular}
										likes={photo.likes}
										name={photo.user.name}
										userName={photo.user.username}
										key={photo.id}
									/>
								</WrapItem>
							);
						})}
				</Wrap>
				<Button
					onClick={(): void => setPerPage(perPage + 12)}
					colorScheme={'blue'}>
					<Text>Load more</Text>
				</Button>
			</Box>
		</>
	);
};
export default CollectionView;
