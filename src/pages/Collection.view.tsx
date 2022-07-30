import { Box, Flex, Heading, Image, Tag, Text, Wrap } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { COLORS_THEME } from '~constants/theme.const';
import { useCollection } from '~lib/hooks';

const CollectionView: React.FC = () => {
	const { id } = useParams();
	console.log('🚀 ~ file: collection.layout.tsx ~ line 8 ~ id', id);

	const {
		collection,
		setId,
	}: {
		collection: any;
		setId: Function;
	} = useCollection();
	console.log(
		'🚀 ~ file: collection.layout.tsx ~ line 9 ~ collection',
		collection
	);

	useEffect(() => {
		setId(id || '');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<>
			<Box position={'relative'} height={'15rem'}>
				<Image
					src={
						collection.preview_photos &&
						collection?.preview_photos[0].urls.regular
					}
					objectFit='cover'
					borderColor={'white'}
					borderWidth={'1px'}
					borderStyle={'solid'}
					borderRadius={'1rem'}
					width={'100%'}
					height={'15rem'}
				/>
				<Box
					pos={'absolute'}
					top={'0'}
					bottom={'0'}
					bg={'#0000009d'}
					width={'100%'}
					height={'100%'}>
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
									return <Tag key={tag.title}>{tag.title}</Tag>;
								})}
						</Wrap>
					</Flex>
				</Box>
				<Box mt={'1rem'} mb={'4rem'}>
					<Heading as={'h3'} color={'white'}>
						{collection.total_photos} photos
					</Heading>
				</Box>
				<Box></Box>
			</Box>
		</>
	);
};
export default CollectionView;
