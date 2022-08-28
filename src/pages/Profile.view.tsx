import { COLORS_THEME } from '@/config/theme.config';
import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import DrawerBio from '~components/drawers/DrawerBio.component';
import DrawerName from '~components/drawers/DrawerName.component';
import DrawerUserName from '~components/drawers/DrawerUserName.component';
import { AtSymbolIcon } from '~components/icons';
import StatsUser from '~components/statsUser.component';
import { useIsDarkMode } from '~lib/hooks';
import { getDataUser } from '~lib/services/getDataUser.service';

/**
 *  @database
 *  - username : string
 *	- bio  : string
 *  - profileImage : string
 *  - name: string
 * 	- followers : number
 *  - following : number
 *  - location : number
 *  - likes : number
 *  - photos : number
 *	- tags : string[] // based on the tags of the photos
 * - photos: string[] // based on the photos of the user
 *
 */
export interface IUserData {
	bio: string;
	followers: number;
	following: number;
	id: number;
	id_user: string;
	likes: number;
	location: string;
	name: string;
	photos: number;
	user_name: string;
}

const INITIAL_STATE_DATA_USER: IUserData = {
	bio: '',
	followers: 0,
	following: 0,
	id: 0,
	id_user: '',
	likes: 0,
	location: '',
	name: '',
	photos: 0,
	user_name: '',
};

const Profile: FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	const [user, setUser] = useState<IUserData>(INITIAL_STATE_DATA_USER);
	console.log('🚀 ~ file: Profile.view.tsx ~ line 56 ~ user', user);

	useEffect((): void => {
		getDataUser().then(res => setUser(res.user));
	}, []);

	if (user === undefined)
		return (
			<>
				<Heading>Error in app.</Heading>
				<Box>
					you ask for help in this email :{' '}
					<Text color={'blueG.500'}>contact@davplash.com </Text>
				</Box>
			</>
		);

	return (
		<>
			<Box
				width={'100%'}
				justifyContent={'center'}
				alignItems={'center'}
				color={isDarkMode ? 'white' : 'black'}
				flexDirection={'column'}
				gap={'.2rem'}>
				<Box
					fontSize={'3xl'}
					justifyContent={'center'}
					alignItems={'center'}
					gap={'1rem'}
					display={'flex'}>
					{user.name === '' && <Text>No name</Text>}
					{user.name !== '' && <Text>{user.name}</Text>}
					<DrawerName />
				</Box>
				<Box
					display={'flex'}
					color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}
					justifyContent={'center'}
					gap={'1rem'}
					alignItems={'center'}
					fontSize='2xl'>
					<AtSymbolIcon
						width={30}
						height={29}
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
					{user?.user_name === '' && <Text>No User Name</Text>}
					{user?.user_name !== '' && <Text>{user.user_name}</Text>}
					<DrawerUserName />
				</Box>

				<StatsUser
					followers={user.followers}
					following={user.following}
					likes={user.likes}
					location={user.location}
					photos={user.photos}
				/>
				<Box
					textAlign={'center'}
					color={'whiteTheme.500'}
					display='flex'
					gap={'1rem'}
					alignItems={'center'}
					justifyContent={'center'}>
					<Text width={'35ch'} textAlign={'center'} fontSize='xl'>
						{user.bio === '' && <>No Bio</>}
						{user.bio !== '' && <>{user.bio}</>}
					</Text>
					<DrawerBio />
				</Box>
				<Divider
					colorScheme={isDarkMode ? 'white' : 'black'}
					my={'1rem'}
					height={'2px'}
				/>
			</Box>
		</>
	);
};

export default Profile;
