import { supabase } from '@/config/clients';

export async function updateName({
	newName,
}: {
	newName: string | undefined;
}): Promise<void> {
	if (!newName) throw new Error('newName is required');

	try {
		await supabase.auth.update({
			data: {
				name: newName,
			},
		});
	} catch (err) {
		throw new Error('Failed to update user');
	}
}
