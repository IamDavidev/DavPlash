import { supabase } from '@/config/clients';

export function getCurrentUser() {
	const user = supabase.auth.user();
	if (user) return;
	return user;
}
