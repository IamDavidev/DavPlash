import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COLORS_THEME } from '~constants/theme.const';
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
				<Button
					borderRadius={'.5rem'}
					border={0}
					_hover={
						isDarkMode
							? {
									backgroundColor: COLORS_THEME.LIGHT._WHITE_,
									color: COLORS_THEME.DARK._SECONDARY_,
									transition: 'all 0.6s ease-in-out',
							  }
							: {
									backgroundColor: COLORS_THEME.DARK._BG_,
									transition: 'all 0.6s ease-in-out',
							  }
					}
					variant={'outline'}
					rightIcon={
						<ArrowRightIcon
							width={20}
							height={20}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
					}>
					<Text
						fontSize={'sm'}
						color={isDarkMode ? 'secondaryDark.500' : 'secondaryLight.500'}>
						{text}
					</Text>
				</Button>
			</Link>
		</>
	);
};

export default ButtonMore;
