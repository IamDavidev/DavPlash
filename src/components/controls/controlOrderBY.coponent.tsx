import { Select } from '@chakra-ui/react';
import React from 'react';
import { OPTIONS_ORDER_BY } from '~constants/unsplash.const';

interface IControlOrderBYProps {
	setOrderBy: (orderBy: string) => void;
}

const ControlOrderBy: React.FC<IControlOrderBYProps> = ({ setOrderBy }) => {
	const handleOrderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setOrderBy(e.target.value);
	};

	return (
		<>
			<Select
				variant='filled'
				onChange={handleOrderBy}
				_hover={{ bg: 'grayTheme.500', color: 'grayTheme.500' }}
				bg='grayTheme.500'
				borderColor='purpleTheme.300'
				color='white'>
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