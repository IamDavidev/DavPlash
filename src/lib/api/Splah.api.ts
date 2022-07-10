import { AdapterCollections, AdapterPhotos } from '~lib/adapters';
import { getPhotos } from '~lib/services';
import { getCollections } from '~lib/services/getCollections.service';

export async function SplahsApi({ init, success }: any) {
	init();

	const photos = await getPhotos({
		perPage: 10,
		page: 1,
		orderBy: 'latest',
	});

	const collections = await getCollections({
		perPage: 10,
		page: 1,
	});

	const users: any = [];

	success({
		photos: photos.data.map(AdapterPhotos),
		collections: collections.data.map(AdapterCollections),
		users,
	});
}
