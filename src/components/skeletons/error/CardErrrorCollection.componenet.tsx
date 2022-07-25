import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';

const CardErrorCollection: React.FC = () => {
	return (
		<>
			<Flex
				p={3}
				width='400px'
				gap='1rem'
				border={'1px solid red'}
				borderRadius={'1rem'}>
				<Box
					minWidth={'150px'}
					border={'1px solid red'}
					borderRadius={'1rem'}
					height={'150px'}
					bg={'grayTheme.500'}
				/>
				<Flex flexDirection={'column'} width='100%'>
					<Box
						bg={'grayTheme.500'}
						width={'100%'}
						border={'1px solid red'}
						borderRadius={'1rem'}
						height={'2rem'}
						margin='0'></Box>
					<Box
						border={'1px solid red'}
						borderRadius={'1rem'}
						bg={'grayTheme.500'}
						width={'40%'}
						height={'2rem'}
						my='1'></Box>
					<Spacer />
					<Flex>
						<Box
							bg={'grayTheme.500'}
							width={'2rem'}
							height={'2rem'}
							border={'1px solid red'}
							borderRadius={'50%'}
						/>
						<Spacer />
						<Box
							border={'1px solid red'}
							borderRadius={'1rem'}
							bg={'grayTheme.500'}
							width={'5rem'}
							height={'2rem'}></Box>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};

export default CardErrorCollection;
