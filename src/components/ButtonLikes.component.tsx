import { useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';
import { COLORS_THEME } from '~constants/theme.const';
import { HeartIcon } from './icons';

interface IStateBtnLikes {
	likes: number;
	isLiked: boolean;
}
/**
 * * create a new like
 */
const setLike = (setLike: Function): void =>
	setLike(
		(prevState: IStateBtnLikes): IStateBtnLikes => ({
			likes: prevState.likes + 1,
			isLiked: true,
		})
	);

/**
 * * remove a like
 */

const setDislike = (setDislike: Function): void =>
	setDislike(
		(prevState: IStateBtnLikes): IStateBtnLikes => ({
			likes: prevState.likes - 1,
			isLiked: false,
		})
	);

const ButtonLikes = ({ likesProps }: { likesProps: number }) => {
	const [likes, setLikes] = useState<IStateBtnLikes>({
		likes: 0,
		isLiked: false,
	});

	const toggleLike = (): void => {
		if (!likes.isLiked) return setLike(setLikes);
		setDislike(setLikes);
	};

	useEffect(() => {
		setLikes({
			likes: likesProps,
			isLiked: false,
		});
	}, [likesProps]);

	return (
		<Button
			width={'80px'}
			colorScheme={'grayTheme'}
			borderRadius={'.5rem'}
			border={0}
			color={COLORS_THEME._WHITE_}
			variant={'outline'}
			_hover={{
				backgroundColor: COLORS_THEME._GRAY_,
				transition: 'all 0.6s ease-in-out',
			}}
			onClick={toggleLike}
			rightIcon={
				<HeartIcon
					width={'20'}
					height={20}
					color={
						likes.isLiked ? COLORS_THEME._BLUE_ : COLORS_THEME._PURPLE_LIGHT_
					}
				/>
			}>
			{likes.likes}
		</Button>
	);
};

export default ButtonLikes;
