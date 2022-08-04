import { Image } from '@chakra-ui/react';
import React, { useState } from 'react';

type TypePhoto = {
	id: string;
	photo: string;
};

interface ICardImageRotateProps {
	photos: TypePhoto[];
}

function changePhoto({
	setIndex,
	index,
	length,
}: {
	setIndex: any;
	index: number;
	length: number;
}) {
	if (index === length - 1) return setIndex(0);
	setIndex(index + 1);
}
// length = 10
// index = 10

const CardImageRotate: React.FC<ICardImageRotateProps> = ({ photos }) => {
	const [indexPhoto, setIndexPhoto] = useState(0);

	// useEffect(() => {
	// 	const index = setTimeout(() => {
	// 		changePhoto({
	// 			index: indexPhoto,
	// 			length: photos.length,
	// 			setIndex: setIndexPhoto,
	// 		});
	// 	}, 1000);
	// 	return () => {
	// 		clearTimeout(index);
	// 	};
	// }, [photos, indexPhoto]);

	if (!photos.length) return null;

	return (
		<>
			<Image
				src={photos[indexPhoto].photo}
				alt={photos[indexPhoto].id}
				boxSize={'15rem'}
				objectFit={'cover'}
				borderStyle={'solid'}
				borderWidth={'1px'}
				borderRadius={'1rem'}
				borderColor={'#fff'}
			/>
		</>
	);
};

export default CardImageRotate;
