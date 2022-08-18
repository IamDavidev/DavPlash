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
