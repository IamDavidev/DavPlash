import { IStateUser } from '~interfaces/unsplash.types';
import { ACTIONS_USER } from '~lib/actions/user.actions';

interface IActionUser {
	type: string;
	payload?: any;
}

export function reducerUser(
	state: IStateUser,
	action: IActionUser
): IStateUser {
	switch (action.type) {
		case ACTIONS_USER._INIT_REQUEST_USER_: {
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

		default: {
			throw new Error(
				`HOOK > ERROR USER : ${action.type} is not a valid action type.`
			);
		}
	}
}
