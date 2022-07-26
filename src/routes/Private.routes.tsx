import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '~pages/Home.view';

const Photos = lazy(() => import('~pages/photos.view'));
const Collections = lazy(() => import('~pages/Collections.view'));
const User = lazy(() => import('~pages/User.view'));
const Photo = lazy(() => import('~pages/Photo.view'));
const Users = lazy(() => import('~pages/layouts/GridUsers.layout'));

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<HomeView />} />
			<Route path='/plash/discover/photos' element={<Photos />} />
			<Route path='/plash/discover/photos/:id' element={<Photo />} />

			<Route path='/plash/discover/collections' element={<Collections />} />
			<Route path='/plash/discover/collections/:id' element={<>collection</>} />

			<Route path='/plash/discover/users' element={<Users />} />
			<Route path='/plash/discover/users/:username' element={<User />} />
			<Route path='*' element={<Navigate to='/plash/' replace />} />
		</Routes>
	);
};

export default PrivateRoutes;
