import { ACTIONS_PHOTOS } from '~lib/actions/photos.actions';

import { IActionReducer } from '~interfaces/reducer.types';
import { IStatePhotos } from '~interfaces/unsplash.types';
import { ERROR_INITIAL_STATE } from '~constants/EmptyStates.const';

export function photosReducer(
	state: IStatePhotos,
	action: IActionReducer
): IStatePhotos {
	switch (action.type) {
		case ACTIONS_PHOTOS._INIT_REQUEST_PHOTOS_: {
			return {
				...state,
				isLoading: true,
				error: ERROR_INITIAL_STATE,
			};
		}
		case ACTIONS_PHOTOS._SUCCESS_REQUEST_PHOTOS_: {
			const { photos } = action.payload;
			return {
				...state,
				photos,
				isLoading: false,
			};
		}

		case ACTIONS_PHOTOS._FAILURE_REQUEST_PHOTOS_: {
			const { message, code } = action.payload;
			return {
				...state,
				error: {
					code,
					message,
					isError: true,
				},
				isLoading: false,
			};
		}

		case ACTIONS_PHOTOS._SET_PAGE_PHOTOS_: {
			const { page } = action.payload;
			return {
				...state,
				page,
			};
		}

		case ACTIONS_PHOTOS._SET_PER_PAGE_PHOTOS_: {
			const { perPage } = action.payload;
			return {
				...state,
				perPage,
			};
		}

		case ACTIONS_PHOTOS._SET_ORDER_BY_PHOTOS_: {
			const { orderBy } = action.payload;
			return {
				...state,
				orderBy,
			};
		}

		case ACTIONS_PHOTOS._SET_QUERY_PHOTOS_: {
			const { query } = action.payload;
			return {
				...state,
				query,
				page: 1,
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
