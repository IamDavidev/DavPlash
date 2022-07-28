import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Heading,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NextIcon, PrevIcon } from '~components/icons';
import GridUsers from './layouts/GridUsers.layout';

const UsersView = () => {
	return (
		<>
			<Box width={'100%'} my={'2rem'} pos={'relative'} zIndex={10}>
				<Breadcrumb fontWeight={'bold'} fontSize={'xl'} color={'white'}>
					<BreadcrumbItem>
						<Link to='/plash'>Discover</Link>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage color={'purpleTheme.500'}>
						<Text>Users</Text>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading as={'h2'} color={'purpleTheme.500'} fontSize={'4.5rem'}>
					<Text color={'blueTheme.500'}>
						<PrevIcon width={'4rem'} height={'4.5rem'} /> Discover
					</Text>
					more Users <NextIcon width={'4rem'} height={'4.5rem'} />
				</Heading>
				<GridUsers controls={true} />
			</Box>
		</>
	);
};

export default UsersView;
