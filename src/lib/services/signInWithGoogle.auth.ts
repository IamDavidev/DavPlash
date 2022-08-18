import { supabase } from '@/config/clients';
import { User } from '@supabase/supabase-js';
import { createUserData } from './createUserData.service';

export async function signInWithGoogle(): Promise<void> {
	try {
		const { user }: { user: User | null } = await supabase.auth.signIn({
			provider: 'google',
		});

		await createUserData(user?.id);
	} catch (err) {
		throw new Error('Failed to sign in with Google');
	}
}
