import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadingSuspense: React.FC = () => {
	return (
		<>
			<Box minH={'100vh'} width={'100%'}>
				<Spinner
					thickness={'.5rem'}
					speed={'1s'}
					color={'purpleTheme.500'}
					size={'xl'}
					emptyColor={'grayTheme.500'}
				/>
			</Box>
		</>
	);
};

export default LoadingSuspense;
