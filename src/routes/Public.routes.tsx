import { FC, lazy, LazyExoticComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomeView from '~pages/Home.view';

/**
 * lazy loading in Pages
 */

const Login: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/Login.view')
);
const NoAccess: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/NoAccess.view')
);
const Page404: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/404.view')
);

const PublicRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/plash/' replace />} />
			<Route path='/plash/' element={<HomeView />} />
			<Route path={'/plash/login'} element={<Login />} />
			<Route path='/plash/discover/photos/*' element={<NoAccess />} />
			<Route path='/plash/discover/collections/*' element={<NoAccess />} />
			<Route path='/plash/discover/users/*' element={<NoAccess />} />
			<Route path='*' element={<Page404 />} />
		</Routes>
	);
};

export default PublicRoutes;
