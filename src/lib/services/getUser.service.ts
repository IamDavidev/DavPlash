import { IRequestService } from '~interfaces/services.types';
import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './service';

export async function getUser(username?: string): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: `/users/${username}`,
	});

	return AdapterServiceFromApi(apiData);
}
