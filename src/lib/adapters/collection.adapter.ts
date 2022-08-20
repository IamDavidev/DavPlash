import {
	AdapterPhotoCollection,
	AdapterTag,
	IAdapterCollectionData,
} from '~interfaces/Adapters.types';

export function AdapterCollection(
	objApiCollection: any
): IAdapterCollectionData {
	return {
		photosCollection: objApiCollection.preview_photos.map(
			(photo: any): AdapterPhotoCollection => {
				return {
					photo: photo.urls.regular,
					id: photo.id,
				};
			}
		),
		title: objApiCollection.title,
		tags: objApiCollection.tags.map((tag: any): AdapterTag => {
			return {
				key: tag.title,
				value: tag.title,
			};
		}),
		id: objApiCollection.id,
		private: objApiCollection.private,
		description: objApiCollection.description,
		totalPhotos: objApiCollection.total_photos,
	};
}
