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
		const { user }: { user: User | null } = await supabase.auth.signUp(
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
		);
		console.log(
			'🚀 ~ file: signUpWithEmailAndPassword.auth.ts ~ line 21 ~ user',
			user
		);
		await createUserData(user?.id);
	} catch (err) {
		throw new Error('Failed to sign up with email');
	}
}
