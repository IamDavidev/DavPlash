import { supabase } from '@/config/clients';

export async function updateBio({
	bio,
}: {
	bio: string | undefined;
}): Promise<void> {
	if (!bio) throw new Error('Bio is required');
	try {
		await supabase.auth.update({
			data: {
				bio,
			},
		});
	} catch (err) {
		console.error(err);
		throw new Error('Failed to update Bio User');
	}
}
