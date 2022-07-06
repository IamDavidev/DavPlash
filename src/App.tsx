import { Box, Heading, Image } from '@chakra-ui/react';

import { usePhotosPlash } from '~lib/hooks';

import '@/styles/global.styles.css';

import { TypePhotoPlash } from './interfaces/photos.types';

// solid - resposibility unique for each function

const App = () => {
	const { photos } = usePhotosPlash();

	console.log(photos);

	if (photos.error.isExistError) return <div>{photos.error.message}</div>;

	return (
		<Box padding={'10'} className='App'>
			<Heading as='h1' size={'3xl'} textColor='blue.500'>
				DavPlash
			</Heading>
			<Box padding={'15'}>
				<Box
					display={'flex'}
					flexWrap={'wrap'}
					gap={'1rem'}
					justifyContent={'center'}
					flexDirection={'row'}>
					{photos.results?.map((photo: TypePhotoPlash) => {
						return (
							<Image
								borderRadius={'1rem'}
								src={photo.images.small}
								boxSize={'180px'}
								alt={photo.id}
								objectFit={'cover'}
								key={photo.id}
							/>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default App;
