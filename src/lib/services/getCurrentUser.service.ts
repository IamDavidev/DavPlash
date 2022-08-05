import { supabase } from '@/config/clients';
import { User } from '@supabase/supabase-js';

export function getCurrentUser(): User | null {
	const User: User | null = supabase.auth.user();
	return User;
}
