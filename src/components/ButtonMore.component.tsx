import { COLORS_THEME } from '@/config/theme.config';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useIsDarkMode } from '~lib/hooks';
import { ArrowRightIcon } from './icons';

interface ButtonMoreProps {
	text: string;
	path: string;
}

const ButtonMore = ({ path, text }: ButtonMoreProps) => {
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Link to={path}>
				<Box
					borderRadius={'.5rem'}
					display={'flex'}
					flexDir={'row'}
					gap={'.5rem'}
					py={'.5rem'}
					px={'1rem'}
					border={0}
					_hover={
						isDarkMode
							? {
									backgroundColor: COLORS_THEME.DARK._HOVER_,
									transition: 'all 0.6s ease-in-out',
							  }
							: {
									backgroundColor: COLORS_THEME.LIGHT._HOVER_,
									transition: 'all 0.6s ease-in-out',
							  }
					}>
					<Text
						fontSize={'sm'}
						color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
						{text}
					</Text>
					<ArrowRightIcon
						width={20}
						height={20}
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
				</Box>
			</Link>
		</>
	);
};

export default ButtonMore;
