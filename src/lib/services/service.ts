import { ApiInstance } from '@/config';
import { ApiUnsplashAccessKey } from '~constants/unsplash.const';

import { IRequestService } from '~interfaces/services.types';

interface TypeGetPhotosServiceProps {
	pathUrl: string;
	params?: {
		per_page?: number;
		page?: number;
		order_by?: string;
		query?: string;
	};
}

export async function getDataService({
	pathUrl,
	params,
}: TypeGetPhotosServiceProps): Promise<IRequestService> {
	try {
		const response = await ApiInstance.get(pathUrl, {
			params: {
				client_id: ApiUnsplashAccessKey,
				...params,
			},
		});

		return {
			data: response.data,
			error: '',
			isSuccess: true,
		};
	} catch (err: any) {
		return {
			data: [],
			code: err.response.status,
			error: err.message,
			isSuccess: false,
		};
	}
}
