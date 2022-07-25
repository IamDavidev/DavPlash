import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import {
	IGetCollectionProps,
	IRequestService,
} from '~interfaces/services.types';

import { getDataService } from './service';

export async function getCollections({
	perPage,
	page,
	query,
}: IGetCollectionProps): Promise<IRequestService> {
	const pathUrl = query !== '' ? 'search/collections' : 'collections';

	const apiData = await getDataService({
		pathUrl,
		params: {
			client_id: ApiUnsplashAccessKey,
			per_page: perPage,
			page,
			query,
		},
	});

	return {
		code: apiData.code,
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
