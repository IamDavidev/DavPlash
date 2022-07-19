import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function calculatePath(path: string, navigate: any) {
	if (path === 'photos') return 0;
	if (path === 'collections') return 1;
	if (path === 'users') return 2;
	if (path === undefined) {
		navigate('/plash/discover/photos');
		return 0;
	}

	throw new Error('Invalid Tab');
}

const DiscoverView: React.FC = () => {
	const path = window.location.pathname.split('/')[3];
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setIndex(calculatePath(path, navigate));
	}, []);

	return (
		<Box>
			<Box>
				<Tabs
					align='center'
					index={index}
					color={'white'}
					_selected={{
						color: 'white',
						bg: 'grayTheme',
					}}>
					<TabList>
						<Tab onClick={() => setIndex(0)}>
							<Link to='/plash/discover/photos'>Photos</Link>
						</Tab>
						<Tab onClick={() => setIndex(1)}>
							<Link to='/plash/discover/collections'>Collections</Link>
						</Tab>
						<Tab onClick={() => setIndex(2)}>
							<Link to='/plash/discover/users'>Users</Link>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>Photos</TabPanel>
						<TabPanel>Collections</TabPanel>
						<TabPanel>Users</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			<Outlet />
		</Box>
	);
};

export default DiscoverView;
