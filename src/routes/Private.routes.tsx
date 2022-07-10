import { Navigate, Route, Routes } from 'react-router-dom';
import SplashHome from '~pages/splash';
import User from '~pages/User';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<SplashHome />} />
			<Route path='/plash/user/:user' element={<User />} />
			<Route path='*' element={<Navigate to='/plash/' replace />} />
		</Routes>
	);
};

export default PrivateRoutes;
