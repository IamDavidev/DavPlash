import { getDataUser } from '~lib/services/getDataUser.service';

export async function DataUserApi() {
	return await getDataUser().then(res => res);
}
