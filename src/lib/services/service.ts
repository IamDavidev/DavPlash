import { ApiInstance } from '@/config';

import { IRequestService } from '~interfaces/services.types';

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
}: TypeGetPhotosServiceProps): Promise<IRequestService> {
	try {
		const response = await ApiInstance.get(pathUrl, {
			params,
		});

		return {
			data: response.data,
			error: '',
			isSuccess: true,
		};
	} catch (err: any) {
		return {
			data: [],
			error: err.message,
			isSuccess: false,
		};
	}
}
