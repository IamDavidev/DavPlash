import { typeOrderBy } from './ApiSplash.types';

export interface TypeGenericRequestProps {
	perPage: number;
	page: number;
	orderBy: typeOrderBy;
}

export type TypeErrorPhotosPlash = {
	message: string | null;
	isExistError: boolean;
};

export interface requestPhotosApi {
	data: any[] | [];
	err: string | null;
	isSuccess: boolean;
}

/** Adapters photos  */
type TypeImagesAdapterPhotos = {
	small: string;
	full: string;
	regular: string;
};

type TypeUserAdapterPhotos = {
	id: string;
	name: string;
	images: TypeImagesAdapterPhotos;
	likes: number;
	photos: number;
	username: string;
	bio: string;
};
export interface IAdapterPhotos {
	id: string;
	likes: number;
	description: string | null;
	images: TypeImagesAdapterPhotos;
	user: TypeUserAdapterPhotos;
}
/** endAdapters photos */

/** Api photos */

export type TypeGetPhotosServiceProps = TypeGenericRequestProps;

export type IPhotoSplash = IAdapterPhotos;

export interface TypeEmptyStatePhotosPlash extends TypeGenericRequestProps {
	results: IPhotoSplash[];
	isLoading: boolean;
	error: TypeErrorPhotosPlash;
}

export interface usePhotos {
	photos: TypeEmptyStatePhotosPlash;
	setPage: (page: number) => void;
	setPerPage: (perPage: number) => void;
	setOrderBy: (orderBy: typeOrderBy) => void;
}
