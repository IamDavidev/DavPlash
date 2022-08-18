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

export async function createUserData({ id }: any) {
	console.log(
		'🚀 ~ file: createUserData.service.ts ~ line 16 ~ createUserData ~ id',
		id
	);

	try {
		await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.insert([AdapterCreateUserStats(id)]);
	} catch (err) {
		throw new Error('Error creating user data');
	}
}
