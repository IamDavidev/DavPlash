import { IApiCollectionProps } from '~interfaces/Api.types';
import { getCollection } from '~lib/services/getCollection.service';

export async function collectionApi({
	id,
	init,
	success,
	err,
}: IApiCollectionProps): Promise<void> {
	init();
	const { data, error, isSuccess, code } = await getCollection({
		id,
	});

	if (!isSuccess) {
		err({
			code,
			error,
		});
	}

	success(data);
}
