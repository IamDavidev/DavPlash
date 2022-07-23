import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import { IRequestService } from '~interfaces/services.types';
import { getDataService } from './service';

export async function getUsers({
	query,
	perPage,
	page,
}: {
	query: string;
	page: number;
	perPage: number;
}): Promise<IRequestService> {
	const apiData = await getDataService({
		params: {
			client_id: ApiUnsplashAccessKey,
			query,
			page,
			per_page: perPage,
		},
		pathUrl: 'search/users',
	});

	return {
		code: apiData.code,
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
	};
}
