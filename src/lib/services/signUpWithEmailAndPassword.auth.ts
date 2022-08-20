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
}) {
	if (!email) throw new Error('Erorr: email is required');
	if (!password) throw new Error('Erorr: password is required');

	try {
		await supabase.auth
			.signUp(
				{
					email,
					password,
				},
				{
					data: {
						userName,
						name,
					},
				}
			)
			.then(async ({ user }: { user: User | null }): Promise<void> => {
				if (user)
					return createUserData({
						id: user?.id,
					});
			});
	} catch (err) {
		throw new Error('Failed to sign up with email');
	}
}
