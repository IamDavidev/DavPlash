import { supabase } from '@/config/clients';
import { SUPABASE_TABLES } from '~constants/supbase.const';

function AdapterCreateUserStats(id: string) {
	return {
		followers: 0,
		following: 0,
		location: '',
		likes: 0,
		photos: 0,
		id_user: id,
	};
}
export async function createUserData({ id }: { id: string }): Promise<void> {
	if (!id) throw new Error('Error: id is required');

	try {
		await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.insert([AdapterCreateUserStats(id)]);
	} catch (err) {
		throw new Error('Error creating user data');
	}
}
