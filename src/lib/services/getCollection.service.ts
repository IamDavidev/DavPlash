import { IRequestService } from '~interfaces/services.types';
import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';
import { getDataService } from './getDataService';

export async function getCollection({
	id,
}: {
	id: string;
}): Promise<IRequestService> {
	const apiData = await getDataService({
		pathUrl: `collections/${id}`,
	});

	return AdapterServiceFromApi(apiData);
}
