import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { getDataService } from './service';

export async function getCollections({ perPage, page }: any) {
	const apiData = await getDataService({
		pathUrl: '/collections',
		params: {
			client_id: ApiUnsplashAccessKey,
			per_page: perPage,
			page,
		},
	});
	console.log(apiData);

	return {
		data: apiData.data,
		err: apiData.err,
		isSuccess: apiData.isSuccess,
	};
}
