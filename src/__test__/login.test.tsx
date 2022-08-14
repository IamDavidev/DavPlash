import { MockComponentLoginForm } from '@/__mocks__/login.mock';
import { render, screen } from '@testing-library/react';

import { beforeAll, describe, expect, it } from 'vitest';

describe('Login Form', () => {
	beforeAll(() => {
		render(<MockComponentLoginForm />);
	});

	it('should inputs', () => {
		const inputName = screen.getByPlaceholderText('Enter your name');
		const inputUserName = screen.getByPlaceholderText('Enter UserName');
		const inputPassword = screen.getByPlaceholderText('Enter password');
		const inputConfirmPassword =
			screen.getByPlaceholderText('Confirm password');
		const inputEmail = screen.getByPlaceholderText('Enter email');

		expect(inputName).toBeDefined();
		expect(inputUserName).toBeDefined();
		expect(inputPassword).toBeDefined();
		expect(inputConfirmPassword).toBeDefined();
		expect(inputEmail).toBeDefined();
	});
});

describe('Button Sign In And Button Login With Google ', () => {
	let component: any;

	beforeAll(() => {
		component = render(<MockComponentLoginForm />);
	});

	it('should button  Sign In', async () => {
		const btnLogin = await component.findByText('Sign In');
		const btnLoginWithGoogle = await component.findByText('Login With Google');
		expect(btnLogin).toBeDefined();
		expect(btnLoginWithGoogle).toBeDefined();
	});
});

it('Button Home ', async () => {
	const component = render(<MockComponentLoginForm />);
	const btnHome = await component.findByText('Home');
	expect(btnHome).toBeDefined();
});
