import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { COLORS_THEME } from '~constants/theme.const';
import { ArrowRightIcon } from './icons';

interface ButtonMoreProps {
	text: string;
	path: string;
}

const ButtonMore = ({ path, text }: ButtonMoreProps) => {
	return (
		<>
			<Link to={path}>
				<Button
					colorScheme={'grayTheme'}
					borderRadius={'.5rem'}
					border={'2px'}
					borderColor={COLORS_THEME._PURPLE_LIGHT_}
					variant={'outline'}
					rightIcon={
						<ArrowRightIcon
							width={20}
							height={20}
							color={COLORS_THEME._PURPLE_LIGHT_}
						/>
					}>
					<Text fontSize={'sm'}>{text}</Text>
				</Button>
			</Link>
		</>
	);
};

export default ButtonMore;
