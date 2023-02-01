import { ChakraProvider, theme } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CollectionsView from '~pages/Collections.view';
import PhotosView from '~pages/photos.view';
import UserView from '~pages/User.view';

interface IWrapperDiscoverViewProps {
	children: ReactNode;
}

const WrapperDiscoversView: FC<IWrapperDiscoverViewProps> = ({ children }) => {
	return (
		<>
			<ChakraProvider theme={theme}>
				<BrowserRouter>{children}</BrowserRouter>
			</ChakraProvider>
		</>
	);
};

export const MockCollectionsView: FC = (): JSX.Element => {
	return (
		<>
			<WrapperDiscoversView>
				<CollectionsView />
			</WrapperDiscoversView>
		</>
	);
};

export const MockPhotosView: FC = (): JSX.Element => {
	return (
		<>
			<WrapperDiscoversView>
				<PhotosView />
			</WrapperDiscoversView>
		</>
	);
};

export const MockUsersView: FC = (): JSX.Element => {
	return (
		<>
			<WrapperDiscoversView>
				<UserView />
			</WrapperDiscoversView>
		</>
	);
};
