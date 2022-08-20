import {
	IAdapterPhotoView,
	TypeRelatedPhoto,
	TypeTagObjApiPhotoView,
} from '~interfaces/Adapters.types';

export const AdapterPhoto = (objApiPhoto: any): IAdapterPhotoView => {
	const objectFit =
		objApiPhoto.width > objApiPhoto.height ? 'cover' : 'contain';
	return {
		photoUrl: objApiPhoto.links.html || '',
		id: objApiPhoto.id,
		objectFit,
		image: objApiPhoto?.urls.regular,
		likes: objApiPhoto.likes,
		tags: objApiPhoto.tags.map((tag: TypeTagObjApiPhotoView) => tag.title),
		color: objApiPhoto.color,
		width: objApiPhoto.width,
		height: objApiPhoto.height,
		user: objApiPhoto.user.name,
		userName: objApiPhoto.user.username,
		profileImage: objApiPhoto.user.profile_image.large,
		instagramUsername: objApiPhoto.user.social?.instagram_username,
		description: objApiPhoto?.description,
		relatedPhotos: objApiPhoto.related_collections.results.map(
			(photo: any): TypeRelatedPhoto => {
				return {
					id: photo.preview_photos[0].id,
					image: photo.preview_photos[0].urls.small,
					key: photo.id,
				};
			}
		),
	};
};
