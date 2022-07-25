import { Box } from '@chakra-ui/react';
import React from 'react';

interface ImageDimensionsProps {
	width: number;
	height: number;
	color: string;
}

const BoxImageDimensions: React.FC<ImageDimensionsProps> = ({
	width,
	height,
	color,
}) => {
	if (width > height) {
		return (
			<Box
				width={'8rem'}
				height={'4rem'}
				bg={color}
				borderRadius={'.5rem'}></Box>
		);
	}

	return (
		<Box width={'4rem'} height={'8rem'} bg={color} borderRadius={'.5rem'}></Box>
	);
};

export default BoxImageDimensions;
