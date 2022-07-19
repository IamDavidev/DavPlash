import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '~pages/Home.view';

const Discover = lazy(() => import('~pages/Discover.view'));
const Photos = lazy(() => import('~pages/photos.view'));
const Collections = lazy(() => import('~pages/Collections.view'));

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<HomeView />} />
			<Route path='/plash/discover' element={<Discover />}>
				<Route path='photos' element={<Photos />} />
				<Route path='collections' element={<Collections />} />
				<Route path='users' element={<div>users</div>} />
			</Route>
			{/*
			 * Route in case of 404
			 */}
			<Route path='*' element={<Navigate to='/plash/' replace />} />
		</Routes>
	);
};

export default PrivateRoutes;
