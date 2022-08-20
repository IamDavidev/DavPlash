import { useEffect, useReducer } from 'react';

import { INITIAL_EMPTY_STATE_COLLECTION } from '~constants/EmptyStates.const';

import { IErrorRequest, IUseCollection } from '~interfaces/hooks.types';

import { ACTIONS_COLLECTION } from '~lib/actions';

import { collectionApi } from '~lib/api/collection.api';

import { collectionReducer } from '~lib/reducers/collection.reducer';

export default function useCollection(): IUseCollection {
	const [collection, setCollection] = useReducer(
		collectionReducer,
		INITIAL_EMPTY_STATE_COLLECTION
	);

	const initRequestCollection = (): void =>
		setCollection({
			type: ACTIONS_COLLECTION._INIT_REQUEST_COLLECTION_,
		});

	const successRequestCollection = (collection: any): void =>
		setCollection({
			type: ACTIONS_COLLECTION._SUCCESS_REQUEST_COLLECTION_,
			payload: {
				collection,
			},
		});

	const failureRequestCollection = ({ code, error }: IErrorRequest): void =>
		setCollection({
			type: ACTIONS_COLLECTION._FAILURE_REQUEST_COLLECTION_,
			payload: {
				code,
				error,
			},
		});

	const setIdCollection = (id: string): void =>
		setCollection({
			type: ACTIONS_COLLECTION._SET_ID_COLLECTION_,
			payload: {
				id,
			},
		});

	const setPerPagePhotosCollection = (perPage: number): void =>
		setCollection({
			type: ACTIONS_COLLECTION._SET_PER_PAGE_PHOTOS_COLLECTION_,
			payload: {
				perPage,
			},
		});

	useEffect((): void => {
		if (!collection.id) return;

		collectionApi({
			init: initRequestCollection,
			success: successRequestCollection,
			err: failureRequestCollection,
			id: collection.id,
			perPage: collection.perPagePhotosCollection,
		});
	}, [collection.id, collection.perPagePhotosCollection]);

	return {
		isLoading: collection.isLoading,
		error: collection.error,
		perPage: collection.perPagePhotosCollection,
		collection: collection.collection.data,
		photosCollection: collection.collection.photos,
		setId: setIdCollection,
		setPerPage: setPerPagePhotosCollection,
	};
}
