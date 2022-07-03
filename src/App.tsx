import { useState, useEffect } from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

import '@/styles/global.styles.css';

import { CheckIcon } from '~components/icons';

import {
	EMPTY_STATE_PHOTOS_PLASH,
	ApiUnsplashAccessKey,
} from '~constants/unsplash.const';

import {
	TypeEmptyStatePhotosPlash,
	usePhotos,
	typeApiPhotosProps,
} from '~interfaces/photos.types';

import { ApiInstance } from '@/config';

// solid - resposibility unique for each function

export async function getPhotos() {
	try {
		const responseApi = await ApiInstance.get('/photos', {
			params: {
				client_id: ApiUnsplashAccessKey,
			},
		});

		return responseApi.data;
	} catch (err) {
		console.log(err);
		// return error state
	}
}

export async function apiPhotos({
	successPhotos,
}: typeApiPhotosProps): Promise<void> {
	const response = await getPhotos();

	successPhotos(response);
}

export function usePhotosPlash(): usePhotos {
	const [photos, setPhotos] = useState<TypeEmptyStatePhotosPlash>(
		EMPTY_STATE_PHOTOS_PLASH
	);

	const successPhotos = (results: any[]) => {
		return setPhotos((prev: TypeEmptyStatePhotosPlash) => ({
			...prev,
			results,
		}));
	};

	useEffect(() => {
		apiPhotos({ successPhotos });
	}, []);

	return {
		photos,
	};
}

const App = () => {
	const { photos } = usePhotosPlash();

	console.log(photos);

	return (
		<Box padding={'10'} className='App'>
			<Heading as='h1' size={'3xl'} textColor='blue.500'>
				DavPlash
			</Heading>
			<Box padding={'15'}>
				<List spacing={'4'}>
					{photos.results.map((photo: any) => {
						return (
							<ListItem
								key={photo.id}
								display={'flex'}
								alignItems={'center'}
								gap={'2'}>
								<CheckIcon width={'40'} height={'40'} fillColor={'#fff'} />
								<p>{photo.blur_hash}</p>
							</ListItem>
						);
					})}
				</List>
			</Box>
		</Box>
	);
};

export default App;
