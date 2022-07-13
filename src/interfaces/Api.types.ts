export interface IApiProps {
	init: () => void;
	success: (payload: any) => void;
	err: (payload: string | null) => void;
}

export interface IApiPhotoProps extends IApiProps {
	id: string;
}
