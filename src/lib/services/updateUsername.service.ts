import { supabase } from '@/config/clients';

export async function updateUserName({
	userName,
}: {
	userName: string | undefined;
}): Promise<void> {
	if (!userName) throw new Error('userName is required');
	try {
		await supabase.auth.update({
			data: {
				userName,
			},
		});
	} catch (err) {
		throw new Error('Failed to update userName');
	}
}
