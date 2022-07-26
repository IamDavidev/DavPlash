import {
	IStateCollections,
	IStateOnlyPhoto,
	IStatePhotos,
	IStateUser,
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

export const INITIAL_EMPTY_STATE_PHOTOS: IStatePhotos = {
	query: '',
	photos: [],
	page: 1,
	perPage: 12,
	orderBy: OPTIONS_ORDER_BY._LATESTS_,
	error: ERROR_INITIAL_STATE,
	isLoading: false,
};

export const INITIAL_EMPTY_STATE_USERS: IStateUser = {
	users: {},
	isLoading: false,
	query: 'coffee',
	error: {
		code: '',
		message: '',
		isError: false,
	},
	perPage: 12,
	page: 1,
};

export const EMPTY_STATE_PHOTO: IStateOnlyPhoto = {
	photo: {},
	error: {
		code: '',
		message: '',
		isExistError: false,
	},
	isLoading: false,
};
