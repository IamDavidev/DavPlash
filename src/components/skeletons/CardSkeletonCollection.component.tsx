import React from 'react';

import { Flex, Skeleton, Spacer } from '@chakra-ui/react';

const CardSkeletonCollection: React.FC = () => {
	return (
		<>
			<Flex p={3} width='400px' gap='1rem'>
				<Skeleton
					minWidth={'150px'}
					borderRadius={'1rem'}
					height={'150px'}
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
				/>
				<Flex flexDirection={'column'} width='100%'>
					<Skeleton
						startColor={'grayTheme.500'}
						endColor={'blackTheme.500'}
						width={'100%'}
						height={'2rem'}
						margin='0'></Skeleton>
					<Skeleton
						startColor={'grayTheme.500'}
						endColor={'blackTheme.500'}
						width={'40%'}
						height={'2rem'}
						my='1'></Skeleton>
					<Spacer />
					<Flex>
						<Skeleton
							startColor={'grayTheme.500'}
							endColor={'blackTheme.500'}
							width={'5rem'}
							height={'2rem'}></Skeleton>
						<Spacer />
						<Skeleton
							startColor={'grayTheme.500'}
							endColor={'blackTheme.500'}
							width={'5rem'}
							height={'2rem'}></Skeleton>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default CardSkeletonCollection;
