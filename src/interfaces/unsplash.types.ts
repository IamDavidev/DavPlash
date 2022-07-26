import { IAdapterCollection, IAdapterPhotos } from './Adapters.types';

export interface IStateGlobalApi {
	page: number;
	perPage: number;
	error: {
		code: string | number;
		message: string;
		isError: boolean;
	};
	isLoading: boolean;
	query: string;
}

export interface IStateCollections extends IStateGlobalApi {
	collections: IAdapterCollection[] | [];
}

export interface IStatePhotos extends IStateGlobalApi {
	photos: IAdapterPhotos[] | [];
	orderBy: string;
}
export interface IStateOnlyPhoto {
	photo: any;
	error: {
		code: string | number;
		message: string;
		isExistError: boolean;
	};
	isLoading: boolean;
}

export interface IStateUsers extends IStateGlobalApi {
	users: any;
}

export interface IStateUser {
	user: {
		data: any;
		photos: any[];
	};
	isLoading: boolean;
	error: {
		code: string | number;
		message: string;
		isError: boolean;
	};
	perPagePhotos: number;
	orderByPhotos: string;
}
