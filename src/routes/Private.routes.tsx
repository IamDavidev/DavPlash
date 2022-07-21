import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '~pages/Home.view';
import UserView from '~pages/User.view';

const Photos = lazy(() => import('~pages/photos.view'));
const Collections = lazy(() => import('~pages/Collections.view'));

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<HomeView />} />
			<Route path='/plash/discover/photos' element={<Photos />} />
			<Route path='/plash/discover/collections' element={<Collections />} />
			<Route path='/plash/discover/users' element={<div>users</div>} />
			<Route path='/plash/user/:user' element={<UserView />} />
			<Route path='*' element={<Navigate to='/plash/' replace />} />
		</Routes>
	);
};

export default PrivateRoutes;
