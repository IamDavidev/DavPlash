import { Navigate, Route, Routes } from 'react-router-dom';

import PageNotFound from '~pages/404.view';
import HomeView from '~pages/Home.view';
import Login from '~pages/Login.view';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/plash/' replace />} />
			<Route path='/plash/' element={<HomeView />} />
			<Route path={'/plash/login'} element={<Login />} />
			<Route
				path='/plash/discover/photos/*'
				element={'no tienes acceso a esta ruta'}
			/>
			{/* create cuztomization page` No Access` */}
			<Route
				path='/plash/discover/collections/*'
				element={'no tienes acceso a esta ruta'}
			/>
			<Route
				path='/plash/discover/users/*'
				element={'no tienes acceso a esta ruta'}
			/>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export default PublicRoutes;
