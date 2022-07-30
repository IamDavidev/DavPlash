import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './service';

export async function getPhotosUser(userName?: string) {
	const apiData = await getDataService({
		pathUrl: `/users/${userName}/photos`,
	});

	return AdapterServiceFromApi(apiData);
}
