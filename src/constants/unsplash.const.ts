import {
	IStateCollections,
	IStateOnlyPhoto,
	IStatePhotos,
	IStateUser,
} from '~interfaces/unsplash.types';

export const ApiUnsplashAccessKey: string = import.meta.env.VITE_ACCESS_KEY;
export const ApiUnsplashSecretKey: string = import.meta.env.VITE_SECRET_KEY;

export const baseURL: string = 'https://api.unsplash.com';

export const ERROR_INITIAL_STATE = {
	code: '',
	message: '',
	isError: false,
};

export const INITIAL_EMPTY_STATE_COLLECTIONS: IStateCollections = {
	collections: [],
	page: 1,
	perPage: 10,
	error: ERROR_INITIAL_STATE,
	isLoading: false,
};

export const INITIAL_EMPTY_STATE_PHOTOS: IStatePhotos = {
	photos: [],
	page: 1,
	perPage: 10,
	orderBy: 'latest',
	error: ERROR_INITIAL_STATE,
	isLoading: false,
};

export const INITIAL_EMPTY_STATE_USERS: IStateUser = {
	users: [],
	isLoading: false,
	query: 'coffee',
	error: {
		code: '',
		message: '',
		isError: false,
	},
	perPage: 10,
	page: 1,
};

export const EMPTY_STATE_PHOTO: IStateOnlyPhoto = {
	photo: {
		id: '',
		likes: 0,
		description: '',
		images: {
			small: '',
			full: '',
			regular: '',
		},
		user: {
			id: '',
			name: '',
			images: {
				small: '',
				full: '',
				regular: '',
			},
			bio: '',
			likes: 0,
			photos: 0,
			username: '',
		},
	},
	error: {
		code: '',
		message: '',
		isExistError: false,
	},
	isLoading: false,
};
