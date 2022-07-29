import { ERROR_INITIAL_STATE } from '~constants/EmptyStates.const';
import { IActionReducer } from '~interfaces/reducer.types';
import { IStateOnlyPhoto } from '~interfaces/unsplash.types';

import { ACTIONS_PHOTO } from '~lib/actions';

export function reducerPhoto(
	state: IStateOnlyPhoto,
	action: IActionReducer
): IStateOnlyPhoto {
	switch (action.type) {
		case ACTIONS_PHOTO._INITIAL_REQUEST_PHOTO_: {
			return {
				...state,
				isLoading: true,
				error: ERROR_INITIAL_STATE,
			};
		}
		case ACTIONS_PHOTO._SUCCESS_REQUEST_PHOTO_: {
			const { photo } = action.payload;
			return {
				...state,
				isLoading: false,
				photo,
			};
		}
		case ACTIONS_PHOTO._FAILURE_REQUEST_PHOTO_: {
			const { message, code } = action.payload;
			return {
				...state,
				error: {
					code,
					message,
					isError: true,
				},
			};
		}
		default: {
			throw new Error(
				`HOOK > ERROR PHOTO: ${action.type} is not a valid action type.`
			);
		}
	}
}
