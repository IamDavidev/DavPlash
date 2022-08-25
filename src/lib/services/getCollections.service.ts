import {
	IGetCollectionProps,
	IRequestService,
} from '~interfaces/services.types';
import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './getDataService';

export async function getCollections({
	perPage,
	page,
	query,
}: IGetCollectionProps): Promise<IRequestService> {
	const pathUrl = query !== '' ? 'search/collections' : 'collections';

	const apiData = await getDataService({
		pathUrl,
		params: {
			per_page: perPage,
			page,
			query,
		},
	});

	return AdapterServiceFromApi(apiData);
}
