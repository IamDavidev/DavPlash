import { IAdapterCollection } from './Adapters.types';

export interface IStateCollections {
	collections: IAdapterCollection[];
	page: number;
	perPage: number;
	error: {
		code: string | number;
		message: string;
		isError: boolean;
	};
	isLoading: boolean;
}
