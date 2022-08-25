import { MockComponentLoginForm } from '@/__mocks__/login.mock';
import { render, screen } from '@testing-library/react';

import { beforeAll, describe, expect, it } from 'vitest';

describe('Login Form', (): void => {
	beforeAll((): void => {
		render(<MockComponentLoginForm />);
	});

	it('should inputs', (): void => {
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

describe('Button Sign In And Button Login With Google ', (): void => {
	let component: any;

	beforeAll((): void => {
		component = render(<MockComponentLoginForm />);
	});

	it('should button  Sign In', async (): Promise<void> => {
		const btnLogin = await component.findByText('Sign In');
		const btnLoginWithGoogle = await component.findByText('Login With Google');
		expect(btnLogin).toBeDefined();
		expect(btnLoginWithGoogle).toBeDefined();
	});
});

it('Button Home ', async (): Promise<void> => {
	const component = render(<MockComponentLoginForm />);
	const btnHome = await component.findByText('Home');
	expect(btnHome).toBeDefined();
});
