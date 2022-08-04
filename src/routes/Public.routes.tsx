import { Route, Routes } from 'react-router-dom';
import HomeView from '~pages/Home.view';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<HomeView />} />
			<Route path='*' element={<p>404 ....</p>} />
		</Routes>
	);
};

export default PublicRoutes;
