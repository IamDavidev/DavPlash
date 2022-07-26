import {} from 'react';
import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import { getDataService } from './service';

export async function getPhotosUser(userName?: string) {
	const apiData = await getDataService({
		pathUrl: `/users/${userName}/photos`,
		params: {
			client_id: ApiUnsplashAccessKey,
		},
	});

	return {
		data: apiData.data,
		code: apiData.code,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
