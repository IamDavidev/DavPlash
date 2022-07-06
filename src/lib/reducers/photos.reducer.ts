import { TypeEmptyStatePhotosPlash } from '~interfaces/photos.types';

import { EMPTY_STATE_PHOTOS_PLASH } from '~constants/unsplash.const';

import { ACTIONS_PHOTOS } from '../actions';

export const reducerPhotos = (
	state: any = EMPTY_STATE_PHOTOS_PLASH,
	action: any
): TypeEmptyStatePhotosPlash => {
	switch (action.type) {
		case ACTIONS_PHOTOS._INTIAL_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: null,
			};
		}

		case ACTIONS_PHOTOS._SUCCESS_REQUEST: {
			const { results } = action.payload;
			return {
				...state,
				results,
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
			return state;
	}
};
