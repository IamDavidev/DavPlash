import { IUserData } from '~pages/Profile.view';

export function adapterProfile(dataProlileApi: any): IUserData {
	console.log(
		'🚀 ~ file: profile.adapter.ts ~ line 4 ~ adapterProfile ~ dataProlileApi',
		dataProlileApi
	);
	return {
		bio: '',
		following: 0,
		id: 0,
		id_user: '',
		likes: 0,
		location: '',
		name: '',
		photos: 0,
		user_name: '',
		followers: 0,
	};
}
