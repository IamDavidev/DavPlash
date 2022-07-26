import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const ArrowCircleLeft: React.FC<TypeIconsProps> = ({
	height,
	width,
	color,
	styles,
}) => {
	return (
		<svg
			className={styles}
			width={width}
			height={height}
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
				d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
			/>
		</svg>
	);
};

export default ArrowCircleLeft;
