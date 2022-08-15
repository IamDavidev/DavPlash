import { FC } from 'react';
import { Params, useParams } from 'react-router-dom';

const Profile: FC = () => {
	const { user }: Readonly<Params<string>> = useParams();
	const profileUser = user?.replaceAll('-', ' ');
	return (
		<>
			User{'  '}
			{profileUser}
		</>
	);
};

export default Profile;
