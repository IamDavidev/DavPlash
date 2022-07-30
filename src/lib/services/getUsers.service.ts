import { IRequestService } from '~interfaces/services.types';

import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

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
		pathUrl: 'search/users',
		params: {
			query,
			page,
			per_page: perPage,
		},
	});

	return AdapterServiceFromApi(apiData);
}
