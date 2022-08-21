import { supabase } from '@/config/clients';
import { User } from '@supabase/supabase-js';
import { createUserData } from './createUserData.service';

export async function signInWithGoogle(): Promise<void> {
	try {
		await supabase.auth
			.signIn({
				provider: 'google',
			})
			.then(async ({ user }: { user: User | null }): Promise<void> => {
				if (user)
					return createUserData({
						id: user?.id,
						name: user?.app_metadata?.name,
					});
			});
	} catch (err) {
		throw new Error('Failed to sign in with Google');
	}
}
