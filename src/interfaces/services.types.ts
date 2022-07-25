export interface IRequestService {
	data: any;
	error: string;
	isSuccess: boolean;
	code?: string | number;

	// TODO: remove code optional
}
export interface IGetCollectionProps {
	query?: string;
	perPage: number;
	page: number;
}
export interface IGetPhotosProps {
	query?: string;
	perPage: number;
	page: number;
	orderBy: string;
}
