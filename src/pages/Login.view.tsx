// import { Link } from 'react-router-dom';
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import CardPhotoRandom from '~components/CardPhotoRandom.component';

import { useForm, useIsDarkMode } from '~lib/hooks';

const Login: FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	const { form, ValidationsFields } = useForm();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<>
			<Link to='/plash'>
				<Box
					my={'1rem'}
					color={isDarkMode ? 'primaryDark.500' : 'cyanLight.500'}>
					Home
				</Box>
			</Link>
			<Heading>Login</Heading>
			<Flex
				id='login-form'
				flexDir={{
					sm: 'column',
					lg: 'row',
				}}
				flexWrap={'wrap'}
				justifyContent={'space-evenly'}
				alignItems={'center'}
				minH={'60vh'}>
				<Box
					width={{
						sm: '100%',
						lg: '60%',
					}}>
					<form onSubmit={e => ValidationsFields(e)}>
						<InputGroup
							gap={'1rem'}
							my={'1.5rem'}
							px={{
								sm: '1rem',
								lg: '0',
							}}
							flexDir={{
								sm: 'column',
								lg: 'row',
							}}>
							<Box>
								<Input
									name={'name'}
									type={'text'}
									errorBorderColor={'red.500'}
									isInvalid={!form.name.isValid}
									placeholder={'Enter your name'}
									py={15}
								/>
								<Box h={3} color={'red'} fontSize='.8rem'>
									{!form.name.isValid && <Text>{form.name.message}</Text>}
								</Box>
							</Box>
							<Box display={'flex'} flexDir={'column'}>
								<Input
									name={'username'}
									type={'text'}
									py={15}
									errorBorderColor={'red.500'}
									placeholder='Enter UserName'
									isInvalid={!form.username.isValid}
								/>
								<Box h={3} color={'red'} fontSize='.8rem'>
									{!form.username.isValid && (
										<Text>{form.username.message}</Text>
									)}
								</Box>
							</Box>
						</InputGroup>
						<InputGroup
							gap={'1rem'}
							my={'1.5rem'}
							px={{
								sm: '1rem',
								lg: '0',
							}}
							flexDir={{
								sm: 'column',
								lg: 'row',
							}}>
							<Box>
								<InputGroup size='md'>
									<Input
										type={showPassword ? 'text' : 'password'}
										placeholder='Enter password'
										py={15}
										isInvalid={!form.password.isValid}
										errorBorderColor={'red.500'}
										name={'password'}
									/>
									<InputRightElement width='4.5rem'>
										<Button
											h='1.75rem'
											size='sm'
											onClick={(): void => setShowPassword(!showPassword)}>
											{showPassword ? 'Hide' : 'Show'}
										</Button>
									</InputRightElement>
								</InputGroup>
								<Box h={3} color={'red'} fontSize='.8rem'>
									{!form.password.isValid && (
										<Text>{form.password.message}</Text>
									)}
								</Box>
							</Box>
							<Box display={'flex'} flexDir={'column'}>
								<InputGroup size='md'>
									<Input
										type={showConfirmPassword ? 'text' : 'password'}
										placeholder='Confirm password'
										name={'confirmPassword'}
										errorBorderColor={'red.500'}
										py={15}
										isInvalid={!form.confirmPassword.isValid}
									/>
									<InputRightElement width='4.5rem'>
										<Button
											h='1.75rem'
											size='sm'
											onClick={(): void =>
												setShowConfirmPassword(!showConfirmPassword)
											}>
											{showConfirmPassword ? 'Hide' : 'Show'}
										</Button>
									</InputRightElement>
								</InputGroup>
								<Box h={3} color={'red'} fontSize='.8rem'>
									{!form.confirmPassword.isValid && (
										<Text>{form.confirmPassword.message}</Text>
									)}
								</Box>
							</Box>
						</InputGroup>
						<InputGroup
							px={{
								sm: '1rem',
								lg: '0',
							}}>
							<Box display={'flex'} flexDir={'column'} w={'100%'}>
								<Input
									type='email'
									py={15}
									name='email'
									placeholder='Enter email'
									errorBorderColor={'red.500'}
									isInvalid={!form.email.isValid}
								/>
								<Box h={3} color={'red'} fontSize='.8rem'>
									{!form.email.isValid && <Text>{form.email.message}</Text>}
								</Box>
							</Box>
						</InputGroup>
						<Button
							_hover={
								isDarkMode
									? {
											shadow: 'shadowDark',
											transition: 'box-shadow 0.35s ease-in-out',
									  }
									: {
											shadow: 'shadowLight',
											transition: 'box-shadow 0.35s ease-in-out',
									  }
							}
							colorScheme={'blueG'}
							type='submit'
							mx={{
								sm: '1rem',
								lg: 'auto',
							}}
							my={'1rem'}>
							Sign In
						</Button>
					</form>
					<Divider color={isDarkMode ? 'white' : 'black'} my={'2rem'} />
					{/* <Button
						_hover={
							isDarkMode
								? {
										shadow: 'shadowDark',
										transition: 'box-shadow 0.35s ease-in-out',
								  }
								: {
										shadow: 'shadowLight',
										transition: 'box-shadow 0.35s ease-in-out',
								  }
						}
						onClick={() => signInWithGoogle()}
						// border={isDarkMode ? '1px solid white' : '1px solid black'}
						leftIcon={<GoogleIcon width={30} height={30} />}
						width={'100%'}>
						Login With Google
					</Button> */}
				</Box>
				<Box
					width={{
						sm: '100%',
					}}
					gap={'1rem'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}>
					<Box
						transform={'rotate(10deg)'}
						display={{
							sm: 'none',
							lg: 'block',
						}}>
						<CardPhotoRandom />
					</Box>
					<Box transform={'rotate(-10deg)'}>
						<CardPhotoRandom />
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default Login;
