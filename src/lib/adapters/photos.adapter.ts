import { IAdapterPhotos } from '~interfaces/Adapters.types';

export function AdapterPhotos(objApiPhotos: any): IAdapterPhotos {
	const user = objApiPhotos.user;
	const images = objApiPhotos.urls;
	const description =
		objApiPhotos.description !== null ? objApiPhotos.description : null;

	return {
		id: objApiPhotos.id,
		likes: objApiPhotos.likes,
		description,
		images: {
			small: images.small,
			full: images.full,
			regular: images.regular,
		},
		user: {
			id: objApiPhotos.user.id,
			name: objApiPhotos.user.name,
			images: {
				small: user.profile_image.small,
				full: user.profile_image.large,
				regular: user.profile_image.medium,
			},
			bio: user.bio,
			likes: user.total_likes,
			photos: user.total_photos,
			username: user.username,
		},
	};
}
