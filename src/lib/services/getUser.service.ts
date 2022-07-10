import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { requestPhotosApi } from '~interfaces/photos.types';

import { getDataService } from './service';

export async function getUser(username: string): Promise<requestPhotosApi> {
	const apiData = await getDataService({
		pathUrl: `/users/${username}`,
		params: {
			client_id: ApiUnsplashAccessKey,
		},
	}).then(data => data);

	return {
		data: apiData.data,
		err: apiData.err,
		isSuccess: apiData.isSuccess,
	};
}
