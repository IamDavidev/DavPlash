import { IApiPhotosProps } from '~interfaces/Api.types';
import { AdapterPhotos } from '~lib/adapters';
import { getPhotos } from '~lib/services';

export async function photosApi({
	init,
	success,
	err,
	orderBy,
	perPage,
	page,
	query,
}: IApiPhotosProps): Promise<void> {
	init();

	const { data, error, isSuccess, code } = await getPhotos({
		orderBy,
		perPage,
		query,
		page,
	});

	if (!isSuccess) {
		err({
			code,
			error,
		});
	}
	if (data.results) {
		return success(data.results.map(AdapterPhotos));
	}

	success(data.map(AdapterPhotos));
}
