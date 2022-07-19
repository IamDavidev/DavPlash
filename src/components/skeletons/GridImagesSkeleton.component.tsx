import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CardSkeletonImage from './CardSkeletonImage.component';

interface IGridCollectionSkeletonProps {
	length: number;
}

const GridImagesSkeleton: React.FC<IGridCollectionSkeletonProps> = ({
	length,
}: IGridCollectionSkeletonProps) => {
	const skeletons = new Array(length).fill(1);
	return (
		<Wrap
			py={'2rem'}
			spacing={'2rem'}
			spacingX={'3.5rem'}
			justify='center'
			width={'100%'}>
			{skeletons.map((_, index): any => {
				return (
					<WrapItem key={index}>
						<CardSkeletonImage />
					</WrapItem>
				);
			})}
		</Wrap>
	);
};

export default GridImagesSkeleton;
