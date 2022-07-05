import { ApiInstance } from '@/config';

import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { requestPhotosApi } from '~interfaces/photos.types';

export async function getPhotos(): Promise<requestPhotosApi> {
	try {
		const responseApi = await ApiInstance.get('/photos', {
			params: {
				client_id: ApiUnsplashAccessKey,
			},
		});

		return {
			data: responseApi.data,
			err: null,
			isSuccess: true,
		};
	} catch (err: any) {
		return {
			data: [],
			err: err.message,
			isSuccess: false,
		};
	}
}
