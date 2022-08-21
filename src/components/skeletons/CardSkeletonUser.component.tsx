import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';

import React from 'react';

export const CardSkeletonUser: React.FC = (): JSX.Element => {
	return (
		<>
			<Flex gap={'1rem'}>
				<SkeletonCircle
					width={'130px'}
					height={'130px'}
					startColor={'hoverDark.500'}
					endColor={'blackDark.500'}
				/>
				<Flex gap={'0.5rem'} flexDir={'column'}>
					<Skeleton
						width={'120px'}
						height={'20px'}
						startColor={'hoverDark.500'}
						endColor={'blackDark.500'}
					/>
					<Skeleton
						width={'120px'}
						height={'20px'}
						startColor={'hoverDark.500'}
						endColor={'blackDark.500'}
					/>
					<Skeleton
						width={'120px'}
						height={'40px'}
						mt={'1rem'}
						startColor={'hoverDark.500'}
						endColor={'blackDark.500'}
					/>
				</Flex>
			</Flex>
		</>
	);
};

export default CardSkeletonUser;
