import { FC, lazy, LazyExoticComponent } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import HomeView from '~pages/Home.view';

const Photos: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/photos.view')
);
const Photo: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/Photo.view')
);

const Collections: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/Collections.view')
);
const Collection: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/Collection.view')
);

const Users: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/Users.view')
);
const User: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/User.view')
);

const Profile: LazyExoticComponent<FC<{}>> = lazy(
	() => import('~pages/Profile.view')
);

const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/plash/' element={<HomeView />} />
			<Route path='/plash/discover/photos' element={<Photos />} />
			<Route path='/plash/discover/photos/:id' element={<Photo />} />

			<Route path='/plash/discover/collections' element={<Collections />} />
			<Route path='/plash/discover/collections/:id' element={<Collection />} />

			{/* <Route
				path='/plash/discover/collections/tags/:tag'
				element={<>collections</>}
			/> */}

			<Route path='/plash/discover/users' element={<Users />} />
			<Route path='/plash/discover/users/:username' element={<User />} />

			<Route path='/plash/user/me' element={<Profile />} />

			<Route path='*' element={<Navigate to='/plash/' replace />} />
		</Routes>
	);
};

export default PrivateRoutes;
