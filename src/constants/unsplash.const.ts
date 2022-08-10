export const ApiUnsplashAccessKey: string = import.meta.env
	.VITE_ACCESS_KEY_API_;
export const ApiUnsplashSecretKey: string = import.meta.env
	.VITE_SECRET_KEY_API_;

export const baseURL: string = 'https://api.unsplash.com';

export const OPTIONS_ORDER_BY = {
	_LATESTS_: 'latest',
	_OLDEST_: 'oldest',
	_POPULAR_: 'popular',
};
