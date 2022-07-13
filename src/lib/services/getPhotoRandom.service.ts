import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import { getDataService } from './service';

export async function getPhotoRandom() {
	const apiData = await getDataService({
		pathUrl: 'photos/random',
		params: {
			client_id: ApiUnsplashAccessKey,
		},
	});

	return {
		data: apiData.data,
		error: apiData.err || null,
		isSuccess: apiData.isSuccess,
	};
}
