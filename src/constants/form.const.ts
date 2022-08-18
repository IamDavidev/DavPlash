import { IStateForm } from '~interfaces/form.types';

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
