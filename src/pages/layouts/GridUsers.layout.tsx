import React from 'react';

import { Box, Wrap, WrapItem } from '@chakra-ui/react';

import { IAdapterUsers } from '~interfaces/Adapters.types';

import CardUser from '~components/CardUser.component';

type TypeGridUsersProps = {
	users: IAdapterUsers[];
};

const GridUsers: React.FC<TypeGridUsersProps> = ({ users }) => {
	return (
		<>
			<Box width={'100%'} my={'2rem'} pos={'relative'} zIndex={10}>
				<>
					<Wrap
						spacingX={'1rem'}
						spacingY={'2rem'}
						my={'3rem'}
						justify={'center'}>
						{users.map((user: IAdapterUsers) => {
							return (
								<WrapItem key={user.id}>
									<CardUser
										firstName={user.firstName}
										profileImage={user.profileImage}
										totalPhotos={user.totalPhotos}
										userName={user.userName}
										key={user.id}
									/>
								</WrapItem>
							);
						})}
					</Wrap>
				</>
			</Box>
		</>
	);
};

export default GridUsers;
