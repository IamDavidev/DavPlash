export const AdapterUser = (objApiUser: any): any => {
	return {
		id: objApiUser.id,
		profileImage: objApiUser.profile_image.large,
		username: objApiUser.username,
		fisrtName: objApiUser.username,
		totalPhotos: objApiUser.total_photos,
	};
};
