import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CardSkeletonUser from './CardSkeletonUser.component';

interface IGridUsersSkeletonProps {
	length: number;
}

const GridUserSkeletons: React.FC<IGridUsersSkeletonProps> = ({
	length,
}): JSX.Element => {
	const skeletons = new Array(length).fill('');
	return (
		<>
			<Wrap
				spacing={'2.5rem'}
				justify={'center'}
				width={'100%'}
				alignItems={'center'}
				my={'3rem'}>
				{skeletons.map((_, index): any => {
					return (
						<WrapItem key={index}>
							<CardSkeletonUser />
						</WrapItem>
					);
				})}
			</Wrap>
		</>
	);
};

export default GridUserSkeletons;
