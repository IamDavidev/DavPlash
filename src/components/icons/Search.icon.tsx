import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const SearchIcon: React.FC<TypeIconsProps> = ({
	width,
	height,
	color,
	styles,
}) => {
	return (
		<>
			<svg
				width={width}
				height={height}
				className={styles}
				data-darkreader-inline-stroke=''
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					color={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
			</svg>
		</>
	);
};

export default SearchIcon;
