export function AdapterCollection(objApiCollection: any) {
	return {
		bannerPhoto: objApiCollection.cover_photo.urls.regular,
		title: objApiCollection.title,
		tags: objApiCollection.tags.map((tag: any) => {
			return {
				key: tag.title,
				value: tag.title,
			};
		}),
		id: objApiCollection.id,
		private: objApiCollection.private,
		description: objApiCollection.description,
	};
}
