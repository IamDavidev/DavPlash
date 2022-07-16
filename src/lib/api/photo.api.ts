import { IApiPhotoProps } from '~interfaces/Api.types';
import { AdapterPhotos } from '~lib/adapters';
import { getPhoto, getPhotoRandom } from '~lib/services';

export async function requesPhoto(id: string | null) {
	if (id) {
		return getPhoto({ id });
	}
	return getPhotoRandom();
}

export async function ApiPhoto({
	init,
	success,
	err,
	id,
}: IApiPhotoProps): Promise<any> {
	init();

	const { data, error, isSuccess } = await requesPhoto(id);

	if (!isSuccess) {
		err(error);
		return;
	}

	success(AdapterPhotos(data));
}
