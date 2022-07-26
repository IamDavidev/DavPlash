import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Heading } from '@chakra-ui/react';
import useUser from '~lib/hooks/useUser.hook';

const UserView: React.FC = () => {
	const { username } = useParams();

	const { user } = useUser(username);
	console.log('🚀 ~ file: User.view.tsx ~ line 11 ~ user', user);

	return (
		<>
			{/* <Heading as='h2'>{user}</Heading> */}
			<Box>User view</Box>
		</>
	);
};

export default UserView;
