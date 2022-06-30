import axios, { AxiosInstance } from 'axios';

import { baseURL } from '~constants/unsplash.const';

export const ApiInstance: AxiosInstance = axios.create({
	baseURL,
});
