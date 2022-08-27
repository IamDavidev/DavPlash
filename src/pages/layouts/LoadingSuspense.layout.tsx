import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadingSuspense: React.FC = (): JSX.Element => {
	return (
		<>
			<Box
				minH={'100vh'}
				width={'100%'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}>
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
