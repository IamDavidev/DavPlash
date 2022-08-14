import { BrowserRouter } from 'react-router-dom';
import Login from '~pages/Login.view';

export const mockLoginSucces = {};

export const mockLoginFailure = {};

export const MockComponentLoginForm = () => {
	return (
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	);
};
