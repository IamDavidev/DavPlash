export type typeOrderBy = string;

type TypeGenericData = {
	results: any[];
	perPage: number;
	page: number;
	orderBy?: typeOrderBy;
};

export interface TypeEmptyApiSplash {
	isLoading: false;
	error: {
		message: string;
		isExistError: false;
	};
	photos: TypeGenericData;
	collections: TypeGenericData;
	users: TypeGenericData;
	query: string;
}
