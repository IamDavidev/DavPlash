import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { INITIAL_STATE_FORM } from '~constants/form.const';
import { signUpWithEmailAndPassword } from '~lib/services';
import { isValidForm } from '~lib/utils/isValidForm.util';

export default function useForm(): any {
	const toast = useToast();
	const [form, setForm] = useState(INITIAL_STATE_FORM);
	const [formValid, setFormValid] = useState(false);

	const ValidationsFields = (e: any): void => {
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

	useEffect((): void => {
		if (!formValid) return;
		signUpWithEmailAndPassword({
			email: form.email.value,
			name: form.name.value,
			password: form.password.value,
			userName: form.username.value,
		});

		if (toast.isActive('signUp')) return;
		toast({
			id: 'signUp',
			title: 'Account created.',
			description:
				'You need to confirm your email address. For continue, please check your email And reload the page.',
			status: 'warning',
			colorScheme: 'orange',
			variant: 'top-accent',
			duration: 12000,
			isClosable: true,
		});
	}, [form, formValid, toast]);

	return {
		form,
		ValidationsFields,
	};
}
