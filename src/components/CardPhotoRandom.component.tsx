import { usePhoto } from '~lib/hooks';
import CardImage from './CardImage.component';
import { CardSkeletonImage } from './skeletons';
import { CardErrorImage } from './skeletons/error';

const CardPhotoRandom = (): JSX.Element => {
	const { photo, error, isLoading } = usePhoto();

	if (error.isError)
		return (
			<>
				<CardErrorImage />
			</>
		);

	if (isLoading || !photo)
		return (
			<>
				<CardSkeletonImage />
			</>
		);

	return (
		<>
			{photo.images && (
				<CardImage
					id={photo.id}
					name={photo.user.name}
					image={photo.images.regular}
					likes={photo.likes}
					userName={photo.user.username}
				/>
			)}
		</>
	);
};

export default CardPhotoRandom;
