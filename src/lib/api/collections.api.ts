import { IApiCollectionProps } from '~interfaces/Api.types';
import { AdapterCollections } from '~lib/adapters';
import { getCollections } from '~lib/services';

export async function collectionsApi({
	init,
	success,
	err,
	perPage,
	page,
}: IApiCollectionProps) {
	init();

	const { data, error, isSuccess, code } = await getCollections({
		perPage,
		page,
	});

	if (!isSuccess) {
		err({
			code,
			error,
		});
	}

	console.log(data);

	success(data.map(AdapterCollections));
}
