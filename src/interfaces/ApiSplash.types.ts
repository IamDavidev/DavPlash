export type typeOrderBy = string;

export type TypeGenericData = {
	results: any[];
	perPage: number;
	page: number;
	orderBy?: typeOrderBy;
};
export type TypeErrorPlash = {
	message: string | null;
	isExistError: boolean;
};
export interface IEmptyApiSplash {
	isLoading: false;
	error: TypeErrorPlash;
	photos: TypeGenericData;
	collections: TypeGenericData;
	users: TypeGenericData;
	query: string;
}
