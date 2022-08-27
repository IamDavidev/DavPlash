import React from 'react';
import { Box, Flex, Skeleton, Spacer } from '@chakra-ui/react';

const CardSkeletonImage: React.FC = (): JSX.Element => {
	return (
		<Box borderRadius={'1rem'} width={'250px'} py={'1rem'}>
			<Skeleton
				height={'230px'}
				borderWidth={'1px'}
				borderStyle={'solid'}
				borderColor={'red'}
				width={'230px'}
				margin={'auto'}
				startColor={'hoverDark.500'}
				endColor={'blackDark.500'}
				bg={'black'}
				borderRadius={'10px'}></Skeleton>
			<Skeleton
				width={'auto'}
				height={'2rem'}
				startColor={'hoverDark.500'}
				endColor={'blackDark.500'}
				my={'1rem'}
				mx={'1rem'}></Skeleton>
			<Flex mx={'1rem'}>
				<Skeleton
					width={'60%'}
					startColor={'hoverDark.500'}
					endColor={'blackDark.500'}
					height={'2rem'}></Skeleton>
				<Spacer />
				<Skeleton
					width={'30%'}
					endColor={'blackDark.500'}
					startColor={'hoverDark.500'}
					height={'2rem'}></Skeleton>
			</Flex>
		</Box>
	);
};

export default CardSkeletonImage;
