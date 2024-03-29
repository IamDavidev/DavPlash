import React, { useEffect } from 'react';
import { Link as LinkNav, useParams } from 'react-router-dom';

import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Divider,
	Flex,
	Image,
	Link,
	Tag,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';

import { AtSymbolIcon, InstagramIcon, TwitterIcon } from '~components/icons';

import { COLORS_THEME } from '@/config/theme.config';

import useUser from '~lib/hooks/useUser.hook';

import ImageUser from '~components/ImageUser.component';
import { CardSkeletonUserView } from '~components/skeletons';
import StatsUser from '~components/statsUser.component';
import { useIsDarkMode } from '~lib/hooks';

const UserView: React.FC = (): JSX.Element => {
	const { username } = useParams();
	const isDarkMode = useIsDarkMode();

	const { user, photos, isLoading, setUserName } = useUser();
	console.log('🚀 ~ file: User.view.tsx ~ line 34 ~ user', user);

	useEffect((): void => {
		if (!username) return;
		setUserName(username);
	}, []);

	return (
		<>
			<Breadcrumb
				fontWeight={'bold'}
				fontSize={'xl'}
				color={isDarkMode ? 'white' : 'black'}>
				<BreadcrumbItem>
					<LinkNav to='/plash'>Discover</LinkNav>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<LinkNav to={`/plash/discover/users`}>Users</LinkNav>
				</BreadcrumbItem>

				<BreadcrumbItem
					isCurrentPage
					color={isDarkMode ? 'primaryDark.500' : 'cyanLight.500'}>
					<Text>{username}</Text>
				</BreadcrumbItem>
			</Breadcrumb>
			{isLoading && (
				<>
					<CardSkeletonUserView />
				</>
			)}
			{user.profileImage && (
				<Flex flexDir={'column'}>
					<ImageUser
						profileImage={user.profileImage}
						username={user.username}
					/>
					<Box
						width={'100%'}
						justifyContent={'center'}
						alignItems={'center'}
						color={isDarkMode ? 'white' : 'black'}
						flexDirection={'column'}
						gap={'.2rem'}>
						<Text textAlign={'center'} fontSize={'3xl'}>
							{user.name}
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
							<Text>{user.username}</Text>
						</Box>
					</Box>
					<Box
						display={'flex'}
						justifyContent={'center'}
						gap={'2rem'}
						my={'1rem'}
						alignItems={'center'}>
						{user.twitter && (
							<>
								<Link href={user.twitter} isExternal>
									<TwitterIcon
										width={30}
										height={30}
										color={isDarkMode ? 'white' : 'dark'}
									/>
								</Link>
							</>
						)}

						{user.instagram && (
							<>
								<Link
									href={`https://www.instagram.com/${user.instagram}`}
									isExternal>
									<InstagramIcon
										width={30}
										height={30}
										color={isDarkMode ? 'white' : 'dark'}
									/>
								</Link>
							</>
						)}
					</Box>
					<StatsUser
						followers={user.followers}
						following={user.following}
						location={user.location}
						likes={user.totalLikes}
						photos={user.totalPhotos}
					/>
					<Box
						textAlign={'center'}
						color={'whiteTheme.500'}
						display='flex'
						justifyContent={'center'}>
						<Text width={'35ch'} textAlign={'center'} fontSize='xl'>
							{user.bio}
						</Text>
					</Box>
					<Wrap
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
					<Divider
						colorScheme={isDarkMode ? 'white' : 'black'}
						my={'1rem'}
						height={'2px'}
					/>
					<Wrap justify={'center'} spacing={'.5rem'}>
						{photos.length > 0 &&
							photos.map((photo: any) => {
								return (
									<>
										<WrapItem key={photo.id} className='masonry-image'>
											<LinkNav to={`/plash/discover/photos/${photo.id}`}>
												<Image
													borderRadius={'1rem'}
													src={photo.urls.small}
													alt={photo.description}
													objectFit={'contain'}
												/>
											</LinkNav>
										</WrapItem>
									</>
								);
							})}
					</Wrap>
				</Flex>
			)}
		</>
	);
};

export default UserView;
