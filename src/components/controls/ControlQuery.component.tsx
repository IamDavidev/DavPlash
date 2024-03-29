import {
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';

import { ArrowCircleRight, SearchIcon } from '~components/icons';

import { COLORS_THEME } from '@/config/theme.config';
import { useIsDarkMode } from '~lib/hooks';
import { eventListenerKeyBoard } from '~lib/utils';

interface IcontrolQueryProps {
	setQuery: (query: string) => void;
}

const ControlQuery: React.FC<IcontrolQueryProps> = ({
	setQuery,
}): JSX.Element => {
	const queryValue = useRef<HTMLInputElement>(null);
	const isDarkMode = useIsDarkMode();

	const [focusState, setFocusState] = useState(false);

	const handleSetQuery = (e: any): void => {
		e.preventDefault();

		queryValue.current && setQuery(queryValue.current.value);

		queryValue.current && (queryValue.current.value = '');
	};

	useEffect((): void => {
		eventListenerKeyBoard(['control', 'k'], (): void => {
			queryValue.current && queryValue.current.focus();
		});
	}, []);

	return (
		<form onSubmit={handleSetQuery}>
			<InputGroup
				width={'200px'}
				borderColor={COLORS_THEME.DARK._HOVER_}
				onFocus={(): void => setFocusState(true)}
				onBlur={(): void => setFocusState(false)}>
				<InputLeftElement pointerEvents='none'>
					<SearchIcon
						width={25}
						height={25}
						color={
							focusState
								? COLORS_THEME.DARK._PRIMARY_
								: COLORS_THEME.DARK._HOVER_
						}
					/>
				</InputLeftElement>
				<Input
					type='text'
					colorScheme={'red'}
					_placeholder={{
						color: COLORS_THEME.DARK._HOVER_,
					}}
					color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}
					placeholder='coffee'
					ref={queryValue}
					htmlSize={30}
					borderWidth={1}
					focusBorderColor={COLORS_THEME.DARK._PRIMARY_}
				/>
				<InputRightElement onClick={handleSetQuery}>
					<ArrowCircleRight
						width={25}
						height={25}
						color={
							focusState
								? COLORS_THEME.DARK._PRIMARY_
								: COLORS_THEME.DARK._HOVER_
						}
					/>
				</InputRightElement>
			</InputGroup>
		</form>
	);
};

export default ControlQuery;
