export interface IRequestService {
	data: any[];
	error: string;
	isSuccess: boolean;
	code?: string | number;

	// TODO: remove code optional
}
export interface IGetCollectionProps {
	perPage: number;
	page: number;
}
export interface IGetPhotosProps {
	perPage: number;
	page: number;
	orderBy: string;
}
