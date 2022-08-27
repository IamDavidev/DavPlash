import { Button } from '@chakra-ui/react';
import React from 'react';
import { ArrowCircleRight } from '~components/icons';
import { COLORS_THEME } from '@/config/theme.config';

interface IcontrolPerPageProps {
	setPerPage: (perPage: number) => void;
	perPage: number;
}

const ControlPerPage: React.FC<IcontrolPerPageProps> = ({
	setPerPage,
	perPage,
}): JSX.Element => {
	return (
		<>
			<Button
				color={'white'}
				variant={'outline'}
				onClick={(): void => setPerPage(perPage + 10)}>
				10 more{' '}
				<ArrowCircleRight width={25} height={25} color={COLORS_THEME._BLUE_} />
			</Button>
		</>
	);
};

export default ControlPerPage;
