import { AdapterCollections, AdapterPhotos } from '~lib/adapters';
import { ISuccessRequestSplash } from '~lib/hooks/useApiSplash.hook';
import { getPhotos } from '~lib/services';
import { getCollections } from '~lib/services/getCollections.service';

interface IApiSplahProps {
	init: () => void;
	success: (payload: ISuccessRequestSplash) => void;
}

export async function SplahsApi({
	init,
	success,
}: IApiSplahProps): Promise<void> {
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
