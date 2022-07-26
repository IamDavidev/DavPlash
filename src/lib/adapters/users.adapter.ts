import { IAdapterUsers } from '~interfaces/Adapters.types';

export const AdapterUser = (objApiUser: any): IAdapterUsers => {
	return {
		id: objApiUser.id,
		profileImage: objApiUser.profile_image.large,
		userName: objApiUser.username,
		firstName: objApiUser.first_name.split(' ').slice(0, 2).join(' '),
		totalPhotos: objApiUser.total_photos,
	};
};
