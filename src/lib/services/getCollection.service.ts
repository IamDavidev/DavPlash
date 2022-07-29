import { ApiUnsplashAccessKey } from '~constants/unsplash.const';
import { IRequestService } from '~interfaces/services.types';
import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';
import { getDataService } from './service';

export async function getCollection({
	id,
}: {
	id: string;
}): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: `collections/${id}`,
		params: {
			client_id: ApiUnsplashAccessKey,
		},
	});

	return AdapterServiceFromApi(apiData);
}
