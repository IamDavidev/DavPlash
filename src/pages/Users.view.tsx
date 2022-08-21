import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import GridUserSkeletons from '~components/skeletons/GriUsersSkeleton.component';
import { useIsDarkMode, useUsers } from '~lib/hooks';
import GridUsers from './layouts/GridUsers.layout';

const UsersView: FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	const { users, isLoading, error, page, setPageUsers, setQueryUsers } =
		useUsers();
	return (
		<>
			<Box>
				<Heading
					as={'h2'}
					color={isDarkMode ? 'primaryDark.500' : 'primaryLight.500'}
					fontSize={'4.5rem'}>
					<PrevIcon width={50} height={90} />
					<Text>Discover more Users</Text>
					<NextIcon width={50} height={90} />
				</Heading>
				{error.isError && (
					<>
						<Text color={'red.500'}>{error.message}</Text>
					</>
				)}{' '}
				<>
					{!error.isError && (
						<Controls
							page={page}
							setPage={setPageUsers}
							setQuery={setQueryUsers}
						/>
					)}
				</>
				{isLoading && (
					<>
						<GridUserSkeletons length={24} />
					</>
				)}
				{users.results.length > 0 && <GridUsers users={users.results} />}
			</Box>
		</>
	);
};

export default UsersView;
