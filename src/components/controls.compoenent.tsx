import { Flex, Box, Text, Kbd, Spacer } from '@chakra-ui/react';

import React from 'react';

import { useIsDarkMode } from '~lib/hooks';

import { ControlPage, ControlQuery, ControlOrderBy } from './controls';

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
	const isDarkMode = useIsDarkMode();
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
					<Text
						color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
						fontSize={'1.4rem'}>
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
						<Kbd
							color={isDarkMode ? 'black' : 'white'}
							border='none'
							bg={isDarkMode ? 'white' : 'black'}>
							ctrl
						</Kbd>{' '}
						+
						<Kbd
							border={'none'}
							color={isDarkMode ? 'black' : 'white'}
							bg={isDarkMode ? 'white' : 'black'}>
							K
						</Kbd>
					</Text>
					<ControlQuery setQuery={setQuery} />
				</Box>
			</Flex>
		</>
	);
};

export default Controls;
