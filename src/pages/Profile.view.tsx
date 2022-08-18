import { COLORS_THEME } from '@/config/theme.config';
import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import DrawerBio from '~components/drawers/DrawerBio.component';
import DrawerName from '~components/drawers/DrawerName.component';
import DrawerUserName from '~components/drawers/DrawerUserName.component';
import { AtSymbolIcon } from '~components/icons';
import StatsUser from '~components/statsUser.component';
import { useIsDarkMode } from '~lib/hooks';
import { getCurrentUser } from '~lib/services/getCurrentUser.service';

/***
 * @metadata
 *  - username : string
 *	- bio  : string
 *  - profileImage : string
 *  - name: string
 *  @database
 * 	- followers : number
 *  - following : number
 *  - location : number
 *  - likes : number
 *  - photos : number
 *	- tags : string[] // based on the tags of the photos
 * - photos: string[] // based on the photos of the user
 *
 */

// async function foo() {
// 	const { data, error } = await supabase.from('usersData').select();
// 	console.log('🚀 ~ file: Profile.view.tsx ~ line 32 ~ foo ~ error', error);
// 	console.log('🚀 ~ file: Profile.view.tsx ~ line 32 ~ foo ~ data', data);
// }

// async function boo() {
// 	const idUser = getCurrentUser()?.id;
// 	const { data, error } = await supabase.from('usersData').insert([
// 		{
// 			followers: 0,
// 			following: 0,
// 			location: 'mx',
// 			likes: 0,
// 			photos: 0,
// 			id_user: idUser,
// 		},
// 	]);
// }

const Profile: FC = () => {
	const isDarkMode = useIsDarkMode();
	const user = getCurrentUser();

	return (
		<>
			<Box
				width={'100%'}
				justifyContent={'center'}
				alignItems={'center'}
				color={isDarkMode ? 'white' : 'black'}
				flexDirection={'column'}
				gap={'.2rem'}>
				<Text textAlign={'center'} fontSize={'3xl'}>
					{user?.user_metadata.name}
					<DrawerName />
				</Text>
				<Box
					display={'flex'}
					color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}
					justifyContent={'center'}
					gap={'.2rem'}
					alignItems={'center'}
					fontSize='2xl'>
					<AtSymbolIcon
						width={30}
						height={29}
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
					{user?.user_metadata.userName && (
						<Text>{user?.user_metadata.userName}</Text>
					)}
					{!user?.user_metadata.userName && (
						// <Text>{user?.user_metadata.name}</Text>
						<Text>UserName</Text>
					)}
					{/* <Text>user.username</Text> */}
					<DrawerUserName />
				</Box>

				<StatsUser
					followers={0}
					following={0}
					likes={0}
					location={'Knowhere'}
					photos={0}
				/>
				<Box
					textAlign={'center'}
					color={'whiteTheme.500'}
					display='flex'
					justifyContent={'center'}>
					<Text width={'35ch'} textAlign={'center'} fontSize='xl'>
						{/* {user.bio} */}
						{user?.user_metadata.bio && user?.user_metadata.bio}
						{!user?.user_metadata.bio && 'No bio'}
					</Text>
					<DrawerBio />
				</Box>
			</Box>
		</>
	);
};

export default Profile;

/**
 * <Wrap
					justify={'center'}
					spacing={'1rem'}
					my={'1rem'}
					alignItems={'center'}>
					{user.tags &&
						user?.tags?.map((tag: any) => {
							return (
								<WrapItem key={tag.key}>
									<Tag
										color={'purpleTheme.500'}
										border={`1px solid ${COLORS_THEME.DARK._PRIMARY_}`}
										variant={'outline'}>
										{tag.value}
									</Tag>
								</WrapItem>
							);
						})}
				</Wrap>
 */
