import { useEffect, useReducer } from 'react';
import { EMPTY_STATE_PHOTO } from '~constants/EmptyStates.const';

import { IAdapterPhotos } from '~interfaces/Adapters.types';

import { IUsePhotoHook } from '~interfaces/hooks.types';

import { ACTIONS_PHOTO } from '~lib/actions';

import { ApiPhoto } from '~lib/api/photo.api';
import { reducerPhoto } from '~lib/reducers';

// export function reducerPhoto(state: IStatePhoto, action: any): IStatePhoto {

export default function usePhoto(id?: any): IUsePhotoHook {
	const [photo, setPhoto] = useReducer(reducerPhoto, EMPTY_STATE_PHOTO);

	const initialRequesPhoto = () =>
		setPhoto({
			type: ACTIONS_PHOTO._INITIAL_REQUEST_,
		});

	const successRequestPhoto = (photo: IAdapterPhotos): void =>
		setPhoto({
			type: ACTIONS_PHOTO._SUCCESS_REQUEST_,
			payload: {
				photo,
			},
		});

	const errorRequestPhoto = ({
		error,
		code,
	}: {
		error: string;
		code?: string | number;
	}): void =>
		setPhoto({
			type: ACTIONS_PHOTO._ERROR_REQUEST_,
			payload: {
				message: error,
				code,
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
