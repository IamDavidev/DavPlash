import { COLORS_THEME } from '@/config/theme.config';
import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import DrawerBio from '~components/drawers/DrawerBio.component';
import DrawerUserName from '~components/drawers/DrawerUserName.component';
import { AtSymbolIcon } from '~components/icons';
import { useIsDarkMode } from '~lib/hooks';
import { getCurrentUser } from '~lib/services/getCurrentUser.service';

/***
 * @metadata
 *  - username : string
 *	- bio  : string
 *  - profileImage : string
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

const Profile: FC = () => {
	const isDarkMode = useIsDarkMode();
	const user = getCurrentUser();
	console.log('🚀 ~ file: Profile.view.tsx ~ line 29 ~ user', user);

	return (
		<>
			User
			<Box
				width={'100%'}
				justifyContent={'center'}
				alignItems={'center'}
				color={isDarkMode ? 'white' : 'black'}
				flexDirection={'column'}
				gap={'.2rem'}>
				<Text textAlign={'center'} fontSize={'3xl'}>
					{user?.user_metadata.name}
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
				<>stats</>
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
