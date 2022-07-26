import { IApiUserProps } from '~interfaces/Api.types';
import { getUser } from '~lib/services';
import { getPhotosUser } from '~lib/services/getPhotosUser.service';

export async function userApi({ init, success, err, username }: IApiUserProps) {
	init();

	const { data, error, isSuccess, code } = await getUser(username);
	console.log('🚀 ~ file: user.api.ts ~ line 9 ~ userApi ~ data', data);

	const {
		data: dataPhotos,
		error: errorPhotos,
		isSuccess: isSuccessPhotos,
		code: codePhotos,
	} = await getPhotosUser(username);

	if (!isSuccess) return err({ error, code });
	if (!isSuccessPhotos) return err({ error: errorPhotos, code: codePhotos });

	success({
		user: data,
		photos: dataPhotos,
	});
}
