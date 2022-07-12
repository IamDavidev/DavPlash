import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import { getDataService } from './service';

export function getUsers() {
	const query: string = 'users';
	const apiData = getDataService({
		params: {
			client_id: ApiUnsplashAccessKey,
			query,
		},
		pathUrl: 'search/users',
	});

	return apiData;
}
