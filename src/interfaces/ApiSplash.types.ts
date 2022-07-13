export type typeOrderBy = string;

export interface IGenericData {
	results: any[];
	perPage: number;
	page: number;
	orderBy?: typeOrderBy;
}
export type TypeErrorPlash = {
	message: string | null;
	isExistError: boolean;
};
export interface IEmptyApiSplash {
	isLoading: false;
	error: TypeErrorPlash;
	photos: IGenericData;
	collections: IGenericData;
	users: IGenericData;
	query: string;
}
