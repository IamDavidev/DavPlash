import React from 'react';

import { useParams } from 'react-router-dom';

const CollectionView: React.FC = () => {
	const { id } = useParams();

	return <>collection</>;
};
export default CollectionView;
