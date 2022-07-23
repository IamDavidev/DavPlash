export interface IApiProps {
	init: () => void;
	success: (payload: any) => void;
	err: ({ error, code }: { error: string; code?: string | number }) => void;
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

export interface IApiUsersProps extends IApiProps {
	query: string;
	perPage: number;
	page: number;
}
