/**
 * @controls {-setPage -search -setPerpage}
 */

import { Flex, Box, Text, Kbd } from '@chakra-ui/react';
import React from 'react';
import { ControlPage, ControlQuery } from './controls';

interface IcontrolsProps {
	setPage: (page: number) => void;
	page: number;
	setQuery: (query: string) => void;
}

const Controls: React.FC<IcontrolsProps> = ({ setPage, page, setQuery }) => {
	return (
		<>
			<Flex justifyContent={'space-between'}>
				<Box
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					gap={'.5rem'}
					alignItems={'center'}>
					<Text color={'purpleTheme.300'} fontSize={'1.4rem'}>
						Page
					</Text>
					<ControlPage setPage={setPage} page={page} />
				</Box>
				<Box
					display={'flex'}
					flexDir={'column'}
					gap={'.5rem'}
					justifyContent={'center'}
					alignItems={'center'}>
					<Text color={'purpleTheme.300'} fontSize={'1.2rem'}>
						<Kbd color='black'>ctrl</Kbd> + <Kbd color='black'>K</Kbd>
					</Text>
					<ControlQuery setQuery={setQuery} />
				</Box>
			</Flex>
		</>
	);
};

export default Controls;
