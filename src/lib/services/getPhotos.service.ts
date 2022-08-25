import { IGetPhotosProps, IRequestService } from '~interfaces/services.types';

import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';

import { getDataService } from './getDataService';

export async function getPhotos({
	perPage,
	page,
	orderBy,
	query,
}: IGetPhotosProps): Promise<IRequestService> {
	const pathUrl = query !== '' ? 'search/photos' : 'photos';

	const apiData = await getDataService({
		pathUrl,
		params: {
			per_page: perPage,
			page,
			order_by: orderBy,
			query,
		},
	});

	return AdapterServiceFromApi(apiData);
}
