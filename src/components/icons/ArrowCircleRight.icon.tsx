import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const ArrowCircleRight: React.FC<TypeIconsProps> = ({
	height,
	width,
	color,
	styles,
}) => {
	return (
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
				fill='none'
				color={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
			/>
		</svg>
	);
};

export default ArrowCircleRight;
