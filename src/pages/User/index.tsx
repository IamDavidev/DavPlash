import { useParams } from 'react-router-dom';

const User = () => {
	const { user } = useParams();

	console.log('<< user >> <<', user);

	return (
		<>
			<h1>User</h1>
		</>
	);
};

export default User;
