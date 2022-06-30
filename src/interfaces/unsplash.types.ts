/** types  */

type TypeErrorPhotosPlash = {
	message: string;
	isExistError: boolean;
};

/** interfaces */
export interface TypeEmptyStatePhotosPlash {
	results: any[];
	isLoading: boolean;
	error: TypeErrorPhotosPlash;
}
