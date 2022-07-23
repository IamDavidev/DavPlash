/**
 * Adapter Phtos
 */
export type TypeImagesAdapterPhotos = {
	small: string;
	full: string;
	regular: string;
};

export type TypeUserAdapterPhotos = {
	id: string;
	name: string;
	images: TypeImagesAdapterPhotos;
	likes: number;
	photos: number;
	username: string;
	bio: string;
};
export interface IAdapterPhotos {
	id: string;
	likes: number;
	description: string | null;
	images: TypeImagesAdapterPhotos;
	user: TypeUserAdapterPhotos;
}
/**
 * Adapter Collections
 */

export type TypePhotoCollection = {
	src: string;
	key: string;
};

export interface IAdapterCollection {
	totalPhotos: number;
	title: string;
	photos: TypePhotoCollection[];
	id: string;
	shareKey: string;
	description: string | '';
	tags: string[];
}
