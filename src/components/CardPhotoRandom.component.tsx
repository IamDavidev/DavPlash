import { usePhoto } from '~lib/hooks';
import CardImage from './CardImage.component';
import { CardSkeletonImage } from './skeletons';

const CardPhotoRandom = () => {
	const { photo, error, isLoading } = usePhoto();

	if (error.isExistError) return <div>{error.message}</div>;

	if (isLoading)
		return (
			<>
				<CardSkeletonImage />
			</>
		);

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
