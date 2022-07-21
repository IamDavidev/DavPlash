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
}

export interface IStateCollections extends IStateGlobalApi {
	collections: IAdapterCollection[] | [];
}

export interface IStatePhotos extends IStateGlobalApi {
	photos: IAdapterPhotos[] | [];
	orderBy: string;
}
export interface IStateUser extends IStateGlobalApi {
	users: any[];
	query: string;
}
export interface IStateOnlyPhoto {
	photo: IAdapterPhotos;
	error: {
		code: string | number;
		message: string;
		isExistError: boolean;
	};
	isLoading: boolean;
}
