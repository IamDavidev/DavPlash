import { ERROR_INITIAL_STATE } from '~constants/EmptyStates.const';
import { IActionReducer } from '~interfaces/reducer.types';
import { IStateCollection } from '~interfaces/unsplash.types';
import { ACTIONS_COLLECTION } from '~lib/actions';

export function collectionReducer(
	state: IStateCollection,
	action: IActionReducer
): IStateCollection {
	switch (action.type) {
		case ACTIONS_COLLECTION._INIT_REQUEST_COLLECTION_: {
			return {
				...state,
				isLoading: true,
				error: ERROR_INITIAL_STATE,
			};
		}

		case ACTIONS_COLLECTION._SUCCESS_REQUEST_COLLECTION_: {
			const { collection } = action.payload;
			return {
				...state,
				collection,
				isLoading: false,
			};
		}

		case ACTIONS_COLLECTION._FAILURE_REQUEST_COLLECTION_: {
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

		case ACTIONS_COLLECTION._SET_ID_COLLECTION_: {
			const { id } = action.payload;

			return {
				...state,
				id,
			};
		}

		default: {
			throw new Error(
				`HOOK > ERROR COLLECTION: ${action.type} is not a valid action type.`
			);
		}
	}
}
