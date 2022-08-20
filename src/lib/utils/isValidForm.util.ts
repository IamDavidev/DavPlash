import {
	checkingIsValidEmail,
	checkingIsValidName,
	checkingIsValidPassword,
	checkingIsValidPasswordConfirmation,
	checkingIsValidUsername,
} from '~lib/validations/form.valid';

interface IValidForm {
	setForm: (setForm: any) => void;
	setFormValid: (setFormValid: boolean) => void;
	name: string;
	password: string;
	confirmPassword: string;
	username: string;
	email: string;
}

export function isValidForm({
	setForm,
	setFormValid,
	name,
	password,
	confirmPassword,
	username,
	email,
}: IValidForm): void {
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

	if (validForm.includes(false)) return setFormValid(false);

	setFormValid(true);
}
