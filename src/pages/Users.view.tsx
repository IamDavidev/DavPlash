import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Heading,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Controls from '~components/controls.compoenent';
import { NextIcon, PrevIcon } from '~components/icons';
import GridUserSkeletons from '~components/skeletons/GriUsersSkeleton.component';
import { useIsDarkMode, useUsers } from '~lib/hooks';
import GridUsers from './layouts/GridUsers.layout';

const UsersView = () => {
	const isDarkMode = useIsDarkMode();
	const { users, isLoading, error, page, setPageUsers, setQueryUsers } =
		useUsers();
	return (
		<>
			<Box width={'100%'} my={'2rem'} pos={'relative'} zIndex={10}>
				<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
					<BreadcrumbItem>
						<Link to='/plash'>Discover</Link>
					</BreadcrumbItem>

					<BreadcrumbItem
						isCurrentPage
						color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}>
						<Text>Users</Text>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<Text color={'blueTheme.500'}>
						<PrevIcon width={'4rem'} height={'4.5rem'} /> Discover
					</Text>
					more Users <NextIcon width={'4rem'} height={'4.5rem'} />
				</Heading>
				{error.isError && (
					<>
						<Text color={'red.500'}>{error.message}</Text>
					</>
				)}{' '}
				<Box>
					{!error.isError && (
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
				<GridUsers users={users.results} />
			</Box>
		</>
	);
};

export default UsersView;
