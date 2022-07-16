import { useReducer, useEffect } from 'react';

import { INITIAL_EMPTY_STATE_COLLECTIONS } from '~constants/unsplash.const';

import { IAdapterCollection } from '~interfaces/Adapters.types';

import { ACTIONS_COLLECTIONS } from '~lib/actions';

import { collectionsApi } from '~lib/api';

import { collectionsReducer } from '~lib/reducers/Rcollections.reducer';

interface IUseCollectionsHook {
	collections: IAdapterCollection[];
	error: any;
	isLoading: boolean;
}

export default function useCollections(): IUseCollectionsHook {
	const [collections, setCollections] = useReducer(
		collectionsReducer,
		INITIAL_EMPTY_STATE_COLLECTIONS
	);

	const initRequestCollections = () =>
		setCollections({
			type: ACTIONS_COLLECTIONS._INIT_REQUEST_COLLECTIONS_,
		});

	const successRequestCollections = (collections: IAdapterCollection) =>
		setCollections({
			type: ACTIONS_COLLECTIONS._SUCCESS_REQUEST_COLLECTIONS_,
			payload: {
				collections,
			},
		});

	const failureRequestCollections = ({
		error,
		code,
	}: {
		error: string;
		code?: string | number | undefined;
	}) =>
		setCollections({
			type: ACTIONS_COLLECTIONS._FAILURE_REQUEST_COLLECTIONS_,
			payload: {
				error,
				code,
			},
		});

	useEffect(() => {
		collectionsApi({
			init: initRequestCollections,
			success: successRequestCollections,
			err: failureRequestCollections,
			page: collections.page,
			perPage: collections.perPage,
		});
	}, [collections.page, collections.perPage]);

	return {
		error: collections.error,
		collections: collections.collections,
		isLoading: collections.isLoading,
	};
}
