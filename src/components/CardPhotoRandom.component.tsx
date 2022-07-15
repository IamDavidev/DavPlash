import { usePhoto } from '~lib/hooks';
import CardImage from './CardImage.component';

const CardPhotoRandom = () => {
	const { photo, error, isLoading } = usePhoto();

	if (error.isExistError) return <div>{error.message}</div>;

	if (isLoading) return <div>Loading...</div>;

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
