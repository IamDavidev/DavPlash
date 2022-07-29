import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { IGetPhotosProps, IRequestService } from '~interfaces/services.types';
import { getDataService } from './service';

export async function getPhotos({
	perPage,
	page,
	orderBy,
	query,
}: IGetPhotosProps): Promise<IRequestService> {
	const pathUrl = query !== '' ? 'search/photos' : 'photos';

	const apiData = await getDataService({
		pathUrl,
		params: {
			client_id: ApiUnsplashAccessKey,
			per_page: perPage,
			page,
			order_by: orderBy,
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
