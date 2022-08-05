import { supabase } from '@/config/clients';

export async function signOut(): Promise<void> {
	try {
		await supabase.auth.signOut();
	} catch (err) {
		console.log(err);
	}
}
