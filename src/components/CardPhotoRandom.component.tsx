import { usePhoto } from '~lib/hooks';
import CardImage from './CardImage.component';

const CardPhotoRandom = () => {
	const { photo } = usePhoto();

	console.log({
		photo,
	});

	return (
		<>
			<CardImage
				image={photo.images.regular}
				likes={photo.likes}
				userName={photo.user.username}
			/>
		</>
	);
};

export default CardPhotoRandom;
