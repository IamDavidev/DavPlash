import { ResponsiveValue } from '@chakra-ui/react';

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

/**
 * Adapter Photo
 */

export type TypeTagObjApiPhotoView = {
	title: string;
};

export type TypeRelatedPhoto = {
	key: string;
	image: string;
};

export interface IAdapterPhotoView {
	id: string;
	objectFit: ResponsiveValue<string>;
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
}
