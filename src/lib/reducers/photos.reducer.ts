import {
	TypeEmptyStatePhotosPlash,
	TypeErrorPhotosPlash,
} from '~interfaces/photos.types';

import { EMPTY_STATE_PHOTOS_PLASH } from '~constants/unsplash.const';

import { ACTIONS_PHOTOS } from '../actions';

type TypeNotError = {
	error: TypeErrorPhotosPlash;
};

const notError: TypeNotError = {
	error: {
		isExistError: false,
		message: null,
	},
};

export const reducerPhotos = (
	state: any = EMPTY_STATE_PHOTOS_PLASH,
	action: any
): TypeEmptyStatePhotosPlash => {
	switch (action.type) {
		case ACTIONS_PHOTOS._INTIAL_REQUEST: {
			return {
				...state,
				...notError,
				isLoading: true,
			};
		}

		case ACTIONS_PHOTOS._SUCCESS_REQUEST: {
			const { results } = action.payload;
			return {
				...state,
				results,
				isLoading: false,
				...notError,
			};
		}

		case ACTIONS_PHOTOS._ERROR_REQUEST: {
			const { ErrorMsg } = action.payload;
			return {
				...state,
				error: {
					isExistError: true,
					error: ErrorMsg,
				},
			};
		}

		case ACTIONS_PHOTOS._SET_PER_PAGE: {
			const { perPage } = action.payload;
			return {
				...state,
				perPage,
			};
		}

		case ACTIONS_PHOTOS._SET_PAGE: {
			const { page } = action.payload;
			return {
				...state,
				page,
				perPage: 15,
			};
		}

		case ACTIONS_PHOTOS._SET_ORDER_BY: {
			const { orderBy } = action.payload;
			return {
				...state,
				orderBy,
			};
		}

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
