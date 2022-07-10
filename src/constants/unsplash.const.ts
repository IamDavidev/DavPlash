import { TypeEmptyApiSplash } from '~interfaces/ApiSplash.types';

export const ApiUnsplashAccessKey: string = import.meta.env.VITE_ACCESS_KEY;
export const ApiUnsplashSecretKey: string = import.meta.env.VITE_SECRET_KEY;

export const baseURL: string = 'https://api.unsplash.com';

export const INTITIAL_STATE_EMPTY_API_SPLASH: TypeEmptyApiSplash = {
	isLoading: false,
	error: {
		message: '',
		isExistError: false,
	},
	photos: {
		results: [],
		perPage: 15,
		page: 1,
		orderBy: 'latest',
	},
	collections: {
		results: [],
		perPage: 10,
		page: 1,
	},
	users: {
		results: [],
		perPage: 10,
		page: 1,
	},
	query: '',
};
