import { IStateCollections } from '~interfaces/unsplash.types';

export const ApiUnsplashAccessKey: string = import.meta.env.VITE_ACCESS_KEY;
export const ApiUnsplashSecretKey: string = import.meta.env.VITE_SECRET_KEY;

export const baseURL: string = 'https://api.unsplash.com';

export const INITIAL_EMPTY_STATE_COLLECTIONS: IStateCollections = {
	collections: [],
	page: 1,
	perPage: 10,
	error: {
		code: '',
		message: '',
		isError: false,
	},
	isLoading: false,
};
