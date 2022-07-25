import { IStateCollections } from '~interfaces/unsplash.types';
import { ACTIONS_COLLECTIONS } from '~lib/actions';

export const collectionsReducer = (
	state: any,
	action: any
): IStateCollections => {
	switch (action.type) {
		case ACTIONS_COLLECTIONS._INIT_REQUEST_COLLECTIONS_: {
			return {
				...state,
				isLoading: true,
				error: {
					code: '',
					message: '',
					isError: false,
				},
			};
		}

		case ACTIONS_COLLECTIONS._SUCCESS_REQUEST_COLLECTIONS_: {
			const { collections } = action.payload;
			return {
				...state,
				collections: [...collections],
				isLoading: false,
			};
		}

		case ACTIONS_COLLECTIONS._FAILURE_REQUEST_COLLECTIONS_: {
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

		case ACTIONS_COLLECTIONS._SET_PAGE_COLLECTIONS_: {
			const { page } = action.payload;
			return {
				...state,
				perPage: 12,
				page,
			};
		}

		case ACTIONS_COLLECTIONS._SET_PER_PAGE_COLLECTIONS_: {
			const { perPage } = action.payload;
			return {
				...state,
				perPage,
			};
		}

		case ACTIONS_COLLECTIONS._SET_QUERY_COLLECTIONS_: {
			const { query } = action.payload;
			return {
				...state,
				query,
				page: 1,
			};
		}

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
