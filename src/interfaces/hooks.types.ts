import { IAdapterCollection, IAdapterPhotos } from './Adapters.types';

/**
 * - return hook usePhotos
 */
export interface IUsePhotosHook {
	totalPhotos: number;
	isLoading: boolean;
	photos: IAdapterPhotos[];
	setPagePhotos: (page: number) => void;
	setPerPagePhotos: (perPage: number) => void;
	setOrderByPhotos: (orderBy: string) => void;
}

/**
 * - return hook usePhoto
 */

export interface IUsePhotoHook {
	photo: IAdapterPhotos;
	error: {
		message: string | null;
		isExistError: boolean;
	};
	isLoading: boolean;
}

/**
 * - return hook useCollections
 */
export interface IUseCollectionsHook {
	totalCollections: number;
	setPerPageCollections: (perPage: number) => void;
	setPageCollections: (page: number) => void;
	collections: IAdapterCollection[];
	error: any;
	isLoading: boolean;
}
