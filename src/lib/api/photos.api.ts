import { typeApiPhotosProps } from '~interfaces/photos.types';
import { getPhotos } from '~lib/services';
import { AdapterPhotos } from '../adapters';

export async function apiPhotos({
	success,
	error,
	init,
	orderBy,
	perPage,
	page,
}: typeApiPhotosProps): Promise<void> {
	init();

	const { data, err, isSuccess } = await getPhotos({ perPage, page, orderBy });

	if (!isSuccess) return error(err || '');

	success(data.map(AdapterPhotos));
}
