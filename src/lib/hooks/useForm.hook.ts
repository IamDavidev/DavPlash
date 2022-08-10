import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import { signUpWithEmailAndPassword } from '~lib/auth/signUpWithEmailAndPassword.auth';
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
	const toast = useToast();
	const [form, setForm] = useState(INITIAL_STATE_FORM);
	const [formValid, setFormValid] = useState(false);

	const ValidationsFields = (e: any) => {
		e.preventDefault();
		const { password, email, confirmPassword, username, name } = e.target;
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
		if (formValid) {
			// signUpWithEmailAndPassword({
			// 	email: form.email.value,
			// 	name: form.name.value,
			// 	password: form.password.value,
			// 	userName: form.username.value,
			// });
			if (!toast.isActive('signUp')) {
				toast({
					id: 'signUp',
					title: 'Account created.',
					description:
						'You need to confirm your email address. For continue, please check your email.',
					status: 'warning',
					colorScheme: 'orange',
					variant: 'top-accent',
					duration: 12000,
					isClosable: true,
				});
			}
		}
	}, [form, formValid, toast]);

	return {
		form,
		ValidationsFields,
	};
}
