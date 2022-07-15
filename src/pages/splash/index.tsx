import { Divider } from '@chakra-ui/react';
import { useApiSplah } from '~lib/hooks';
import GridCollections from '~pages/layouts/GridCollections.layout';
import { GridPhotos } from '~pages/layouts/GridPhotos.layout';
import HeaderLayout from '~pages/layouts/Header.layout';

const SplashHome = () => {
	const { collections, photos, isLoading } = useApiSplah();

	if (isLoading) return <div>Loading ... </div>;

	return (
		<>
			<HeaderLayout />
			<Divider orientation='horizontal' />
			<GridPhotos photos={photos} />
			<Divider orientation='horizontal' />
			<GridCollections collections={collections} />
		</>
	);
};

export default SplashHome;
