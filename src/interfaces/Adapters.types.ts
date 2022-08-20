import { ResponsiveValue } from '@chakra-ui/react';

/**
 * Adapter Photos
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

export interface IAdapterCollectionData {
	photosCollection: [
		{
			id: string;
			photo: string;
		}
	];
	title: string;
	tags: [
		{
			key: string;
			value: string;
		}
	];
	id: string;
	private: boolean;
	description: string | null;
	totalPhotos: number;
}

/**
 * Adapter Photo
 */

export type TypeTagObjApiPhotoView = {
	title: string;
};

export type TypeRelatedPhoto = {
	id: string;
	key: string;
	image: string;
};

type objectFit = 'cover' | 'contain';
export interface IAdapterPhotoView {
	id: string;
	objectFit: ResponsiveValue<objectFit> | undefined;
	image: string;
	likes: number;
	tags: string[];
	color: string;
	width: number;
	height: number;
	user: string;
	userName: string;
	instagramUsername: string | null;
	profileImage: string;
	description: string | null;
	relatedPhotos: any[];
	photoUrl: string;
}

export interface IAdapterUsers {
	id: string;
	profileImage: string;
	userName: string;
	firstName: string;
	totalPhotos: number;
}
