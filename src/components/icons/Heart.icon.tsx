import React from 'react';

import { TypeIconsProps } from '~interfaces/icons.types';

const HeartIcon: React.FC<TypeIconsProps> = ({
	width,
	height,
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
				fill={color}
				color={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
			/>
		</svg>
	);
};

export default HeartIcon;
