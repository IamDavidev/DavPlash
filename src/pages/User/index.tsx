import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { getUser } from '~lib/services';

interface TypeUserData {
	isSuccess: boolean;
}

const User = () => {
	const { user } = useParams<string>();
	const [userData, setUserData] = useState<TypeUserData>({
		isSuccess: false,
	});
	// \s
	const userNew: string = user?.replace(' ', '-') || '';

	console.log('🚀 ~ file: index.tsx ~ line 10 ~ User ~ userData', userData);

	useEffect(() => {
		getUser(userNew).then(setUserData);
		return () => {};
	}, []);

	if (!user.isSuccess) return <p>No user</p>;

	return (
		<>
			<h1>User</h1>
		</>
	);
};

export default User;
