import { ApiInstance } from '@/config';
import { requestPhotosApi } from '~interfaces/photos.types';

interface TypeGetPhotosServiceProps {
	pathUrl: string;
	params: {
		client_id: string;
		per_page?: number;
		page?: number;
		order_by?: string;
		query?: string;
	};
}

export async function getDataService({
	pathUrl,
	params,
}: TypeGetPhotosServiceProps): Promise<requestPhotosApi> {
	try {
		const response = await ApiInstance.get(pathUrl, {
			params,
		});

		return {
			data: response.data,
			err: '',
			isSuccess: true,
		};
	} catch (err: any) {
		console.log(err.message);
		return {
			data: [],
			err: err.message,
			isSuccess: false,
		};
	}
}
