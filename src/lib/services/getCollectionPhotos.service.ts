import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './service';

export async function getCollectionPhotos({ id }: { id: string }) {
	const apiData = await getDataService({
		pathUrl: `collections/${id}/photos`,
	});

	return AdapterServiceFromApi(apiData);
}
