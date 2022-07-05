import { typeApiPhotosProps } from '~interfaces/photos.types';
import { getPhotos } from '~lib/services';
import { AdapterPhotos } from '../adapters';

export async function apiPhotos({
	success,
	error,
	init,
}: typeApiPhotosProps): Promise<void> {
	init();

	const { data, err, isSuccess } = await getPhotos();

	if (!isSuccess) return error(err || '');

	success(data.map(AdapterPhotos));
}
