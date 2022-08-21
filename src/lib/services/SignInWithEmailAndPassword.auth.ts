import { supabase } from '@/config/clients';

export async function SignInWithEmailAndPassword({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<void> {
	try {
		await supabase.auth.signIn({
			email,
			password,
		});
	} catch (err) {
		throw new Error('Failed to sign in');
	}
}
