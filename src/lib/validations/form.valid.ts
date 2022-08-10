import { IStateForm, valueValid } from '~lib/hooks/useForm.hook';
import {
	hasAtLeastOneLowercaseLetter,
	hasAtLeastOneNumber,
	hasAtLeastOneUppercaseLetter,
	hasLessEightCharacters,
	hasMoreSixtyFourCharacters,
	hasSpace,
	isEqualValues,
	isExixting,
	isFormatCorrectTheEmail,
} from './form.validations';

export function checkingIsValidPassword(
	setPassword: Function,
	password: valueValid
): boolean {
	const value = password.value;

	const setErrorPassword = (msg: string): boolean => {
		setPassword(
			(prev: IStateForm): IStateForm => ({
				...prev,
				password: {
					message: msg,
					isValid: false,
					value,
				},
			})
		);
		return false;
	};

	/**
	 * @validations password
	 */

	if (!isExixting(value)) return setErrorPassword('Password is required');

	if (hasLessEightCharacters(value))
		return setErrorPassword('Password must be at least 8 characters');

	if (hasMoreSixtyFourCharacters(value))
		return setErrorPassword('Password must be less than 64 characters');

	if (!hasAtLeastOneLowercaseLetter(value))
		return setErrorPassword(
			'Password must contain at least one lowercase letter'
		);

	if (!hasAtLeastOneUppercaseLetter(value))
		return setErrorPassword(
			'Password must contain at least one uppercase letter'
		);

	if (!hasAtLeastOneNumber(value))
		return setErrorPassword('Password must contain at least one number');

	/**
	 * @set State password Valid
	 */

	setPassword(
		(prev: IStateForm): IStateForm => ({
			...prev,
			password: {
				message: null,
				isValid: true,
				value,
			},
		})
	);
	return true;
}

export function checkingIsValidPasswordConfirmation(
	setConfirmPassword: Function,
	password: valueValid,
	confirmPassword: valueValid
): boolean {
	const value = confirmPassword.value;
	const valuePassword = password.value;

	const setErrorConfirmPassword = (msg: string): boolean => {
		setConfirmPassword(
			(prev: IStateForm): IStateForm => ({
				...prev,
				confirmPassword: {
					message: msg,
					isValid: false,
					value,
				},
			})
		);
		return false;
	};

	/**
	 * @validations confirmPassword
	 */
	if (!isExixting(value))
		return setErrorConfirmPassword('Password confirmation is required');

	if (!isEqualValues(value, valuePassword))
		return setErrorConfirmPassword("password doesn't match");

	/**
	 * @set State confirmPassword Valid
	 */

	setConfirmPassword(
		(prev: IStateForm): IStateForm => ({
			...prev,
			confirmPassword: {
				message: null,
				isValid: true,
				value,
			},
		})
	);

	return true;
}

export function checkingIsValidEmail(
	setEmail: Function,
	email: valueValid
): boolean {
	const value = email.value;

	const setErrorEmail = (msg: string): boolean => {
		setEmail(
			(prev: IStateForm): IStateForm => ({
				...prev,
				email: {
					message: msg,
					isValid: false,
					value,
				},
			})
		);
		return false;
	};

	/**
	 * @validations email
	 */

	if (!isExixting(value)) return setErrorEmail('Email is required');

	if (isFormatCorrectTheEmail(value))
		return setErrorEmail('Email is not valid');

	// if (value.length > 64)
	// 	return setErrorEmail('Email must be less than 64 characters');

	/**
	 * @set State email Valid
	 * @return true
	 *
	 */

	setEmail(
		(prev: IStateForm): IStateForm => ({
			...prev,
			email: {
				message: null,
				isValid: true,
				value,
			},
		})
	);
	return true;
}

export function checkingIsValidUsername(
	setUserName: Function,
	username: valueValid
): boolean {
	const value = username.value;

	const setErrorUserName = (msg: string): boolean => {
		setUserName(
			(prev: IStateForm): IStateForm => ({
				...prev,
				username: {
					message: msg,
					isValid: false,
					value,
				},
			})
		);
		return false;
	};

	/**
	 * @validations username
	 */
	if (!isExixting(value)) return setErrorUserName('Username is required');

	if (hasLessEightCharacters(value))
		return setErrorUserName('Username must be at least 8 characters');

	if (hasMoreSixtyFourCharacters(value))
		return setErrorUserName('Username must be less than 64 characters');

	if (value.search(/[a-z]/) === -1)
		return setErrorUserName(
			'Username must contain at least one lowercase letter'
		);

	//  search for spaces with regex
	if (hasSpace(value))
		return setErrorUserName('Username must not contain spaces');

	/**
	 * @set State username Valid
	 */
	setUserName(
		(prev: IStateForm): IStateForm => ({
			...prev,
			username: {
				message: null,
				isValid: true,
				value,
			},
		})
	);
	return true;
}

export function checkingIsValidName(
	setName: Function,
	name: valueValid
): boolean {
	const value = name.value;

	const setErrorName = (msg: string): boolean => {
		setName(
			(prev: IStateForm): IStateForm => ({
				...prev,
				name: {
					message: msg,
					isValid: false,
					value,
				},
			})
		);
		return false;
	};
	/**
	 * @validations name
	 */
	if (!isExixting(value)) return setErrorName('Name is required');

	/**
	 * @set State name Valid
	 */

	setName(
		(prev: IStateForm): IStateForm => ({
			...prev,
			name: {
				message: null,
				isValid: true,
				value,
			},
		})
	);

	return true;
}
