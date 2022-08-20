import { IApiPhotoProps } from '~interfaces/Api.types';
import { AdapterPhotos } from '~lib/adapters';
import { AdapterPhoto } from '~lib/adapters/photoView.adapter';
// import { AdapterPhotoView } from '~lib/adapters/photoView.adapter';
import { getPhoto, getPhotoRandom } from '~lib/services';

export async function requesPhoto(id: string | null) {
	/**
	 * return photo by id
	 */
	if (id) {
		return getPhoto({ id });
	}
	/**
	 * return photo random
	 */
	return getPhotoRandom();
}

export async function ApiPhoto({
	init,
	success,
	err,
	id,
}: IApiPhotoProps): Promise<void> {
	init();

	const { data, error, isSuccess, code } = await requesPhoto(id);

	if (!isSuccess)
		return err({
			error,
			code,
		});

	/**
	 * photo response by id
	 */
	if (id) return success(AdapterPhoto(data));

	/**
	 * photo random
	 */
	success(AdapterPhotos(data));
}
