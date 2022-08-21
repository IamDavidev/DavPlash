import { IAdapterCollection, IAdapterPhotos } from './Adapters.types';

/**
 * - @init
 * - @Global states
 */
export type IErrorStateGlobal = {
	message: string;
	code?: string | number | undefined;
	isError: boolean;
};

export interface IStateGlobalApi {
	page: number;
	perPage: number;
	error: IErrorStateGlobal;
	isLoading: boolean;
	query: string;
}
/**
 * - @end  globals states
 */

/**
 * - @init
 * - @collections states
 */
export interface IStateCollections extends IStateGlobalApi {
	collections: IAdapterCollection[] | [];
}

export interface IStateCollection {
	collection: any;
	error: IErrorStateGlobal;
	isLoading: boolean;
	id: string | null;
	perPagePhotosCollection: number;
}
/**
 * - @end  collection states
 */

/**
 * @init
 * @photos states
 */
export interface IStatePhotos extends IStateGlobalApi {
	photos: IAdapterPhotos[] | [];
	orderBy: string;
}
export interface IStateOnlyPhoto {
	photo: any;
	error: IErrorStateGlobal;
	isLoading: boolean;
}
/**
 * - @end  photos states
 */

/**
 * - @init
 * - @users states
 */

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
	userName: string | null;
}
/**
 * - @end  users states
 */
