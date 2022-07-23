import { FC } from 'react';
import { TypeIconsProps } from '~interfaces/icons.types';

const NextIcon: FC<TypeIconsProps> = ({ width, height, color, styles }) => {
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
				color={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M9 5l7 7-7 7'
			/>
		</svg>
	);
};

export default NextIcon;
