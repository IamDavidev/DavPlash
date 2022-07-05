import { useState, useEffect } from 'react';

import { usePhotos, TypeEmptyStatePhotosPlash } from '~interfaces/photos.types';
import { EMPTY_STATE_PHOTOS_PLASH } from '~constants/unsplash.const';
import { apiPhotos } from '~lib/api';

export function usePhotosPlash(): usePhotos {
	const [photos, setPhotos] = useState<TypeEmptyStatePhotosPlash>(
		EMPTY_STATE_PHOTOS_PLASH
	);

	const intialRequestPhotos = () =>
		setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
			...prev,
			isLoading: true,
		}));

	const successPhotos = (results: any[]): void =>
		setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
			...prev,
			results, // = results: results`
			isLoading: false,
		}));

	const errorPhotos = (error: any): void =>
		setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
			...prev,
			error: {
				message: error,
				isExistError: true,
			},
			isLoading: false,
		}));

	useEffect(() => {
		apiPhotos({
			success: successPhotos,
			error: errorPhotos,
			init: intialRequestPhotos,
		});
	}, []);

	return {
		photos,
	};
}
