export const AdapterUserView = (objApiUser: any) => {
	return {
		id: objApiUser.id,
		profileImage: objApiUser.profile_image.large,
		username: objApiUser.username,
		name: objApiUser.name,
		twitter: objApiUser.twitter_username,
		instagram: objApiUser.instagram_username,
		followers: objApiUser.followers_count,
		following: objApiUser.following_count,
		totalLikes: objApiUser.total_likes,
		totalPhotos: objApiUser.total_photos,
		location: objApiUser.location,
		bio: objApiUser.bio,
		tags: objApiUser.tags.aggregated.map((tag: any) => {
			return {
				key: tag.title,
				value: tag.title,
			};
		}),
	};
};
