export type typeOrderBy = string;

export interface TypeGenericRequestProps {
	perPage: number;
	page: number;
	orderBy: typeOrderBy;
}

export type TypeErrorPhotosPlash = {
	message: string | null;
	isExistError: boolean;
};

export interface typeApiPhotosProps extends TypeGenericRequestProps {
	// setPhotos: Function;
	// function void
	success: (results: any[]) => void;
	error: (error: string) => void;
	init: () => void;
}

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
export interface TypeAdapterPhotos {
	id: string;
	likes: number;
	description: string | null;
	images: TypeImagesAdapterPhotos;
	user: TypeUserAdapterPhotos;
}
/** endAdapters photos */

/** Api photos */

export type TypeGetPhotosServiceProps = TypeGenericRequestProps;

export type TypePhotoPlash = TypeAdapterPhotos;

export interface TypeEmptyStatePhotosPlash extends TypeGenericRequestProps {
	results: TypePhotoPlash[];
	isLoading: boolean;
	error: TypeErrorPhotosPlash;
}

export interface usePhotos {
	photos: TypeEmptyStatePhotosPlash;
	setPage: (page: number) => void;
	setPerPage: (perPage: number) => void;
	setOrderBy: (orderBy: typeOrderBy) => void;
}
