import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { IRequestService } from '~interfaces/services.types';

import { getDataService } from './service';

export async function getUser(username: string): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: `/users/${username}`,
		params: {
			client_id: ApiUnsplashAccessKey,
		},
	}).then(data => data);

	return {
		code: apiData.code,
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
