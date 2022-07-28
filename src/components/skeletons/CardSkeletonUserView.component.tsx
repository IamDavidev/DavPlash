import {
	Box,
	Divider,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import React from 'react';

const CardSkeletonUserView: React.FC = () => {
	return (
		<>
			<Box
				display={'flex'}
				justifyContent={'center'}
				flexDir={'column'}
				alignItems={'center'}
				width={'100%'}
				my={'3rem'}>
				<SkeletonCircle
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
					size='8rem'
					mb={'1rem'}
				/>
				<Skeleton
					width='300px'
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
					height={'50px'}
				/>
				<Skeleton
					width='200px'
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
					height={'35px'}
					my={'.2rem'}
				/>
				<Skeleton
					width='700px'
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
					height={'70px'}
					my={'1.5rem'}
				/>
				<SkeletonText
					width='700px'
					height={'70px'}
					my={'1.5rem'}
					noOfLines={5}
					startColor={'grayTheme.500'}
					endColor={'blackTheme.500'}
				/>
				<Wrap justify={'center'} my={'1rem'}>
					{Array(30)
						.fill('')
						.map((_, index) => {
							return (
								<WrapItem key={index}>
									<Skeleton
										width='100px'
										height={'20px'}
										startColor={'grayTheme.500'}
										endColor={'blackTheme.500'}
									/>
								</WrapItem>
							);
						})}
				</Wrap>
				<Divider colorScheme={'white'} my={'1rem'} />
				<Wrap justify={'center'} spacing={'.5rem'} width={'100%'}>
					{Array(12)
						.fill('')
						.map((_, index) => {
							return (
								<WrapItem key={index}>
									<Skeleton
										w={'400px'}
										height={'600px'}
										startColor={'grayTheme.500'}
										endColor={'blackTheme.500'}
									/>
								</WrapItem>
							);
						})}
				</Wrap>
			</Box>
		</>
	);
};

export default CardSkeletonUserView;
