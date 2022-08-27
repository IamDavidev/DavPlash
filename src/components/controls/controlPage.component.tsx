import { COLORS_THEME } from '@/config/theme.config';
import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ArrowCircleRight } from '~components/icons';
import ArrowCircleLeft from '~components/icons/ArrowCircleLeft.icon';
import { useIsDarkMode } from '~lib/hooks';

interface IcontrolsPageProps {
	setPage: (page: number) => void;
	page: number;
	maxPage?: number;
}

const ControlsPage: React.FC<IcontrolsPageProps> = ({
	setPage,
	page,
}): JSX.Element => {
	const isDarkMode = useIsDarkMode();
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
				data-testid='control-page-prev'
				onClick={(): void => setPagePrev()}
				border={'none'}
				colorScheme={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}>
				<ArrowCircleLeft
					width={25}
					height={25}
					color={
						isDarkMode
							? COLORS_THEME.DARK._PRIMARY_
							: COLORS_THEME.LIGHT._PRIMARY_
					}
				/>
			</Button>
			<Text
				minW={'50px'}
				textAlign={'center'}
				color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
				{page}
				{' / 10'}
			</Text>
			<Button
				data-testid='control-page-next'
				colorScheme={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
				border={'none'}
				onClick={(): void => setPageNext()}>
				<ArrowCircleRight
					width={25}
					height={25}
					color={
						isDarkMode
							? COLORS_THEME.DARK._PRIMARY_
							: COLORS_THEME.LIGHT._PRIMARY_
					}
				/>
			</Button>
		</Flex>
	);
};

export default ControlsPage;
