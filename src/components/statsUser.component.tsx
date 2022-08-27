import { COLORS_THEME } from '@/config/theme.config';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useIsDarkMode } from '~lib/hooks';
import { LineIcon } from './icons';

interface StatsUserProps {
	followers: number;
	following: number;
	location: string;
	likes: number;
	photos: number;
}

const StatsUser: FC<StatsUserProps> = ({
	followers,
	following,
	location,
	likes,
	photos,
}): JSX.Element => {
	console.log('🚀 ~ file: statsUser.component.tsx ~ line 22 ~ likes', likes);
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
				<Box
					max-width={'80%'}
					mx={'auto'}
					my={'2rem'}
					px={'4rem'}
					py={'1rem'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					flexDir={{
						sm: 'column',
						lg: 'row',
					}}
					gap={{
						sm: '.2rem',
						lg: '1rem',
						xl: '2rem',
					}}
					borderRadius={'2rem'}
					borderColor={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}
					borderWidth={'1px'}
					color={isDarkMode ? 'white' : 'black'}
					borderStyle={'solid'}>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Followers</Text>
						<Text color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}>
							{followers}
						</Text>
					</Flex>
					<Box display={{ sm: 'none', lg: 'block' }}>
						<LineIcon
							height={30}
							width={2}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
					</Box>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Following</Text>
						<Text color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}>
							{following}
						</Text>
					</Flex>
					<Box display={{ sm: 'none', lg: 'block' }}>
						<LineIcon
							height={30}
							width={2}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
					</Box>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Location</Text>
						<Text color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}>
							{location}
						</Text>
					</Flex>

					<Box display={{ sm: 'none', lg: 'block' }}>
						<LineIcon
							height={30}
							width={2}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
					</Box>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Likes</Text>
						<Text color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}>
							{/* 10 */}
							{likes}
						</Text>
					</Flex>

					<Box display={{ sm: 'none', lg: 'block' }}>
						<LineIcon
							height={30}
							width={2}
							color={COLORS_THEME.DARK._PRIMARY_}
						/>
					</Box>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Text>Photos</Text>
						<Text color={isDarkMode ? 'primaryDark.500' : 'secondaryLight.500'}>
							{photos}
						</Text>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default StatsUser;
