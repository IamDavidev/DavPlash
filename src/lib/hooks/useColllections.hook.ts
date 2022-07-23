import { useReducer, useEffect } from 'react';

import { INITIAL_EMPTY_STATE_COLLECTIONS } from '~constants/unsplash.const';

import { IAdapterCollection } from '~interfaces/Adapters.types';
import { IUseCollectionsHook } from '~interfaces/hooks.types';

import { ACTIONS_COLLECTIONS } from '~lib/actions';

import { collectionsApi } from '~lib/api';

import { collectionsReducer } from '~lib/reducers/collections.reducer';

export default function useCollections(): IUseCollectionsHook {
	const [collections, setCollections] = useReducer(
		collectionsReducer,
		INITIAL_EMPTY_STATE_COLLECTIONS
	);

	const initRequestCollections: () => void = (): void =>
		setCollections({
			type: ACTIONS_COLLECTIONS._INIT_REQUEST_COLLECTIONS_,
		});

	const successRequestCollections = (collections: IAdapterCollection): void =>
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
	}): void =>
		setCollections({
			type: ACTIONS_COLLECTIONS._FAILURE_REQUEST_COLLECTIONS_,
			payload: {
				message: error,
				code,
			},
		});

	const setPageCollections = (page: number): void =>
		setCollections({
			type: ACTIONS_COLLECTIONS._SET_PAGE_COLLECTIONS_,
			payload: {
				page,
			},
		});
	const setPerPageCollections = (perPage: number): void =>
		setCollections({
			type: ACTIONS_COLLECTIONS._SET_PER_PAGE_COLLECTIONS_,
			payload: {
				perPage,
			},
		});

	const setQueryCollections = (query: string): void =>
		setCollections({
			type: ACTIONS_COLLECTIONS._SET_QUERY_COLLECTIONS_,
			payload: {
				query,
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
	}, [collections.page, collections.perPage, collections.query]);

	return {
		totalCollections: collections.perPage,
		error: collections.error,
		collections: collections.collections,
		isLoading: collections.isLoading,
		setPerPageCollections,
		setPageCollections,
		setQueryCollections,
	};
}
