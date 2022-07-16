import { IAdapterPhotos } from './Adapters.types';

export interface IUsePhotosHook {
	photos: IAdapterPhotos[];
	setPagePhotos: (page: number) => void;
	setPerPagePhotos: (perPage: number) => void;
	setOrderByPhotos: (orderBy: string) => void;
}

export interface IUsePhotoHook {
	photo: IAdapterPhotos;
	error: {
		message: string | null;
		isExistError: boolean;
	};
	isLoading: boolean;
}
