import { Wrap, WrapItem } from '@chakra-ui/react';
import CardErrorImage from './cardErrorImage.component';

const GridImageError = () => {
	const lenght = new Array(10).fill(0);
	return (
		<Wrap
			py={'2rem'}
			spacing={'2rem'}
			spacingX={'3.5rem'}
			justify='center'
			width={'100%'}>
			{lenght.map((_, index): any => {
				return (
					<WrapItem key={index}>
						<CardErrorImage />
					</WrapItem>
				);
			})}
		</Wrap>
	);
};

export default GridImageError;
