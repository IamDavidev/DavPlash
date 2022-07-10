import { ACTIONS_TYPE_API_SPLASH } from '~lib/actions/apiSplash.actions';

export const reducerApiSplash = (state: any, action: any) => {
	switch (action.type) {
		case ACTIONS_TYPE_API_SPLASH._INTIAL_REQUEST: {
			return {
				...state,
				isLoading: true,
				error: {
					message: '',
					isExistError: false,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SUCCESS_REQUEST_: {
			const { collections, photos, users } = action.payload;

			return {
				...state,
				isLoading: false,
				collections: {
					...state.collections,
					results: collections,
				},
				photos: {
					...state.photos,
					results: photos,
				},
				users: {
					...state.users,
					results: users,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_PAGE_PHOTOS: {
			const { page } = action.payload;
			return {
				...state,
				photos: {
					...state.photos,
					page,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_PER_PAGE_PHOTOS: {
			const { perPage } = action.payload;
			return {
				...state,
				photos: {
					...state.photos,
					perPage,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_ORDER_BY_PHOTOS: {
			const { orderBy } = action.payload;
			return {
				...state,
				photos: {
					...state.photos,
					orderBy,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_PAGE_COLLECTIONS: {
			const { page } = action.payload;
			return {
				...state,
				collections: {
					...state.collections,
					page,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_PER_PAGE_COLLECTIONS: {
			const { perPage } = action.payload;
			return {
				...state,
				collections: {
					...state.collections,
					perPage,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_PER_PAGE_USERS: {
			const { perPage } = action.payload;
			return {
				...state,
				users: {
					...state.users,
					perPage,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_PAGE_USERS: {
			const { page } = action.payload;
			return {
				...state,
				users: {
					...state.users,
					page,
				},
			};
		}

		case ACTIONS_TYPE_API_SPLASH._SET_QUERY: {
			const { query } = action.payload;
			return {
				...state,
				query,
			};
		}

		case ACTIONS_TYPE_API_SPLASH._ERORR_REQUEST: {
			const { message } = action.payload;
			return {
				...state,
				isLoading: false,
				error: {
					message,
					isExistError: true,
				},
			};
		}

		default:
			throw new Error('Action not found');
	}
};
