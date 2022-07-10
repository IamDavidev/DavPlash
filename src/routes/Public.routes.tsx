import { Route, Routes } from 'react-router-dom';

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<p>homee ....</p>} />
			<Route path='*' element={<p>404 ....</p>} />
		</Routes>
	);
};

export default PublicRoutes;
