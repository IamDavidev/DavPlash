import { IRequestService } from '~interfaces/services.types';

export function AdapterServiceFromApi(
	apiData: IRequestService
): IRequestService {
	return {
		data: apiData.data,
		error: apiData.error,
		isSuccess: apiData.isSuccess,
		code: apiData.code,
	};
}
