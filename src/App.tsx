import { Box, Heading, List, ListItem } from '@chakra-ui/react';

import { usePhotosPlash } from '~lib/hooks';

import '@/styles/global.styles.css';

import { CheckIcon } from '~components/icons';

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
				<List spacing={'4'}>
					{photos.results?.map((photo: any) => {
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
