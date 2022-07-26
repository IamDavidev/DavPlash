/**
 * @controls {-setPage -search -setPerpage}
 */

import { Flex, Box, Text, Kbd, Spacer } from '@chakra-ui/react';
import React from 'react';
import { ControlPage, ControlQuery } from './controls';
import ControlOrderBy from './controls/controlOrderBY.coponent';

interface IcontrolsProps {
	setPage: (page: number) => void;
	page: number;
	setQuery: (query: string) => void;
	setOrderBy?: (orderBy: string) => void;
}

const Controls: React.FC<IcontrolsProps> = ({
	setPage,
	page,
	setQuery,
	setOrderBy,
}) => {
	return (
		<>
			<Flex alignItems={'center'}>
				<Box
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					mx={'2rem'}
					gap={'.5rem'}
					alignItems={'center'}>
					<Text color={'purpleTheme.300'} fontSize={'1.4rem'}>
						Page
					</Text>
					<ControlPage setPage={setPage} page={page} />
				</Box>
				{setOrderBy && (
					<Box>
						<ControlOrderBy setOrderBy={setOrderBy} />
					</Box>
				)}
				<Spacer />
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
