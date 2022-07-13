import { IApiPhotoProps } from '~interfaces/Api.types';
import { AdapterPhotos } from '~lib/adapters';
import { getPhotoRandom } from '~lib/services/getPhotoRandom.service';

export async function requesPhoto(id: string | null) {
	console.log(id);
	// if (id) {
	// 	return getPhoto();
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
