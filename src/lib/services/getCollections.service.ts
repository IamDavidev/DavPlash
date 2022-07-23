import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import {
	IGetCollectionProps,
	IRequestService,
} from '~interfaces/services.types';

import { getDataService } from './service';

export async function getCollections({
	perPage,
	page,
}: IGetCollectionProps): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: '/collections',
		params: {
			client_id: ApiUnsplashAccessKey,
			per_page: perPage,
			page,
		},
	});

	return {
		code: apiData.code,
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
