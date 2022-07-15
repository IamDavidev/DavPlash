import { IApiCollectionProps } from '~interfaces/Api.types';
import { getCollections } from '~lib/services';

export async function collectionsApi({
	init,
	success,
	err,
	perPage,
	page,
}: IApiCollectionProps) {
	init();

	const { data, error, isSuccess } = await getCollections({ perPage, page });

	if (!isSuccess) {
		err(error);
	}
	success(data);
}
