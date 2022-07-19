import React from 'react';
import { Box, Flex, Skeleton, Spacer } from '@chakra-ui/react';

const CardSkeletonImage: React.FC = () => {
	return (
		<Box borderRadius={'1rem'} width={'250px'} py={'1rem'}>
			<Skeleton
				height={'230px'}
				width={'230px'}
				margin={'auto'}
				startColor={'grayTheme.500'}
				endColor={'blackTheme.500'}
				bg={'black'}
				borderRadius={'10px'}></Skeleton>
			<Skeleton
				width={'auto'}
				height={'2rem'}
				startColor={'grayTheme.500'}
				endColor={'blackTheme.500'}
				my={'1rem'}
				mx={'1rem'}></Skeleton>
			<Flex mx={'1rem'}>
				<Skeleton
					width={'60%'}
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
					height={'2rem'}></Skeleton>
				<Spacer />
				<Skeleton
					width={'30%'}
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
					height={'2rem'}></Skeleton>
			</Flex>
		</Box>
	);
};

export default CardSkeletonImage;
