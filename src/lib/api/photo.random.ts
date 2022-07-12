import { getPhotoRandom } from '~lib/services/getPhotoRandom.service';

export async function photoRandom({ setData }: any) {
	const response = await getPhotoRandom();

	setData({
		photo: response.data,
		error: response.error,
		isSuccess: response.isSuccess,
	});
}
