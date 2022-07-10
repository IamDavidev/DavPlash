import { Divider } from '@chakra-ui/react';
import { useApiSplah } from '~lib/hooks';
import GridCollections from '~pages/layouts/GridCollections.layout';
import { GridPhotos } from '~pages/layouts/GridPhotos.layout';

const SplashHome = () => {
	const { collections, photos, isLoading } = useApiSplah();

	console.log(
		'🚀 ~ file: index.tsx ~ line 5 ~ SplashHome ~ collections',
		collections
	);
	console.log('🚀 ~ file: index.tsx ~ line 5 ~ SplashHome ~ photos', photos);
	if (isLoading) return <div>Loading ... </div>;

	return (
		<>
			<h1>Splash</h1>
			<Divider orientation='horizontal' />
			<GridPhotos photos={photos} />
			<Divider orientation='horizontal' />
			<GridCollections collections={collections} />
		</>
	);
};

export default SplashHome;
