import { supabase } from '@/config/clients';
import { SUPABASE_TABLES } from '~constants/supbase.const';
import { getCurrentUser } from './getCurrentUser.service';

export async function updateUserName({
	userName,
}: {
	userName: string | undefined;
}): Promise<void> {
	const user = getCurrentUser();
	if (!user) throw new Error('User is not logged in');
	if (!userName) throw new Error('userName is required');

	try {
		await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.update({
				user_name: userName,
			})
			.match({
				id_user: user.id,
			});
	} catch (err) {
		throw new Error('Failed to update userName');
	}
}
