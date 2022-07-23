import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { getDataService } from './service';

export async function getPhoto({ id }: { id: string }) {
	const apiData = await getDataService({
		pathUrl: `photos/${id}`,
		params: {
			client_id: ApiUnsplashAccessKey,
		},
	});

	return {
		code: apiData.code,
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
