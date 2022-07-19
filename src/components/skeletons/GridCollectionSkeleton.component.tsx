import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CardSkeletonCollection from './CardSkeletonCollection.component';
interface IGridCollectionSkeletonProps {
	length: number;
}

const GridCollectionsSkeleton: React.FC<IGridCollectionSkeletonProps> = ({
	length,
}: IGridCollectionSkeletonProps) => {
	const skeletons = new Array(length).fill(1);
	return (
		<Wrap
			spacing={'2.5rem'}
			justify={'center'}
			width={'100%'}
			alignItems={'center'}
			my={'3rem'}>
			{skeletons.map((_, index): any => {
				return (
					<WrapItem key={index}>
						<CardSkeletonCollection />
					</WrapItem>
				);
			})}
		</Wrap>
	);
};

export default GridCollectionsSkeleton;
