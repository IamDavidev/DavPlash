import React from 'react';

import { Box, Flex, Spacer } from '@chakra-ui/react';

const CardErrorImage: React.FC = () => {
	return (
		<Box
			border={'1px solid red'}
			borderRadius={'1rem'}
			width={'250px'}
			my={'1rem'}
			py={'1rem'}>
			<Box
				height={'230px'}
				border={'1px solid red'}
				width={'230px'}
				margin={'auto'}
				bg={'grayTheme.500'}
				borderRadius={'10px'}></Box>
			<Box
				width={'auto'}
				border={'1px solid red'}
				height={'2rem'}
				bg={'grayTheme.500'}
				borderRadius={'1rem'}
				my={'1rem'}
				mx={'1rem'}></Box>
			<Flex mx={'1rem'}>
				<Box
					border={'1px solid red'}
					width={'60%'}
					borderRadius={'1rem'}
					bg={'grayTheme.500'}
					height={'2rem'}></Box>
				<Spacer />
				<Box
					border={'1px solid red'}
					width={'30%'}
					borderRadius={'1rem'}
					bg={'grayTheme.500'}
					height={'2rem'}></Box>
			</Flex>
		</Box>
	);
};

export default CardErrorImage;
