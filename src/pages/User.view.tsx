import React from 'react';
import { useParams } from 'react-router-dom';

import { Heading } from '@chakra-ui/react';

const UserView: React.FC = () => {
	const { user } = useParams();
	return (
		<>
			<Heading as='h2'>{user}</Heading>
		</>
	);
};

export default UserView;
