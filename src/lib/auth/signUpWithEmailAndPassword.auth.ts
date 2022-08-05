import { supabase } from '@/config/clients';

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
	const user = await supabase.auth.signUp(
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
		'🚀 ~ file: signUpWithEmailAndPassword.auth.ts ~ line 26 ~ user',
		user
	);
	return user;
}
