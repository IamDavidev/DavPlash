import { supabase } from '@/config/clients';

export async function signInWithGoogle() {
	const { user, session, error } = await supabase.auth.signIn({
		provider: 'google',
	});
	console.log('{{user}}: ', user);
	console.log('{{session}}: ', session);
	console.log('{{errror}}: ', error);
}
