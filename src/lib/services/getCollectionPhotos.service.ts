import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './service';

export async function getCollectionPhotos({
	id,
	perPage,
}: {
	id: string;
	perPage: number;
}) {
	const apiData = await getDataService({
		pathUrl: `collections/${id}/photos`,
		params: {
			per_page: perPage,
		},
	});

	return AdapterServiceFromApi(apiData);
}