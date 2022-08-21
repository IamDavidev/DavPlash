import { ACTIONS_USER } from '~lib/actions/user.actions';

import { IActionReducer } from '~interfaces/reducer.types';
import { IStateUser } from '~interfaces/unsplash.types';
import { ERROR_INITIAL_STATE } from '~constants/EmptyStates.const';

export function reducerUser(
	state: IStateUser,
	action: IActionReducer
): IStateUser {
	switch (action.type) {
		case ACTIONS_USER._INIT_REQUEST_USER_: {
			return {
				...state,
				isLoading: true,
				error: ERROR_INITIAL_STATE,
			};
		}

		case ACTIONS_USER._SUCCESS_REQUEST_USER_: {
			const { user, photos } = action.payload;
			return {
				...state,
				isLoading: false,
				user: {
					data: user,
					photos,
				},
			};
		}

		case ACTIONS_USER._FAILURE_REQUEST_USER_: {
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

		case ACTIONS_USER._SET_PER_PAGE_PHOTOS_USER_: {
			const { perPagePhotos } = action.payload;
			return {
				...state,
				perPagePhotos,
			};
		}

		case ACTIONS_USER._SET_ORDER_BY_PHOTOS_USER_: {
			const { orderByPhotos } = action.payload;
			return {
				...state,
				orderByPhotos,
			};
		}

		case ACTIONS_USER._SET_USERNAME_: {
			const { userName } = action.payload;
			return {
				...state,
				userName,
			};
		}

		default: {
			throw new Error(
				`HOOK > ERROR USER : ${action.type} is not a valid action type.`
			);
		}
	}
}
