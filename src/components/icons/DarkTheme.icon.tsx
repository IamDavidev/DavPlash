import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const DarkThemeIcon: React.FC<TypeIconsProps> = ({
	width,
	height,
	color,
	styles,
}) => {
	return (
		<>
			<svg
				className={styles}
				width={width}
				height={height}
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					color={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
				/>
			</svg>
		</>
	);
};

export default DarkThemeIcon;
