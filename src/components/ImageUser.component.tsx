import { COLORS_THEME } from '@/config/theme.config';
import { Box, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { VerifiedIcon } from '~components/icons';

interface ImageUserProps {
	profileImage: string;
	username: string;
}

const ImageUser: FC<ImageUserProps> = ({ profileImage, username }) => {
	return (
		<Flex
			width={'100%'}
			justifyContent={'center'}
			mb={'1rem'}
			alignItems={'flex-start'}
			gap={'1rem'}>
			<Box width={'150px'} pos={'relative'}>
				<Image
					src={profileImage}
					borderWidth={'1px'}
					borderColor={'primaryDark.500'}
					borderRadius={'50%'}
					alt={username}
					objectFit={'cover'}
				/>
				<Box pos={'absolute'} right={4} bottom={'20px'}>
					<VerifiedIcon
						width={25}
						height={25}
						color={COLORS_THEME.DARK._PRIMARY_}
					/>
				</Box>
			</Box>
		</Flex>
	);
};

export default ImageUser;
