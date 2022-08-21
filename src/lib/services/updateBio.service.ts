import { supabase } from '@/config/clients';
import { SUPABASE_TABLES } from '~constants/supbase.const';
import { getCurrentUser } from './getCurrentUser.service';

export async function updateBio({
	bio,
}: {
	bio: string | undefined;
}): Promise<void> {
	const user = getCurrentUser();
	if (!bio) throw new Error('Bio is required');
	if (!user) throw new Error('User is not logged in');

	try {
		await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.update({
				bio,
			})
			.match({
				id_user: user.id,
			});
	} catch (err) {
		console.error(err);
		throw new Error('Failed to update Bio User');
	}
}
