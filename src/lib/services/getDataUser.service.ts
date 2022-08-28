import { PostgrestResponse } from '@supabase/supabase-js';
import { supabase } from '@/config/clients';
import { SUPABASE_TABLES } from '~constants/supbase.const';
import { getCurrentUser } from './getCurrentUser.service';
import { adapterProfile } from '~lib/adapters/profile.adapter';

export async function getDataUser() {
	const user = getCurrentUser();
	if (!user) throw new Error('User not found');

	try {
		const users: PostgrestResponse<any> = await supabase
			.from(SUPABASE_TABLES._USERS_DATA_)
			.select()
			.eq('id_user', user?.id);
		console.log(
			'🚀 ~ file: getDataUser.service.ts ~ line 15 ~ getDataUser ~ users',
			users
		);

		if (!users.data) throw new Error('Users is empty');

		return {
			user: adapterProfile(users?.data[0]),
		};
	} catch (err) {
		throw new Error('ERROR: USER NOT FOUND');
	}
}
