import { TypeEmptyStatePhotosPlash } from '~interfaces/photos.types';

export const ApiUnsplashAccessKey: string = import.meta.env.VITE_ACCESS_KEY;
export const ApiUnsplashSecretKey: string = import.meta.env.VITE_SECRET_KEY;

export const baseURL: string = 'https://api.unsplash.com';

export const EMPTY_STATE_PHOTOS_PLASH: TypeEmptyStatePhotosPlash = {
	results: [],
	isLoading: false, // true =>
	error: {
		message: '',
		isExistError: false,
	},
};
