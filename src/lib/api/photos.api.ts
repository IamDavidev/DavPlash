import { IApiPhotosProps } from '~interfaces/Api.types';
import { getPhotos } from '~lib/services';

export async function photosApi({
	init,
	success,
	err,
	orderBy,
	perPage,
	page,
}: IApiPhotosProps): Promise<void> {
	init();

	const { data, error, isSuccess } = await getPhotos({
		orderBy,
		perPage,
		page,
	});

	if (!isSuccess) {
		err(error);
	}
	success(data);
}
