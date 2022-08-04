import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseURL: string = import.meta.env.VITE_SUPABASE_URL_;
const supabaseKey: string = import.meta.env.VITE_SUPABSE_KEY_;

export const supabase: SupabaseClient = createClient(supabaseURL, supabaseKey);
