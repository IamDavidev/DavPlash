import { Box, Code, Heading, Image, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { useIsDarkMode } from '~lib/hooks';

const PageNotFound = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Box
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={'1rem'}
				minH={'100vh'}
				color={isDarkMode ? 'white' : 'black'}>
				<Text>
					return <Link to='/plash'>Discover</Link>
				</Text>
				<Heading as={'h2'}>Page not found</Heading>
				<Code>404</Code>
				<Image src={'/error404.png'} alt={'page not found'} />
			</Box>
		</>
	);
};

export default PageNotFound;
