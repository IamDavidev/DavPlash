import { Button } from '@chakra-ui/react';
import React from 'react';
import { ArrowCircleRight } from '~components/icons';
import { COLORS_THEME } from '~constants/theme.const';

interface IcontrolPerPageProps {
	setPerPage: (perPage: number) => void;
	perPage: number;
}

const ControlPerPage: React.FC<IcontrolPerPageProps> = ({
	setPerPage,
	perPage,
}) => {
	return (
		<>
			<Button
				colorScheme={'purpleTheme'}
				color={'white'}
				variant={'outline'}
				onClick={() => setPerPage(perPage + 10)}>
				10 more{' '}
				<ArrowCircleRight
					width={25}
					height={25}
					color={COLORS_THEME._PURPLE_300}
				/>
			</Button>
		</>
	);
};

export default ControlPerPage;
