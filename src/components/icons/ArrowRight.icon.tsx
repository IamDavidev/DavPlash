import { TypeIconsProps } from '~interfaces/icons.types';

const ArrowRightIcon = ({ width, height, styles, color }: TypeIconsProps) => {
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
				d='M14 5l7 7m0 0l-7 7m7-7H3'
			/>
		</svg>
	);
};

export default ArrowRightIcon;
