import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ArrowCircleRight } from '~components/icons';
import ArrowCircleLeft from '~components/icons/ArrowCircleLeft.icon';
import { COLORS_THEME } from '~constants/theme.const';

interface IcontrolsPageProps {
	setPage: (page: number) => void;
	page: number;
	maxPage?: number;
}

const controlsPage: React.FC<IcontrolsPageProps> = ({ setPage, page }) => {
	const maxPage = 10;

	const setPageNext = (): void => {
		if (page === maxPage) return setPage(1);
		setPage(page + 1);
	};

	const setPagePrev = (): void => {
		if (page === 1) return setPage(maxPage);
		setPage(page - 1);
	};

	return (
		<Flex justifyContent={'center'} gap={'.5rem'} alignItems={'center'}>
			<Button
				onClick={() => setPagePrev()}
				border={'none'}
				colorScheme={'purpleTheme.500'}>
				<ArrowCircleLeft
					width={25}
					height={25}
					color={COLORS_THEME._PURPLE_300}
				/>
			</Button>
			<Text minW={'50px'} textAlign={'center'} color={'white'}>
				{page}
				{' / 10'}
			</Text>
			<Button
				colorScheme={'purpleTheme.500'}
				border={'none'}
				onClick={() => setPageNext()}>
				{/* <NextIcon width={25} height={25} color={COLORS_THEME._PURPLE_300} /> */}
				<ArrowCircleRight
					width={25}
					height={25}
					color={COLORS_THEME._PURPLE_300}
				/>
			</Button>
		</Flex>
	);
};

export default controlsPage;
