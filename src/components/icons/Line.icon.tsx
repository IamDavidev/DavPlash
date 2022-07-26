import React from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const LineIcon: React.FC<TypeIconsProps> = ({
	width,
	height,
	color,
	styles,
}) => {
	return (
		<svg
			width={width}
			className={styles}
			height={height}
			viewBox='0 0 2 46'
			fill='none'>
			<line
				x1='1.37402'
				y1='0.691711'
				x2='1.37402'
				y2='45.8357'
				stroke={color}
			/>
		</svg>
	);
};

export default LineIcon;
