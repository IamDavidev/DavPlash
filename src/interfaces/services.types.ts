export interface IRequestService {
	data: any;
	error: string;
	isSuccess: boolean;
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
