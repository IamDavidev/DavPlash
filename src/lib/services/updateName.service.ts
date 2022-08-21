import { supabase } from '@/config/clients';
import { SUPABASE_TABLES } from '~constants/supbase.const';
import { getCurrentUser } from './getCurrentUser.service';

export async function updateName({
	newName,
}: {
	newName: string | undefined;
}): Promise<void> {
	const user = getCurrentUser();
	if (!user) throw new Error('User is not logged in');
	if (!newName) throw new Error('newName is required');

	try {
		await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.update({
				name: newName,
			})
			.match({
				id_user: user.id,
			});
	} catch (err) {
		throw new Error('Failed to update user');
	}
}
