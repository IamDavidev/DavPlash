import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { IGetPhotosProps, IRequestService } from '~interfaces/services.types';
import { getDataService } from './service';

export async function getPhotos({
	perPage,
	page,
	orderBy,
}: IGetPhotosProps): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: '/photos',
		params: {
			client_id: ApiUnsplashAccessKey,
			per_page: perPage,
			page,
			order_by: orderBy,
		},
	});

	return {
		data: apiData.data,
		error: apiData.err,
		isSuccess: apiData.isSuccess,
	};
}
