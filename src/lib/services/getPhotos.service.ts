import { ApiInstance } from '@/config';

import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import {
	requestPhotosApi,
	TypeGetPhotosServiceProps,
} from '~interfaces/photos.types';

export async function getPhotos({
	perPage,
	page,
	orderBy,
}: TypeGetPhotosServiceProps): Promise<requestPhotosApi> {
	try {
		const responseApi = await ApiInstance.get('/photos', {
			params: {
				client_id: ApiUnsplashAccessKey,
				per_page: perPage,
				page,
				order_by: orderBy,
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
