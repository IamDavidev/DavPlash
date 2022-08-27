import { Select } from '@chakra-ui/react';
import React from 'react';
import { OPTIONS_ORDER_BY } from '~constants/unsplash.const';
import { useIsDarkMode } from '~lib/hooks';

interface IControlOrderBYProps {
	setOrderBy: (orderBy: string) => void;
}

const ControlOrderBy: React.FC<IControlOrderBYProps> = ({
	setOrderBy,
}): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	const handleOrderBy = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setOrderBy(e.target.value);
	};

	return (
		<>
			<Select
				variant='filled'
				onChange={handleOrderBy}
				color={isDarkMode ? 'white' : 'black'}
				bg={isDarkMode ? 'tertiaryDark.500' : 'secondaryLight.500'}
				borderColor={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}>
				<option value={OPTIONS_ORDER_BY._LATESTS_}>
					{OPTIONS_ORDER_BY._LATESTS_}
				</option>
				<option value={OPTIONS_ORDER_BY._OLDEST_}>
					{OPTIONS_ORDER_BY._OLDEST_}{' '}
				</option>
				<option value={OPTIONS_ORDER_BY._POPULAR_}>
					{OPTIONS_ORDER_BY._POPULAR_}
				</option>
			</Select>
		</>
	);
};

export default ControlOrderBy;
