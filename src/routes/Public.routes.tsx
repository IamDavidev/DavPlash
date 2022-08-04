import { Route, Routes } from 'react-router-dom';

import PageNotFound from '~pages/404.view';
import HomeView from '~pages/Home.view';
import Login from '~pages/Login.view';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<HomeView />} />
			<Route path={'/plash/login'} element={<Login />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export default PublicRoutes;
