import { ChangeEvent } from 'react';
import { SignInWithEmailAndPassword } from '~lib/services';

export const singInAdapter = (e: ChangeEvent<HTMLFormElement>): void => {
	e.preventDefault();

	const { email, password } = e.target;

	SignInWithEmailAndPassword({
		email: email.value,
		password: password.value,
	});
};
