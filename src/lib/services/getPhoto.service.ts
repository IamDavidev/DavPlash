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
		data: apiData.data,
		error: apiData.err,
		isSuccess: apiData.isSuccess,
	};
}
