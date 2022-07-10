import { useEffect, useReducer } from 'react';
import { INTITIAL_STATE_EMPTY_API_SPLASH } from '~constants/unsplash.const';
import { ACTIONS_TYPE_API_SPLASH } from '~lib/actions/apiSplash.actions';
import { SplahsApi } from '~lib/api/Splah.api';
import { reducerApiSplash } from '~lib/reducers/apiSplash.reducer';

function useApiSplah() {
	const [apiSplah, SetApiSplah] = useReducer(
		reducerApiSplash,
		INTITIAL_STATE_EMPTY_API_SPLASH
	);

	const initRequestSplash = () =>
		SetApiSplah({
			type: ACTIONS_TYPE_API_SPLASH._INTIAL_REQUEST,
		});

	const successRequestSplash = ({ photos, collections, users }: any) =>
		SetApiSplah({
			type: ACTIONS_TYPE_API_SPLASH._SUCCESS_REQUEST_,
			payload: { photos, collections, users },
		});

	useEffect(() => {
		SplahsApi({
			init: initRequestSplash,
			success: successRequestSplash,
		});
	}, []);

	return {
		photos: apiSplah.photos,
		collections: apiSplah.collections,
		users: apiSplah.users,
		isLoading: apiSplah.isLoading,
	};
}
export default useApiSplah;
