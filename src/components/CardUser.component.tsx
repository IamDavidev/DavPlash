import React from 'react';

import { COLORS_THEME } from '@/config/theme.config';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useIsDarkMode } from '~lib/hooks';
import { ArrowRightIcon, VerifiedIcon } from './icons';

interface ICardUserProps {
	profileImage: string;
	firstName: string;
	totalPhotos: number;
	userName: string;
}

const CardUser: React.FC<ICardUserProps> = ({
	profileImage,
	firstName,
	totalPhotos,
	userName,
}) => {
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Box
				display={'flex'}
				width={'295px'}
				alignItems={'center'}
				overflow={'hidden'}
				flexWrap={'wrap'}
				color={isDarkMode ? 'white' : 'black'}
				gap={'1rem'}
				justifyContent={'center'}>
				<Image
					src={profileImage}
					alt={firstName}
					borderWidth={'1px'}
					borderStyle={'solid'}
					borderColor={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}
					objectFit={'cover'}
					borderRadius={'50%'}
				/>
				<Box display={'flex'} flexDir={'column'} gap={'.5rem'}>
					<Box
						color={isDarkMode ? 'white' : 'black'}
						display={'flex'}
						flexDir={'column'}>
						<Text
							maxW={'120px'}
							display={'flex'}
							gap={'4px'}
							alignItems={'center'}>
							{firstName} <VerifiedIcon width={25} height={25} />
						</Text>
						<Flex flexDir={'row'}>
							<Text fontWeight={'bold'} opacity={0.8}>
								{totalPhotos}
							</Text>
							<Text mx={'.5rem'} opacity={0.6}>
								{'photos'}
							</Text>
						</Flex>
					</Box>
					<Link to={`/plash/discover/users/${userName}`}>
						<Button
							border={'none'}
							variant={'outline'}
							py={2}
							px={6}
							_hover={{
								bg: 'grayTheme.500',
							}}>
							<Text mr={'.5rem'} color={'purpleTheme.500'}>
								Follow
							</Text>
							<ArrowRightIcon
								width={25}
								height={25}
								color={COLORS_THEME.DARK._PRIMARY_}
							/>
						</Button>
					</Link>
				</Box>
			</Box>{' '}
		</>
	);
};

export default CardUser;
