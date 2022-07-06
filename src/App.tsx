import { Box, Button, ButtonGroup, Heading, Image } from '@chakra-ui/react';

import { usePhotosPlash } from '~lib/hooks';

import '@/styles/global.styles.css';
import { TypePhotoPlash } from './interfaces/photos.types';

// solid - resposibility unique for each function

export const ORDER_BY = {
	_LATEST_: 'latest',
	_OLDEST_: 'oldest',
	_POPULAR_: 'popular',
};

const App = () => {
	const { photos, setOrderBy, setPage, setPerPage } = usePhotosPlash();
	console.log(photos);

	if (photos.error.isExistError) return <div>{photos.error.message}</div>;

	return (
		<Box padding={'10'} className='App'>
			<Heading as='h1' size={'3xl'} textColor='blue.500'>
				DavPlash
			</Heading>
			<ButtonGroup spacing={'1.5rem'}>
				<Button
					colorScheme={'cyan'}
					onClick={(): void => {
						setPerPage(photos.perPage + 5);
					}}>
					set 10 more photos
				</Button>
				<Button
					colorScheme={'nav'}
					onClick={(): void => {
						setOrderBy(ORDER_BY._POPULAR_);
					}}>
					Order by popular
				</Button>
				<Button
					colorScheme={'pink'}
					onClick={(): void => {
						setPage(photos.page + 1);
					}}>
					set Page
				</Button>
				<Button colorScheme={'pink'}> button</Button>
			</ButtonGroup>
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
