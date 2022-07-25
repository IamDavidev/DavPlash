import {
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';

import { ArrowCircleRight, SearchIcon } from '~components/icons';

import { COLORS_THEME } from '~constants/theme.const';

interface IcontrolQueryProps {
	setQuery: (query: string) => void;
}

const ControlQuery: React.FC<IcontrolQueryProps> = ({ setQuery }) => {
	const queryValue = useRef<HTMLInputElement>(null);

	const [focusState, setFocusState] = useState(false);

	const handleSetQuery = (e: any): void => {
		e.preventDefault();

		queryValue.current && setQuery(queryValue.current.value);

		queryValue.current && (queryValue.current.value = '');
	};

	useEffect(() => {
		queryValue.current && queryValue.current.focus();
	}, []);

	return (
		<form onSubmit={handleSetQuery}>
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
					ref={queryValue}
					htmlSize={30}
					borderWidth={1}
					focusBorderColor={COLORS_THEME._PURPLE_}
				/>
				<InputRightElement onClick={handleSetQuery}>
					<ArrowCircleRight
						width={25}
						height={25}
						color={focusState ? COLORS_THEME._PURPLE_ : COLORS_THEME._GRAY_}
					/>
				</InputRightElement>
			</InputGroup>
		</form>
	);
};

export default ControlQuery;
