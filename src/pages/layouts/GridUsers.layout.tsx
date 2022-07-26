import React from 'react';

import { Box, Button, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';

import { useUsers } from '~lib/hooks';

import { ArrowRightIcon } from '~components/icons';

import { COLORS_THEME } from '~constants/theme.const';
import { Link } from 'react-router-dom';

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
			{users.results.length > 0 && (
				<Wrap spacingX={'1rem'} spacingY={'2rem'}>
					{users.results.map(user => {
						return (
							<WrapItem key={user.id}>
								<Box
									display={'flex'}
									width={'300px'}
									alignItems={'center'}
									overflow={'hidden'}
									flexWrap={'wrap'}
									color={'white'}
									gap={'1rem'}
									justifyContent={'center'}>
									<Image
										src={user.profile_image.large}
										alt={user.username}
										objectFit={'cover'}
										borderRadius={'50%'}
									/>
									<Box display={'flex'} flexDir={'column'} gap={'2px'}>
										<Text>{user.first_name}</Text>
										<Box color={'white'} display={'flex'} opacity={'.4'}>
											<Text fontWeight={'bold'}>{user.total_photos}</Text>
											<Text mx={'.5rem'}>{'photos'}</Text>
										</Box>
										<Link to='/plash'>
											<Button
												border={'none'}
												variant={'outline'}
												padding={0}
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
