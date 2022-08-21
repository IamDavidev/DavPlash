import { supabase } from '@/config/clients';
import { SUPABASE_TABLES } from '~constants/supbase.const';

interface IAdapterCreateUserData {
	id_user: string;
	user_name: string;
	bio: string;
	name: string;
	followers: number;
	following: number;
	location: string;
	likes: number;
	photos: number;
}

function AdapterCreateUserStats(
	id: string,
	name: string,
	userName?: string
): IAdapterCreateUserData {
	return {
		bio: '',
		user_name: userName || '',
		followers: 0,
		following: 0,
		location: '',
		likes: 0,
		photos: 0,
		id_user: id,
		name: name || '',
	};
}
export async function createUserData({
	id,
	name,
	userName,
}: {
	id: string;
	name: string;
	userName?: string;
}): Promise<void> {
	if (!id) throw new Error('Error: id is required');

	try {
		await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.insert([AdapterCreateUserStats(id, name, userName)]);
		console.log(
			'🚀 ~ file: createUserData.service.ts ~ line 26 ~ .then ~ user',
			id
		);
	} catch (err) {
		throw new Error('Error creating user data');
	}
}
