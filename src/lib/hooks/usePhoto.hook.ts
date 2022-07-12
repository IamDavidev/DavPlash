import { useState, useEffect } from 'react';

import { TypeErrorPlash } from '~interfaces/ApiSplash.types';

export type TypePhotoSplash = {
	id?: string;
};

export interface IUsePhotoResult {
	photo: any;
}

export interface IStatePhoto {
	photo: any;
	error: TypeErrorPlash;
	isLoading: boolean;
}

export const EMPTY_STATE_PHOTO: IStatePhoto = {
	photo: null,
	error: {
		message: null,
		isExistError: false,
	},
	isLoading: false,
};

export const ACTIONS_PHTOTOS = {
	_INITIAL_REQUEST_: '_INITIAL_REQUEST',
	_SUCCESS_REQUEST_: '_SUCCESS_REQUEST',
	_ERROR_REQUEST_: '_ERROR_REQUEST',
};

export function reducerPhoto(state: any, action: any): IStatePhoto {
	switch (action.type) {
		case ACTIONS_PHTOTOS._INITIAL_REQUEST_: {
			return {
				...state,
				isLoading: true,
				error: {
					message: null,
					isExistError: false,
				},
			};
		}
		case ACTIONS_PHTOTOS._SUCCESS_REQUEST_: {
			const { photo } = action.payload;
			return {
				...state,
				isLoading: false,
				photo,
			};
		}
		case ACTIONS_PHTOTOS._ERROR_REQUEST_: {
			return {
				...state,
			};
		}
		default: {
			throw new Error(
				`HOOK > ERROR PHOTO: ${action.type} is not a valid action type.`
			);
		}
	}
}

export default function usePhoto(id: any) {
	// const [photo, setPhoto] = useState<IEmptyStatePhoto>(EMPTY_STATE_PHOTO);

	useEffect(() => {
		if (id) {
			// setPhoto(id);
		}
	}, [id]);

	return {
		// photo,
	};
}
