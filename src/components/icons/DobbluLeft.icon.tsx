import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const DobbluLeft: React.FC<TypeIconsProps> = ({
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
					d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
				/>
			</svg>
		</>
	);
};

export default DobbluLeft;
