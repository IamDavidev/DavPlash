import React from 'react';

import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import { GridCollectionSkeleton } from '~components/skeletons';
import GridCollectionError from '~components/skeletons/error/GridCollectionError.component';
import useCollections from '~lib/hooks/useColllections.hook';
import GridCollections from './layouts/GridCollections.layout';

const CollectionsView: React.FC = () => {
	const {
		collections,
		error,
		isLoading,
		page,
		totalCollections,
		setPageCollections,
		setQueryCollections,
	} = useCollections();
	if (error.isError)
		return (
			<>
				<Flex
					width={'100%'}
					justifyContent={'space-between'}
					fontSize={'2.5rem'}
					alignItems={'center'}>
					<Text>{error.message}</Text>
				</Flex>
				<GridCollectionError />
			</>
		);

	return (
		<>
			<Box>
				<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
					<BreadcrumbItem>
						<Link to='/plash'>Discover</Link>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
						<Text>Collections</Text>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<Text color={'blueTheme.500'}>
						<PrevIcon width={'4rem'} height={'4.5rem'} /> Discover
					</Text>
					more Collections <NextIcon width={'4rem'} height={'4.5rem'} />
				</Heading>
				<>
					<Controls
						page={page}
						setPage={setPageCollections}
						setQuery={setQueryCollections}
					/>
					{isLoading && <GridCollectionSkeleton length={totalCollections} />}
				</>
				{isLoading && <GridCollectionSkeleton length={totalCollections} />}
				<GridCollections collections={collections} />
			</Box>
		</>
	);
};

export default CollectionsView;
