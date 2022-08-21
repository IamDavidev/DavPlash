import { supabase } from '@/config/clients';
import { User } from '@supabase/supabase-js';
import { createUserData } from './createUserData.service';

export async function signUpWithEmailAndPassword({
	email,
	password,
	userName,
	name,
}: {
	email: string;
	password: string;
	userName: string;
	name: string;
}): Promise<void> {
	if (!email) throw new Error('Erorr: email is required');
	if (!password) throw new Error('Erorr: password is required');

	try {
		await supabase.auth
			.signUp({
				email,
				password,
			})
			.then(async ({ user }: { user: User | null }): Promise<void> => {
				console.log(
					'🚀 ~ file: signUpWithEmailAndPassword.auth.ts ~ line 26 ~ .then ~ user',
					user
				);
				if (user)
					return createUserData({
						id: user?.id,
						name,
						userName,
					});
			});
	} catch (err) {
		throw new Error('Failed to sign up with email');
	}
}
