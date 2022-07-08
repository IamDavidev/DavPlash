import { Navigate, Route, Routes } from 'react-router-dom';
import { GridPhotos } from '~pages/layouts/GridPhotos.layout';
import User from '~pages/User';

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/photos' element={<GridPhotos />} />
			<Route path='/plash/user/:user' element={<User />} />
			<Route path='*' element={<Navigate to='/plash/photos' replace />} />
		</Routes>
	);
};

export default PrivateRoutes;
