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
		code: apiData.code,
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
