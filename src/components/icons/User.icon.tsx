import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const UserIcon: React.FC<TypeIconsProps> = ({
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
				d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
			/>
		</svg>
	);
};
export default UserIcon;
