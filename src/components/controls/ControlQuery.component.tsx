import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import React, { useState } from 'react';

import { SearchIcon } from '~components/icons';

import { COLORS_THEME } from '~constants/theme.const';

interface IcontrolQueryProps {
	setQuery: (query: string) => void;
}

const ControlQuery: React.FC<IcontrolQueryProps> = ({ setQuery }) => {
	const [focusState, setFocusState] = useState(false);

	return (
		<>
			<InputGroup
				width={'200px'}
				borderColor={'grayTheme.500'}
				onFocus={() => setFocusState(true)}
				onBlur={() => setFocusState(false)}>
				<InputLeftElement pointerEvents='none'>
					<SearchIcon
						width={25}
						height={25}
						color={focusState ? COLORS_THEME._PURPLE_ : COLORS_THEME._GRAY_}
					/>
				</InputLeftElement>
				<Input
					type='text'
					colorScheme={'red'}
					_placeholder={{
						color: COLORS_THEME._GRAY_,
					}}
					color={'white'}
					placeholder='coffe'
					htmlSize={20}
					borderWidth={1}
					focusBorderColor={COLORS_THEME._PURPLE_}
				/>
			</InputGroup>
		</>
	);
};

export default ControlQuery;
