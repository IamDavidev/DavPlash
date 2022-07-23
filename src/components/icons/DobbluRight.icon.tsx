import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const DoblluRight: React.FC<TypeIconsProps> = ({
	width,
	color,
	height,
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
				fill={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M13 5l7 7-7 7M5 5l7 7-7 7'
			/>
		</svg>
	);
};

export default DoblluRight;
