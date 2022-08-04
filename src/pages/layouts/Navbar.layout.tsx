import { Box, Button, HStack, Tooltip, useColorMode } from '@chakra-ui/react';

import React from 'react';

import { Link } from 'react-router-dom';
import { DarkThemeIcon, LightThemeIcon } from '~components/icons';

import DavPlashIcon from '~components/icons/Davplash.icon';

import UserIcon from '~components/icons/User.icon';

import { COLORS_THEME } from '~constants/theme.const';
import { useIsDarkMode } from '~lib/hooks';

const Nabvar: React.FC = () => {
	const loggedIn = false;
	const { toggleColorMode } = useColorMode();
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Box
				p={'2'}
				px={'1rem'}
				pos={'sticky'}
				zIndex={'9999'}
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
					<Link to={'/plash/discover/photos'}>Photos</Link>
					<Link to={'/plash/discover/collections'}>Collections</Link>
					<Link to={'/plash/discover/users'}>Users</Link>
				</HStack>
				<Box display={'flex'} gap='3rem'>
					<HStack>
						<Button
							onClick={() => toggleColorMode()}
							colorScheme={'purpleTheme'}
							variant={'outline'}
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
								colorScheme={
									isDarkMode ? 'primaryDark.500' : 'primaryLight.500'
								}>
								Logout
							</Button>
						) : (
							<Button
								colorScheme={isDarkMode ? 'primaryDark' : 'primaryLight'}
								color={'bgLight.500'}>
								Login
							</Button>
						)}
						<Tooltip
							hasArrow
							label='User profile'
							bg='purpleTheme.300'
							color='white'>
							<Link to={'/plash/user/me'}>
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
					</HStack>
				</Box>
			</Box>
		</>
	);
};

export default Nabvar;
