export interface IApiProps {
	init: () => void;
	success: (payload: any) => void;
	err: (payload: string) => void;
}

export interface IApiPhotoProps extends IApiProps {
	id: string;
}

export interface IApiCollectionProps extends IApiProps {
	perPage: number;
	page: number;
}
export interface IApiPhotosProps extends IApiProps {
	perPage: number;
	page: number;
	orderBy: string;
}
