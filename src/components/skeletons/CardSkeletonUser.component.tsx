import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';

import React from 'react';

export const CardSkeletonUser: React.FC = () => {
	return (
		<>
			<Flex gap={'1rem'}>
				<SkeletonCircle
					width={'130px'}
					height={'130px'}
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
				/>
				<Flex gap={'0.5rem'} flexDir={'column'}>
					<Skeleton
						width={'120px'}
						height={'20px'}
						startColor={'grayTheme.500'}
						endColor={'blackTheme.500'}
					/>
					<Skeleton
						width={'120px'}
						height={'20px'}
						startColor={'grayTheme.500'}
						endColor={'blackTheme.500'}
					/>
					<Skeleton
						width={'120px'}
						height={'40px'}
						mt={'1rem'}
						startColor={'grayTheme.500'}
						endColor={'blackTheme.500'}
					/>
				</Flex>
			</Flex>
		</>
	);
};

export default CardSkeletonUser;
