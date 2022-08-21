import {
	Box,
	Button,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import CardPhotoRandom from '~components/CardPhotoRandom.component';
import { SignInWithEmailAndPassword } from '~lib/services';

const handleSignIn = (e: ChangeEvent<HTMLFormElement>): void => {
	e.preventDefault();
	const { email, password } = e.target;
	SignInWithEmailAndPassword({
		email: email.value,
		password: password.value,
	});
};

const SignIn: FC = (): JSX.Element => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<Box
				display={'flex'}
				h={'80vh'}
				flexDir={'row'}
				flexWrap={'wrap'}
				justifyContent={'center'}
				gap={'5rem'}
				alignItems={'center'}>
				<>
					<Box transform={'rotate(10deg)'}>
						<CardPhotoRandom />
					</Box>
				</>
				<>
					<Box>
						<form onSubmit={handleSignIn}>
							<Box my={'2rem'}>
								<FormLabel htmlFor='email'>Email</FormLabel>
								<Input
									type='email'
									name='emial'
									id='email'
									placeholder='Enter  email'
								/>{' '}
							</Box>
							<Box my={'2rem'}>
								<FormLabel htmlFor='password'>Password</FormLabel>
								<InputGroup size='md'>
									<Input
										type={showPassword ? 'text' : 'password'}
										id='password'
										placeholder='Enter password'
										py={15}
										errorBorderColor={'red.500'}
										name={'password'}
									/>
									<InputRightElement width='4.5rem'>
										<Button
											h='1.75rem'
											size='sm'
											width={'4rem'}
											onClick={(): void => setShowPassword(!showPassword)}>
											{showPassword ? 'Hide' : 'Show'}
										</Button>
									</InputRightElement>
								</InputGroup>
							</Box>
							<Button type='submit'>Sign In</Button>
						</form>
					</Box>
				</>
			</Box>
		</>
	);
};

export default SignIn;
