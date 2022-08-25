import { IRequestService } from '~interfaces/services.types';
import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './getDataService';

export async function getCollectionPhotos({
	id,
	perPage,
}: {
	id: string;
	perPage: number;
}): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: `collections/${id}/photos`,
		params: {
			per_page: perPage,
		},
	});

	return AdapterServiceFromApi(apiData);
}
