import { IStateOnlyPhoto } from '~interfaces/unsplash.types';

import { ACTIONS_PHOTO } from '~lib/actions';

interface IActionPhoto {
	type: string;
	payload?: any;
}

export function reducerPhoto(
	state: IStateOnlyPhoto,
	action: IActionPhoto
): IStateOnlyPhoto {
	switch (action.type) {
		case ACTIONS_PHOTO._INITIAL_REQUEST_: {
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
		case ACTIONS_PHOTO._SUCCESS_REQUEST_: {
			const { photo } = action.payload;
			return {
				...state,
				isLoading: false,
				photo,
			};
		}
		case ACTIONS_PHOTO._ERROR_REQUEST_: {
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
