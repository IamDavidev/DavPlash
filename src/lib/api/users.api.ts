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

	setTimeout(() => {
		console.log('setTimeout');
		success({
			results: data.results.map(AdapterUser),
			totalPages: data.total_pages,
			total: data.total,
		});
	}, 2000);
}
