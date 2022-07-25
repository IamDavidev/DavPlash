import { IApiPhotoProps } from '~interfaces/Api.types';
import { AdapterPhotos } from '~lib/adapters';
import { AdapterPhotoView } from '~lib/adapters/photoView.adapter';
// import { AdapterPhotoView } from '~lib/adapters/photoView.adapter';
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

	const { data, error, isSuccess, code } = await requesPhoto(id);

	if (!isSuccess) {
		err({
			error,
			code,
		});
		return;
	}
	if (id) return success(AdapterPhotoView(data));

	success(AdapterPhotos(data));
}
