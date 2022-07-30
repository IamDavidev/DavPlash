import { IRequestService } from '~interfaces/services.types';
import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';
import { getDataService } from './service';

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
