import { IApiUserProps } from '~interfaces/Api.types';
import { AdapterUserView } from '~lib/adapters';
import { getUser } from '~lib/services';
import { getPhotosUser } from '~lib/services/getPhotosUser.service';

export async function userApi({
	init,
	success,
	err,
	username,
}: IApiUserProps): Promise<void> {
	init();

	const { data, error, isSuccess, code } = await getUser(username);

	const {
		data: dataPhotos,
		error: errorPhotos,
		isSuccess: isSuccessPhotos,
		code: codePhotos,
	} = await getPhotosUser(username);

	if (!isSuccess) return err({ error, code });
	if (!isSuccessPhotos) return err({ error: errorPhotos, code: codePhotos });

	success({
		user: AdapterUserView(data),
		photos: dataPhotos,
	});
}
