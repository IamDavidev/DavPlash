import { useEffect, useReducer } from 'react';
import { INITIAL_EMPTY_STATE_USERS } from '~constants/EmptyStates.const';

import { IErrorRequest, IuseUsersHook } from '~interfaces/hooks.types';

import { ACTIONS_USERS } from '~lib/actions/users.actions';

import { usersApi } from '~lib/api';

import { usersReducer } from '~lib/reducers/users.reducer';

export default function useUsers(): IuseUsersHook {
	const [users, setUsers] = useReducer(usersReducer, INITIAL_EMPTY_STATE_USERS);

	const initialRequestUsers = () =>
		setUsers({
			type: ACTIONS_USERS._INIT_REQUEST_USERS_,
		});

	const successRequestUsers = (users: any) =>
		setUsers({
			type: ACTIONS_USERS._SUCCESS_REQUEST_USERS_,
			payload: {
				users,
			},
		});

	const errorRequestUsers = ({ error, code }: IErrorRequest): void =>
		setUsers({
			type: ACTIONS_USERS._FAILURE_REQUEST_USERS_,
			payload: {
				message: error,
				code,
			},
		});

	const setPageUsers = (page: number): void =>
		setUsers({
			type: ACTIONS_USERS._SET_PAGE_USERS_,
			payload: {
				page,
			},
		});

	const setPerPageUsers = (perPage: number): void =>
		setUsers({
			type: ACTIONS_USERS._SET_PER_PAGE_USERS_,
			payload: {
				perPage,
			},
		});

	const setQueryUsers = (query: string): void =>
		setUsers({
			type: ACTIONS_USERS._SET_QUERY_USERS_,
			payload: {
				query,
			},
		});

	useEffect(() => {
		usersApi({
			init: initialRequestUsers,
			success: successRequestUsers,
			err: errorRequestUsers,
			page: users.page,
			perPage: users.perPage,
			query: users.query,
		});
	}, [users.page, users.perPage, users.query]);

	return {
		page: users.page,
		users: users.users,
		error: users.error,
		isLoading: users.isLoading,
		setPageUsers,
		setPerPageUsers,
		setQueryUsers,
	};
}
