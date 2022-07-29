import { IApiCollectionsProps } from '~interfaces/Api.types';
import { AdapterCollections } from '~lib/adapters';
import { getCollections } from '~lib/services';

export async function collectionsApi({
	init,
	success,
	err,
	perPage,
	page,
	query,
}: IApiCollectionsProps) {
	init();

	const { data, error, isSuccess, code } = await getCollections({
		perPage,
		page,
		query,
	});

	if (!isSuccess) {
		err({
			code,
			error,
		});
	}

	if (data.results) {
		return success(data.results.map(AdapterCollections));
	}
	success(data.map(AdapterCollections));
}
