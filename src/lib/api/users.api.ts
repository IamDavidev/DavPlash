import { IApiUsersProps } from '~interfaces/Api.types';
import { AdapterUser } from '~lib/adapters/users.adapter';
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

	console.log('data', data.results.map(AdapterUser));
	// success(data.results.map(AdapterUser));
	success({
		results: data.results.map(AdapterUser),
		totalPages: data.total_pages,
		total: data.total,
	});
}
