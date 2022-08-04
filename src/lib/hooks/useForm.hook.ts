import { useEffect, useState } from 'react';
import {
	checkingIsValidEmail,
	checkingIsValidName,
	checkingIsValidPassword,
	checkingIsValidPasswordConfirmation,
	checkingIsValidUsername,
} from '~lib/validations/form.valid';

export type valueValid = {
	value: string;
	isValid: boolean;
	message: string | null;
};

export interface IStateForm {
	username: valueValid;
	email: valueValid;
	password: valueValid;
	confirmPassword: valueValid;
	name: valueValid;
	profilePicture: valueValid;
	formIsValid: boolean;
}

export const INITIAL_STATE_FORM: IStateForm = {
	password: {
		message: null,
		isValid: true,
		value: '',
	},
	name: {
		message: null,
		isValid: true,
		value: '',
	},
	confirmPassword: {
		message: null,
		isValid: true,
		value: '',
	},
	username: {
		message: null,
		isValid: true,
		value: '',
	},
	email: {
		message: null,
		isValid: true,
		value: '',
	},
	profilePicture: {
		message: null,
		isValid: true,
		value: '',
	},

	formIsValid: false,
};

export function isValidForm({
	setForm,
	setFormValid,
	name,
	password,
	confirmPassword,
	username,
	email,
}: any) {
	const isValidName = checkingIsValidName(setForm, name);
	const isValidPassword = checkingIsValidPassword(setForm, password);
	const isValidConfirmPassword = checkingIsValidPasswordConfirmation(
		setForm,
		password,
		confirmPassword
	);
	const isValidUserName = checkingIsValidUsername(setForm, username);
	const isValidEmail = checkingIsValidEmail(setForm, email);

	const validForm = [
		isValidName,
		isValidPassword,
		isValidConfirmPassword,
		isValidUserName,
		isValidEmail,
	];

	console.log('🚀 ~ file: useForm.hook.js ~ line 35 ~ validForm', validForm);

	if (validForm.includes(false)) return setFormValid(false);

	setFormValid(true);
}

export default function useForm() {
	const [form, setForm] = useState(INITIAL_STATE_FORM);
	const [formValid, setFormValid] = useState(false);
	console.log(
		'🚀 ~ file: useForm.hook.js ~ line 47 ~ useForm ~ formValid',
		formValid
	);

	const ValidationsFields = (e: any) => {
		e.preventDefault();
		console.log('🚀 ~ file: useForm.hook.js ~ line 51 ~ ValidationsFiels', e);
		const { password, email, confirmPassword, username, name } = e.target;
		console.log(
			'🚀 ~ file: useForm.hook.ts ~ line 95 ~ ValidationsFiels ~ confirmPassword',
			confirmPassword
		);
		console.log(
			'🚀 ~ file: useForm.hook.ts ~ line 95 ~ ValidationsFiels ~ email',
			email
		);
		console.log(
			'🚀 ~ file: useForm.hook.ts ~ line 95 ~ ValidationsFiels ~ password',
			password
		);
		isValidForm({
			setForm,
			name,
			password,
			confirmPassword,
			username,
			email,
			setFormValid,
		});
	};

	useEffect(() => {
		formValid &&
			console.log(
				'🚀 ~ file: useForm.hook.js ~ line 58 ~ formValid',
				formValid
			);
	}, [form, formValid]);

	return {
		form,
		ValidationsFields,
	};
}
