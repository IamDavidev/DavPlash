import {
	IStateCollection,
	IStateCollections,
	IStateOnlyPhoto,
	IStatePhotos,
	IStateUser,
	IStateUsers,
} from '~interfaces/unsplash.types';

import { OPTIONS_ORDER_BY } from './unsplash.const';

export const ERROR_INITIAL_STATE = {
	code: '',
	message: '',
	isError: false,
};

export const INITIAL_EMPTY_STATE_COLLECTIONS: IStateCollections = {
	collections: [],
	page: 1,
	perPage: 12,
	error: ERROR_INITIAL_STATE,
	isLoading: false,
	query: '',
};

export const INITIAL_EMPTY_STATE_COLLECTION: IStateCollection = {
	collection: {
		data: {},
		photosCollection: [],
	},
	error: ERROR_INITIAL_STATE,
	isLoading: false,
	id: null,
	perPagePhotosCollection: 12,
};

export const INITIAL_EMPTY_STATE_PHOTOS: IStatePhotos = {
	query: '',
	photos: [],
	page: 1,
	perPage: 12,
	orderBy: OPTIONS_ORDER_BY._LATESTS_,
	error: ERROR_INITIAL_STATE,
	isLoading: false,
};

export const INITIAL_EMPTY_STATE_USERS: IStateUsers = {
	users: {
		results: [],
		totalPages: 0,
		total: 0,
	},
	isLoading: false,
	query: 'coffee',
	error: ERROR_INITIAL_STATE,
	perPage: 24,
	page: 1,
};

export const INITIAL_EMPTY_STATE_USER: IStateUser = {
	user: {
		data: {},
		photos: [],
	},
	userName: null,
	error: ERROR_INITIAL_STATE,
	isLoading: false,
	orderByPhotos: OPTIONS_ORDER_BY._LATESTS_,
	perPagePhotos: 12,
};

export const EMPTY_STATE_PHOTO: IStateOnlyPhoto = {
	photo: {},
	error: ERROR_INITIAL_STATE,
	isLoading: false,
};
