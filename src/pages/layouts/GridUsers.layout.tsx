import React from 'react';

import { Box, Wrap, WrapItem } from '@chakra-ui/react';

import { useUsers } from '~lib/hooks';

import { IAdapterUsers } from '~interfaces/Adapters.types';

import CardUser from '~components/CardUser.component';
import Controls from '~components/controls.compoenent';
import GridUserSkeletons from '~components/skeletons/GriUsersSkeleton.component';

type TypeGridUsersProps = {
	controls: boolean;
};

const GridUsers: React.FC<TypeGridUsersProps> = ({ controls }) => {
	const { users, isLoading, error, page, setPageUsers, setQueryUsers } =
		useUsers();

	if (error.isError) return <>{error.message}</>;

	return (
		<>
			<Box width={'100%'} my={'2rem'} pos={'relative'} zIndex={10}>
				<Box>
					{controls && (
						<Controls
							page={page}
							setPage={setPageUsers}
							setQuery={setQueryUsers}
						/>
					)}
				</Box>
				{isLoading && (
					<>
						<GridUserSkeletons length={24} />
					</>
				)}
				{!isLoading && (
					<>
						<Wrap
							spacingX={'1rem'}
							spacingY={'2rem'}
							my={'3rem'}
							justify={'center'}>
							{users.results.map((user: IAdapterUsers) => {
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
				)}
			</Box>
		</>
	);
};

export default GridUsers;
