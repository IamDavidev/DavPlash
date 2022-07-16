import { IAdapterCollection } from '~interfaces/Adapters.types';

export function AdapterCollections(objApiCollections: any): IAdapterCollection {
	return {
		totalPhotos: objApiCollections.total_photos,
		title: objApiCollections.title,
		photos: objApiCollections.preview_photos.map((img: any) => {
			return {
				src: img.urls.regular,
				key: img.blur_hash,
			};
		}),
		id: objApiCollections.id,
		shareKey: objApiCollections.share_key,
		description: objApiCollections.description || '',
	};
}
