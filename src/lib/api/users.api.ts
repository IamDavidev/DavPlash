import { IApiUsersProps } from '~interfaces/Api.types';
import { getUsers } from '~lib/services';

export async function usersApi({
	init,
	success,
	err,
	query,
	perPage,
	page,
}: IApiUsersProps) {
	init();
	const { data, isSuccess, error } = await getUsers({ query, perPage, page });

	if (!isSuccess) return err({ error });

	success(data);
}
