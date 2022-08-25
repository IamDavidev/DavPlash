import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './getDataService';

export async function getPhotosUser(userName?: string) {
	const apiData = await getDataService({
		pathUrl: `/users/${userName}/photos`,
	});

	return AdapterServiceFromApi(apiData);
}
