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
	setUserName: (userName: string) => void;
}

export default function useUser(): IuseUserHook {
	const [user, setUser] = useReducer(reducerUser, INITIAL_EMPTY_STATE_USER);

	const initRequestUser = (): void =>
		setUser({
			type: ACTIONS_USER._INIT_REQUEST_USER_,
		});

	const successRequestUser = ({
		user,
		photos,
	}: {
		user: any;
		photos: any[];
	}): void => {
		setUser({
			type: ACTIONS_USER._SUCCESS_REQUEST_USER_,
			payload: {
				user,
				photos,
			},
		});
	};
	const errorRequestUser = ({ error, code }: IErrorRequest): void =>
		setUser({
			type: ACTIONS_USER._FAILURE_REQUEST_USER_,
			payload: {
				message: error,
				code,
			},
		});

	const setPerPageUserPhotos = (perPagePhotos: number): void =>
		setUser({
			type: ACTIONS_USER._SET_PER_PAGE_PHOTOS_USER_,
			payload: {
				perPagePhotos,
			},
		});

	const setOrderByUserPhotos = (orderByPhotos: string): void =>
		setUser({
			type: ACTIONS_USER._SET_ORDER_BY_PHOTOS_USER_,
			payload: {
				orderByPhotos,
			},
		});

	const setUserName = (userName: string): void =>
		setUser({
			type: ACTIONS_USER._SET_USERNAME_,
			payload: {
				userName,
			},
		});

	useEffect((): void => {
		if (!user.userName) return;
		userApi({
			init: initRequestUser,
			success: successRequestUser,
			err: errorRequestUser,
			username: user.userName,
		});
	}, [user.userName, user.orderByPhotos, user.perPagePhotos]);

	return {
		user: user.user.data,
		photos: user.user.photos,
		setPerPageUserPhotos,
		setOrderByUserPhotos,
		isLoading: user.isLoading,
		error: user.error,
		setUserName,
	};
}
