import { IApiCollectionProps } from '~interfaces/Api.types';
import { AdapterPhotos } from '~lib/adapters';
import { AdapterCollection } from '~lib/adapters/collection.adapter';

import { getCollection } from '~lib/services/getCollection.service';

import { getCollectionPhotos } from '~lib/services/getCollectionPhotos.service';

export async function collectionApi({
	id,
	init,
	err,
	success,
	perPage,
}: IApiCollectionProps): Promise<void> {
	init();

	const {
		data: dataCollection,
		error: ErrorCollection,
		isSuccess: isSuccessCollection,
		code: codeCollection,
	} = await getCollection({
		id,
	});

	const {
		data: dataCollectionPhotos,
		error: ErrorCollectionPhotos,
		isSuccess: isSuccessCollectionPhotos,
		code: codeCollectionPhotos,
	} = await getCollectionPhotos({
		id,
		perPage,
	});

	if (!isSuccessCollection)
		return err({ error: ErrorCollection, code: codeCollection });

	if (!isSuccessCollectionPhotos)
		return err({ error: ErrorCollectionPhotos, code: codeCollectionPhotos });

	success({
		data: AdapterCollection(dataCollection),
		photos: dataCollectionPhotos.map(AdapterPhotos),
	});
}
