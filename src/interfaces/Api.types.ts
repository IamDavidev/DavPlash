import { IErrorRequest } from './hooks.types';

export interface IApiProps {
	init: () => void;
	success: (payload: any) => void;
	err: ({ error, code }: IErrorRequest) => void;
	query?: string;
}

export interface IApiPhotoProps extends IApiProps {
	id: string;
}

export interface IApiPhotosProps extends IApiProps {
	query?: string;
	perPage: number;
	page: number;
	orderBy: string;
}

export interface IApiCollectionsProps extends IApiProps {
	perPage: number;
	page: number;
}

export interface IApiCollectionProps extends IApiProps {
	id: string;
}

export interface IApiUsersProps extends IApiProps {
	query: string;
	perPage: number;
	page: number;
}

export interface IApiUserProps extends IApiProps {
	username?: string;
}
