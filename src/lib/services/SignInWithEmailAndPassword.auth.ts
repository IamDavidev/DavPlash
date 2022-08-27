import { supabase } from '@/config/clients';

export async function SignInWithEmailAndPassword({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<void> {
	if (!email) throw new Error('Error: in Sign Up');
	if (!password) throw new Error('Error: in sign UP');
	try {
		await supabase.auth.signIn({
			email,
			password,
		});
	} catch (err) {
		throw new Error('Failed to sign in');
	}
}
