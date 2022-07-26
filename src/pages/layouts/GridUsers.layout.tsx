import React from 'react';

import {
	Box,
	Button,
	Flex,
	Image,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';

import { useUsers } from '~lib/hooks';

import { ArrowRightIcon } from '~components/icons';

import { COLORS_THEME } from '~constants/theme.const';
import { Link } from 'react-router-dom';
import { IAdapterUsers } from '~interfaces/Adapters.types';
import VerifiedIcon from '~components/icons/verified.icon';

const GridUsers: React.FC = () => {
	const { users } = useUsers();

	console.log(
		'🚀 ~ file: GridUsers.layout.tsx ~ line 7 ~ GridUsers ~ users',
		users
	);

	/**
	 * @image {string}
	 * @name {string}
	 * @followers {number}
	 * @id {string}
	 */
	return (
		<>
			<h2>users</h2>
			{users.results.length > 0 && (
				<Wrap spacingX={'1rem'} spacingY={'2rem'}>
					{users.results.map((user: IAdapterUsers) => {
						return (
							<WrapItem key={user.id}>
								<Box
									display={'flex'}
									width={'310px'}
									alignItems={'center'}
									overflow={'hidden'}
									flexWrap={'wrap'}
									color={'white'}
									gap={'1rem'}
									justifyContent={'center'}>
									<Image
										src={user.profileImage}
										alt={user.firstName}
										borderWidth={'1px'}
										borderStyle={'solid'}
										borderColor={'white'}
										objectFit={'cover'}
										borderRadius={'50%'}
									/>
									<Box display={'flex'} flexDir={'column'} gap={'.5rem'}>
										<Box color={'white'} display={'flex'} flexDir={'column'}>
											<Text
												maxW={'120px'}
												display={'flex'}
												gap={'4px'}
												alignItems={'center'}>
												{user.firstName} <VerifiedIcon width={25} height={25} />
											</Text>
											<Flex flexDir={'row'}>
												<Text fontWeight={'bold'} opacity={0.8}>
													{user.totalPhotos}
												</Text>
												<Text mx={'.5rem'} opacity={0.6}>
													{'photos'}
												</Text>
											</Flex>
										</Box>
										<Link to={`/plash/discover/users/${user.userName}`}>
											<Button
												border={'none'}
												variant={'outline'}
												py={2}
												px={6}
												_hover={{
													bg: 'grayTheme.500',
												}}>
												<Text mr={'.5rem'} color={'purpleTheme.500'}>
													Follow
												</Text>
												<ArrowRightIcon
													width={25}
													height={25}
													color={COLORS_THEME._PURPLE_}
												/>
											</Button>
										</Link>
									</Box>
								</Box>{' '}
							</WrapItem>
						);
					})}
				</Wrap>
			)}
		</>
	);
};

export default GridUsers;
