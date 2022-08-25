import { AdapterServiceFromApi } from '~lib/adapters/service.adapter';
import { getDataService } from './getDataService';

export async function getPhoto({ id }: { id: string }) {
	const apiData = await getDataService({
		pathUrl: `photos/${id}`,
	});

	return AdapterServiceFromApi(apiData);
}
