type TypeErrorPhotosPlash = {
	message: string;
	isExistError: boolean;
};

export interface TypeEmptyStatePhotosPlash {
	results: any[];
	isLoading: boolean;
	error: TypeErrorPhotosPlash;
}
export interface typeApiPhotosProps {
	// setPhotos: Function;
	successPhotos: Function;
}

export interface usePhotos {
	photos: TypeEmptyStatePhotosPlash;
}
