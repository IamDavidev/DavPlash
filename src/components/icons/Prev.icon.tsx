import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const PrevIcon: React.FC<TypeIconsProps> = ({
	width,
	height,
	styles,
	color,
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
					color={color}
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M15 19l-7-7 7-7'
				/>
			</svg>
		</>
	);
};

export default PrevIcon;
