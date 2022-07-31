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
import { COLORS_THEME } from '~constants/theme.const';
import { IAdapterPhotos } from '~interfaces/Adapters.types';
import { useCollection } from '~lib/hooks';

const CollectionView: React.FC = () => {
	const { id } = useParams();
	console.log('🚀 ~ file: collection.layout.tsx ~ line 8 ~ id', id);

	const { collection, setId, photosCollection, setPerPage, perPage } =
		useCollection();
	useEffect(() => {
		if (id) setId(id as string);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<>
			<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
				<BreadcrumbItem>
					<Link to='/plash'>Discover</Link>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<Link to='/plash/discover/collections'>Collections</Link>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
					<Text>collection</Text>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box>
				<Flex
					flexDir={'row'}
					justifyContent={'space-between'}
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
								bgClip={'text'}
								bgGradient={`linear(to-b,${COLORS_THEME._PURPLE_},${COLORS_THEME._NAV_LIGHT_})`}>
								{collection.title}
							</Heading>
							{collection.description && (
								<Text color={'white'}>{collection.description}</Text>
							)}
							<Wrap>
								{collection.tags &&
									collection?.tags.map((tag: any) => {
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
						{collection.totalPhotos}
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
					onClick={() => setPerPage(perPage + 12)}
					colorScheme={'purpleTheme'}>
					<Text>Load more</Text>
				</Button>
			</Box>
		</>
	);
};
export default CollectionView;
