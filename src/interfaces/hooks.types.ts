import {
	IAdapterCollection,
	IAdapterCollectionData,
	IAdapterPhotos,
	IAdapterUsers,
} from './Adapters.types';

export type TypeErrorHook = {
	message: string;
	code?: string | number | undefined;
	isError: boolean;
};

export interface IGenericHook {
	page: number;
	error: TypeErrorHook;
	isLoading: boolean;
}

export interface IErrorRequest {
	error: string;
	code: string | number | undefined;
}

/**
 * - return hook usePhotos
 */
export interface IUsePhotosHook extends IGenericHook {
	totalPhotos: number;
	photos: IAdapterPhotos[];
	setPagePhotos: (page: number) => void;
	setPerPagePhotos: (perPage: number) => void;
	setOrderByPhotos: (orderBy: string) => void;
	setQueryPhotos: (query: string) => void;
}

/**
 * - return hook usePhoto
 */

export interface IUsePhotoHook {
	// photo: IAdapterPhotos;
	photo: any;
	error: TypeErrorHook;
	isLoading: boolean;
}

/**
 * - return hook useCollections
 */
export interface IUseCollectionsHook extends IGenericHook {
	totalCollections: number;
	collections: IAdapterCollection[];
	setPerPageCollections: (perPage: number) => void;
	setPageCollections: (page: number) => void;
	setQueryCollections: (query: string) => void;
}
export interface IUseCollection {
	isLoading: boolean;
	error: TypeErrorHook;
	perPage: number;
	collection: IAdapterCollectionData;
	photosCollection: IAdapterPhotos[];
	setId: (id: string) => void;
	setPerPage: (perPage: number) => void;
}

/**
 * - return hook useUser
 */

export interface IuseUsersHook extends IGenericHook {
	users: {
		results: IAdapterUsers[];
		total: number;
		total_page: number;
	};
	setPageUsers: (page: number) => void;
	setPerPageUsers: (perPage: number) => void;
	setQueryUsers: (query: string) => void;
}
