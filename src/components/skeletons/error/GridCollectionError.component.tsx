import { Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CardErrorCollection from './CardErrrorCollection.componenet';

const GridCollectionError: React.FC = () => {
	const length = new Array(10).fill(0);
	return (
		<>
			<Wrap
				spacing={'2.5rem'}
				justify={'center'}
				width={'100%'}
				alignItems={'center'}
				my={'3rem'}>
				{length.map((_, index): any => {
					return (
						<WrapItem key={index}>
							<CardErrorCollection />
						</WrapItem>
					);
				})}
			</Wrap>
		</>
	);
};

export default GridCollectionError;
