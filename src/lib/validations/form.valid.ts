import { IStateForm, valueValid } from '~lib/hooks/useForm.hook';

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

	if (value === '') return setErrorPassword('Password is required');

	if (value.length < 8)
		return setErrorPassword('Password must be at least 8 characters');

	if (value.length > 64)
		return setErrorPassword('Password must be less than 64 characters');

	if (value.search(/[a-z]/) === -1)
		return setErrorPassword(
			'Password must contain at least one lowercase letter'
		);

	if (value.search(/[A-Z]/) === -1)
		return setErrorPassword(
			'Password must contain at least one uppercase letter'
		);

	if (value.search(/[0-9]/) === -1)
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
	if (value === '')
		return setErrorConfirmPassword('Password confirmation is required');

	if (value !== valuePassword)
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

	if (value === '') return setErrorEmail('Email is required');

	if (
		value.search(
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		) === -1
	)
		return setErrorEmail('Email is not valid');

	if (value.length > 64)
		return setErrorEmail('Email must be less than 64 characters');

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
	if (value === '') return setErrorUserName('Username is required');

	if (value.length < 8)
		return setErrorUserName('Username must be at least 8 characters');

	if (value.length > 64)
		return setErrorUserName('Username must be less than 64 characters');

	if (value.search(/[a-z]/) === -1)
		return setErrorUserName(
			'Username must contain at least one lowercase letter'
		);

	//  search for spaces with regex
	if (value.search(/\s/) !== -1)
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
	if (value === '') return setErrorName('Name is required');

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
