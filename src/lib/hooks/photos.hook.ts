import { useEffect, useReducer } from 'react';

import {
	usePhotos,
	TypePhotoPlash,
	typeOrderBy,
} from '~interfaces/photos.types';
import { EMPTY_STATE_PHOTOS_PLASH } from '~constants/unsplash.const';
import { apiPhotos } from '~lib/api';
import { reducerPhotos } from '../reducers';
import { ACTIONS_PHOTOS } from '../actions';

export function usePhotosPlash(): usePhotos {
	// const [photos, setPhotos] = useState<TypeEmptyStatePhotosPlash>(
	// 	EMPTY_STATE_PHOTOS_PLASH
	// );
	const [photos, setPhotos] = useReducer(
		reducerPhotos,
		EMPTY_STATE_PHOTOS_PLASH
	);

	// const intialRequestPhotos = () =>
	// 	setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
	// 		...prev,
	// 		isLoading: true,
	// 	}));
	const initialRequestPhotos = () =>
		setPhotos({
			type: ACTIONS_PHOTOS._INTIAL_REQUEST,
		});

	// const successPhotos = (results: any[]): void =>
	// 	setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
	// 		...prev,
	// 		results, // = results: results`
	// 		isLoading: false,
	// 	}));
	const successPhotos = (results: TypePhotoPlash[]) =>
		setPhotos({
			type: ACTIONS_PHOTOS._SUCCESS_REQUEST,
			payload: {
				results,
			},
		});

	// const errorPhotos = (error: any): void =>
	// 	setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
	// 		...prev,
	// 		error: {
	// 			message: error,
	// 			isExistError: true,
	// 		},
	// 		isLoading: false,
	// 	}));
	const errorPhotos = (error: string) =>
		setPhotos({
			type: ACTIONS_PHOTOS._ERROR_REQUEST,
			payload: {
				ErrorMsg: error,
			},
		});

	const setPage = (page: number) =>
		setPhotos({
			type: ACTIONS_PHOTOS._SET_PAGE,
			payload: {
				page,
			},
		});

	const setPerPage = (perPage: number) =>
		setPhotos({
			type: ACTIONS_PHOTOS._SET_PER_PAGE,
			payload: {
				perPage,
			},
		});
	const setOrderBy = (orderBy: typeOrderBy) =>
		setPhotos({
			type: ACTIONS_PHOTOS._SET_ORDER_BY,
			payload: {
				orderBy,
			},
		});

	useEffect(() => {
		apiPhotos({
			init: initialRequestPhotos,
			success: successPhotos,
			error: errorPhotos,
			page: photos.page,
			perPage: photos.perPage,
			orderBy: photos.orderBy,
		});
	}, [photos.perPage, photos.perPage, photos.orderBy]);

	return {
		photos,
		setPage,
		setPerPage,
		setOrderBy,
	};
}
