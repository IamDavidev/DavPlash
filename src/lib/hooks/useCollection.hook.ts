import { useEffect, useReducer } from 'react';

import { INITIAL_EMPTY_STATE_COLLECTION } from '~constants/EmptyStates.const';

import { IErrorRequest } from '~interfaces/hooks.types';

import { ACTIONS_COLLECTION } from '~lib/actions';

import { collectionApi } from '~lib/api/collection.api';

import { collectionReducer } from '~lib/reducers/collection.reducer';

export default function useCollection() {
	const [collection, setCollection] = useReducer(
		collectionReducer,
		INITIAL_EMPTY_STATE_COLLECTION
	);

	const initRequestCollection = () =>
		setCollection({
			type: ACTIONS_COLLECTION._INIT_REQUEST_COLLECTION_,
		});

	const successRequestCollection = (collection: any) =>
		setCollection({
			type: ACTIONS_COLLECTION._SUCCESS_REQUEST_COLLECTION_,
			payload: {
				collection,
			},
		});

	const failureRequestCollection = ({ code, error }: IErrorRequest) =>
		setCollection({
			type: ACTIONS_COLLECTION._FAILURE_REQUEST_COLLECTION_,
			payload: {
				code,
				error,
			},
		});

	const setIdCollection = (id: string) =>
		setCollection({
			type: ACTIONS_COLLECTION._SET_ID_COLLECTION_,
			payload: {
				id,
			},
		});

	useEffect(() => {
		if (!collection.id) return;

		collectionApi({
			init: initRequestCollection,
			success: successRequestCollection,
			err: failureRequestCollection,
			id: collection.id,
		});
	}, [collection.id]);

	return {
		collection: collection.collection,
		setId: setIdCollection,
	};
}
