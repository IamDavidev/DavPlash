import { useEffect, useReducer } from 'react';

import { TypeErrorPlash } from '~interfaces/ApiSplash.types';
import { IAdapterPhotos } from '~interfaces/photos.types';
import { ApiPhoto } from '~lib/api/photo.api';

export interface IStatePhoto {
	photo: IAdapterPhotos;
	error: TypeErrorPlash;
	isLoading: boolean;
}

export const EMPTY_STATE_PHOTO: IStatePhoto = {
	photo: {
		id: '',
		likes: 0,
		description: '',
		images: {
			small: '',
			full: '',
			regular: '',
		},
		user: {
			id: '',
			name: '',
			images: {
				small: '',
				full: '',
				regular: '',
			},
			bio: '',
			likes: 0,
			photos: 0,
			username: '',
		},
	},
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
export const _INITIAL_REQUEST_STATE_ = {
	isLoading: true,
	error: {
		message: null,
		isExistError: false,
	},
};

export function reducerPhoto(state: IStatePhoto, action: any): IStatePhoto {
	switch (action.type) {
		case ACTIONS_PHTOTOS._INITIAL_REQUEST_: {
			return {
				...state,
				..._INITIAL_REQUEST_STATE_,
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
			const { error } = action.payload;
			return {
				...state,
				error: {
					message: error.message,
					isExistError: error.isExistError,
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

export default function usePhoto(id?: any): IStatePhoto {
	const [photo, setPhoto] = useReducer(reducerPhoto, EMPTY_STATE_PHOTO);

	const initialRequesPhoto = () =>
		setPhoto({
			type: ACTIONS_PHTOTOS._INITIAL_REQUEST_,
		});

	const successRequestPhoto = (photo: any) =>
		setPhoto({
			type: ACTIONS_PHTOTOS._SUCCESS_REQUEST_,
			payload: {
				photo,
			},
		});

	const errorRequestPhoto = (err: any) =>
		setPhoto({
			type: ACTIONS_PHTOTOS._ERROR_REQUEST_,
			payload: {
				error: {
					message: err,
					isExistError: true,
				},
			},
		});

	useEffect(() => {
		ApiPhoto({
			init: initialRequesPhoto,
			success: successRequestPhoto,
			err: errorRequestPhoto,
			id,
		});
	}, [id]);

	return {
		photo: photo.photo,
		error: photo.error,
		isLoading: photo.isLoading,
	};
}
