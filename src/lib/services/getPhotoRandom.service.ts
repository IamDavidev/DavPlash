import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './service';

export async function getPhotoRandom() {
	const apiData = await getDataService({
		pathUrl: 'photos/random',
	});

	return AdapterServiceFromApi(apiData);
}
