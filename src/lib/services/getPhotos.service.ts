import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import {
	requestPhotosApi,
	TypeGetPhotosServiceProps,
} from '~interfaces/photos.types';
import { getDataService } from './service';

export async function getPhotos({
	perPage,
	page,
	orderBy,
}: TypeGetPhotosServiceProps): Promise<requestPhotosApi> {
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
		err: apiData.err,
		isSuccess: apiData.isSuccess,
	};
}
