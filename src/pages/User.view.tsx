import React from 'react';
import { useParams, Link as LinkNav } from 'react-router-dom';

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

import {
	AtSymbolIcon,
	InstagramIcon,
	LineIcon,
	TwitterIcon,
} from '~components/icons';

import VerifiedIcon from '~components/icons/verified.icon';

import { COLORS_THEME } from '~constants/theme.const';

import useUser from '~lib/hooks/useUser.hook';

import { CardSkeletonUserView } from '~components/skeletons';

const UserView: React.FC = () => {
	const { username } = useParams();

	const { user, photos, isLoading } = useUser(username);

	if (isLoading)
		return (
			<>
				<CardSkeletonUserView />
			</>
		);

	return (
		<>
			<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
				<BreadcrumbItem>
					<LinkNav to='/plash'>Discover</LinkNav>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<LinkNav to={`/plash/discover/users`}>Users</LinkNav>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
					<Text>{username}</Text>
				</BreadcrumbItem>
			</Breadcrumb>

			<Flex flexDir={'column'}>
				<Flex
					width={'100%'}
					justifyContent={'center'}
					mb={'1rem'}
					alignItems={'flex-start'}
					gap={'1rem'}>
					<Box width={'150px'} pos={'relative'}>
						<Image
							src={user.profileImage}
							borderWidth={'1px'}
							borderColor={'purpleTheme.500'}
							borderRadius={'50%'}
							alt={user.username}
							objectFit={'cover'}
						/>
						<Box pos={'absolute'} right={4} bottom={'20px'}>
							<VerifiedIcon
								width={25}
								height={25}
								color={COLORS_THEME._PURPLE_}
							/>
						</Box>
					</Box>
				</Flex>
				<Box
					width={'100%'}
					justifyContent={'center'}
					alignItems={'center'}
					color={'white'}
					flexDirection={'column'}
					gap={'.2rem'}>
					<Text textAlign={'center'} fontSize={'3xl'}>
						{user.name}
					</Text>
					<Box
						display={'flex'}
						justifyContent={'center'}
						gap={'.2rem'}
						alignItems={'center'}
						fontSize='2xl'>
						<AtSymbolIcon
							width={30}
							height={29}
							color={COLORS_THEME._PURPLE_}
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
								<TwitterIcon width={30} height={30} color={'#fff'} />
							</Link>
						</>
					)}
					{user.instagram && (
						<>
							<Link
								href={`https://www.instagram.com/${user.instagram}`}
								isExternal>
								<InstagramIcon width={30} height={30} color={'#fff'} />
							</Link>
						</>
					)}
				</Box>
				<Box
					max-width={'80%'}
					mx={'auto'}
					my={'2rem'}
					px={'4rem'}
					py={'1rem'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					gap={'2rem'}
					borderRadius={'2rem'}
					borderColor={'blueTheme.500'}
					borderWidth={'1px'}
					color={'white'}
					borderStyle={'solid'}>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Followers</Text>
						<Text color={'purpleTheme.500'}>{user.followers}</Text>
					</Flex>
					<LineIcon height={30} width={2} color={COLORS_THEME._BLUE_} />

					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Following</Text>
						<Text color={'purpleTheme.500'}>{user.following}</Text>
					</Flex>
					<LineIcon height={30} width={2} color={COLORS_THEME._BLUE_} />

					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Location</Text>
						<Text color={'purpleTheme.500'}>{user.location ?? 'Unknown'}</Text>
					</Flex>
					<LineIcon height={30} width={2} color={COLORS_THEME._BLUE_} />

					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Likes</Text>
						<Text color={'purpleTheme.500'}>{user.totalLikes}</Text>
					</Flex>
					<LineIcon height={30} width={2} color={COLORS_THEME._BLUE_} />

					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Photos</Text>
						<Text color={'purpleTheme.500'}>{user.totalPhotos}</Text>
					</Flex>
				</Box>
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
										border={`1px solid ${COLORS_THEME._WHITE_}`}
										variant={'outline'}>
										{tag.value}
									</Tag>
								</WrapItem>
							);
						})}
				</Wrap>
				<Divider colorScheme={'white'} my={'1rem'} />
				<Wrap justify={'center'} spacing={'.5rem'}>
					{photos.length > 0 &&
						photos.map((photo: any) => {
							return (
								<>
									<WrapItem key={photo.id}>
										<Image
											borderRadius={'1rem'}
											src={photo.urls.small}
											alt={photo.description}
											objectFit={'contain'}
										/>
									</WrapItem>
								</>
							);
						})}
				</Wrap>
			</Flex>
		</>
	);
};

export default UserView;
