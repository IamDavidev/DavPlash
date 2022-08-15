import { FC } from 'react';

import { COLORS_THEME } from '@/config/theme.config';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NoAccess: FC = () => {
	return (
		<>
			<Flex
				flexDir={'column'}
				gap={'1.5rem'}
				justifyContent={'center'}
				minH={'80vh'}
				pos={'relative'}
				p={'5rem'}
				h={'100%'}>
				<Heading as={'h2'} fontSize={'5rem'}>
					No Access
				</Heading>
				<Link to='/plash/login'>
					<Box
						background={COLORS_THEME._BLUE_}
						w={'150px'}
						px={'1rem'}
						py={'.5rem'}
						textAlign={'center'}
						borderRadius={'1rem'}>
						Login
					</Box>
				</Link>
				<Image
					src='/noAccess.svg'
					alt='noAccess'
					width={'25rem'}
					pos={'absolute'}
					top={0}
					right={0}
				/>
			</Flex>
		</>
	);
};

export default NoAccess;
