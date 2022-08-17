import { Box, Button, HStack, Tooltip, useColorMode } from '@chakra-ui/react';

import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { DarkThemeIcon, LightThemeIcon } from '~components/icons';

import DavPlashIcon from '~components/icons/Davplash.icon';

import UserIcon from '~components/icons/User.icon';

import { COLORS_THEME } from '@/config/theme.config';
import { signOut } from '~lib/auth/signOut.auth';
import { LoggedInContext } from '~lib/context/loggenIn.context';
import { useIsDarkMode } from '~lib/hooks';

const Nabvar: React.FC = () => {
	const { loggedIn } = useContext(LoggedInContext);
	const { toggleColorMode } = useColorMode();
	const isDarkMode: boolean = useIsDarkMode();

	return (
		<>
			<Box
				p={'2'}
				px={'1rem'}
				pos={'sticky'}
				zIndex={'30'}
				top={'1rem'}
				bg={isDarkMode ? 'blurDark.500' : 'blurLight.500'}
				backdropFilter={'blur(1rem)'}
				borderRadius={'1rem'}
				mb={'1rem'}
				as='nav'
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}>
				<Box>
					<DavPlashIcon
						width={'40'}
						height={'40'}
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
				</Box>
				<HStack
					spacing={'.5rem'}
					fontWeight={'bold'}
					display={'flex'}
					color={isDarkMode ? 'secondaryDark.500' : 'primaryLight.500'}>
					{loggedIn ? (
						<>
							<Link to={'/plash/discover/photos'}>Photos</Link>
							<Link to={'/plash/discover/collections'}>Collections</Link>
							<Link to={'/plash/discover/users'}>Users</Link>
						</>
					) : (
						<Link to={'/plash/'}>Home</Link>
					)}
				</HStack>
				<Box display={'flex'} gap='3rem'>
					<HStack>
						<Button
							onClick={() => toggleColorMode()}
							colorScheme={'transparent'}
							variant={'outline'}
							margin={0}
							padding={0}
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
							border={'none'}>
							{isDarkMode ? (
								<>
									<LightThemeIcon
										width={20}
										height={20}
										color={COLORS_THEME.DARK._SECONDARY_}
									/>
								</>
							) : (
								<>
									<DarkThemeIcon
										width={20}
										height={20}
										color={COLORS_THEME.LIGHT._SECONDARY_}
									/>
								</>
							)}
						</Button>
					</HStack>
					<HStack spacing={'.5rem'}>
						{loggedIn ? (
							<Button
								onClick={() => signOut()}
								_hover={
									isDarkMode
										? {
												boxShadow: 'shadowDark',
												transition: 'box-shadow 0.35s ease-in-out',
										  }
										: {
												boxShadow: `shadowLight`,
												transition: 'box-shadow 0.35s ease-in-out',
										  }
								}
								colorScheme={isDarkMode ? 'primaryDark' : 'primaryLight'}>
								Logout
							</Button>
						) : (
							<>
								<Link to={'/plash/login'}>
									<Box
										_hover={
											isDarkMode
												? {
														boxShadow: 'shadowDark',
														transition: 'box-shadow 0.35s ease-in-out',
												  }
												: {
														boxShadow: 'shadowLight',
														transition: 'box-shadow 0.35s ease-in-out',
												  }
										}
										py={'.5rem'}
										borderRadius={'.5rem'}
										px={'1.5rem'}
										bg={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
										color={'bgLight.500'}>
										Login
									</Box>
								</Link>
							</>
						)}
						{loggedIn ? (
							<Tooltip
								hasArrow
								zIndex={'99'}
								// boxShadow={}
								label='User profile'
								borderRadius={'.5rem'}
								bg={isDarkMode ? 'primaryDark' : 'cyanLight.500'}
								color={isDarkMode ? 'white' : 'black'}>
								<Link to={`/plash/user/me`}>
									<UserIcon
										width={'30'}
										height={'30'}
										color={
											isDarkMode
												? COLORS_THEME.DARK._SECONDARY_
												: COLORS_THEME.LIGHT._PRIMARY_
										}
									/>
								</Link>
							</Tooltip>
						) : (
							<>
								<Link to={'/plash/signup'}>
									<Box
										_hover={
											isDarkMode
												? {
														boxShadow: 'shadowDark',
														transition: 'box-shadow 0.35s ease-in-out',
												  }
												: {
														boxShadow: 'shadowLight',
														transition: 'box-shadow 0.35s ease-in-out',
												  }
										}
										py={'.5rem'}
										borderRadius={'.5rem'}
										px={'1.5rem'}
										bg={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
										color={'bgLight.500'}>
										Sign Up
									</Box>
								</Link>
							</>
						)}
					</HStack>
				</Box>
			</Box>
		</>
	);
};

export default Nabvar;
