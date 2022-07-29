import { ACTIONS_USERS } from '~lib/actions';

import { IStateUsers } from '~interfaces/unsplash.types';
import { IActionReducer } from '~interfaces/reducer.types';
import { ERROR_INITIAL_STATE } from '~constants/EmptyStates.const';

export function usersReducer(
	state: IStateUsers,
	action: IActionReducer
): IStateUsers {
	switch (action.type) {
		case ACTIONS_USERS._INIT_REQUEST_USERS_: {
			return {
				...state,
				isLoading: true,
				error: ERROR_INITIAL_STATE,
			};
		}

		case ACTIONS_USERS._SUCCESS_REQUEST_USERS_: {
			const { users } = action.payload;
			return {
				...state,
				users,
				isLoading: false,
			};
		}

		case ACTIONS_USERS._FAILURE_REQUEST_USERS_: {
			const { code, message } = action.payload;
			return {
				...state,
				error: {
					code,
					message,
					isError: true,
				},
			};
		}

		case ACTIONS_USERS._SET_PAGE_USERS_: {
			const { page } = action.payload;
			return {
				...state,
				page,
			};
		}

		case ACTIONS_USERS._SET_PER_PAGE_USERS_: {
			const { perPage } = action.payload;
			return {
				...state,
				perPage,
			};
		}

		case ACTIONS_USERS._SET_QUERY_USERS_: {
			const { query } = action.payload;
			return {
				...state,
				query,
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
