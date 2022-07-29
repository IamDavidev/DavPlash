import { useEffect, useReducer } from 'react';

import { INITIAL_EMPTY_STATE_USER } from '~constants/EmptyStates.const';
import { IErrorRequest } from '~interfaces/hooks.types';

import { ACTIONS_USER } from '~lib/actions/user.actions';

import { userApi } from '~lib/api/user.api';

import { reducerUser } from '~lib/reducers';

interface IuseUserHook {
	user: any;
	photos: any[];
	setPerPageUserPhotos: (perPagePhotos: number) => void;
	setOrderByUserPhotos: (orderByPhotos: string) => void;
	isLoading: boolean;
	error: {
		code: string | number;
		message: string;
		isError: boolean;
	};
}

export default function useUser(username?: string): IuseUserHook {
	const [user, setUser] = useReducer(reducerUser, INITIAL_EMPTY_STATE_USER);

	const initRequestUser = () =>
		setUser({
			type: ACTIONS_USER._INIT_REQUEST_USER_,
		});

	const successRequestUser = ({
		user,
		photos,
	}: {
		user: any;
		photos: any[];
	}) => {
		setUser({
			type: ACTIONS_USER._SUCCESS_REQUEST_USER_,
			payload: {
				user,
				photos,
			},
		});
	};
	const errorRequestUser = ({ error, code }: IErrorRequest) =>
		setUser({
			type: ACTIONS_USER._FAILURE_REQUEST_USER_,
			payload: {
				message: error,
				code,
			},
		});

	const setPerPageUserPhotos = (perPagePhotos: number) =>
		setUser({
			type: ACTIONS_USER._SET_PER_PAGE_PHOTOS_USER_,
			payload: {
				perPagePhotos,
			},
		});

	const setOrderByUserPhotos = (orderByPhotos: any) =>
		setUser({
			type: ACTIONS_USER._SET_ORDER_BY_PHOTOS_USER_,
			payload: {
				orderByPhotos,
			},
		});

	useEffect(() => {
		userApi({
			init: initRequestUser,
			success: successRequestUser,
			err: errorRequestUser,
			username,
		});
	}, [username, user.orderByPhotos, user.perPagePhotos]);

	return {
		user: user.user.data,
		photos: user.user.photos,
		setPerPageUserPhotos,
		setOrderByUserPhotos,
		isLoading: user.isLoading,
		error: user.error,
	};
}
