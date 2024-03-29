import {
	Box,
	Flex,
	Heading,
	Image,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useIsDarkMode } from '~lib/hooks';

const Footer: FC = (): JSX.Element => {
	const isDarkMode = useIsDarkMode();
	return (
		<>
			<Box
				as={'footer'}
				px={'3rem'}
				borderRadius={'1rem'}
				p={'1.5rem'}
				mt={'5rem'}
				display={'flex'}
				flexDir={{
					sm: 'column',
					lg: 'row',
				}}
				bg={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}>
				<Box
					w={{
						sm: '100%',
						lg: '40%',
					}}
					p={'1rem'}>
					<Image
						src={'/ITSDAVIDEV.svg'}
						my={'1rem'}
						alt={'davplashApp'}
						boxSize={24}
					/>
					<Heading
						as={'h3'}
						fontSize={'1.5rem'}
						color={'blueG.500'}
						mb={'1rem'}>
						DavPlash App
					</Heading>
					<Text>
						In this app you can share photos, create collection with your photos
						and discover new people with same hobby for photos.
					</Text>
				</Box>
				<Flex gap={'3rem'} wrap={'wrap'} justifyContent='center'>
					<Box>
						<Heading color={'blueG.500'} mb={'1rem'} as='h4' fontSize={'1rem'}>
							Inspiration figma
						</Heading>
						<UnorderedList>
							<ListItem>Desing</ListItem>
						</UnorderedList>
					</Box>
					<Box>
						<Heading color={'blueG.500'} mb={'1rem'} as='h3' fontSize={'1rem'}>
							Technologies
						</Heading>
						<UnorderedList>
							<ListItem>Vite</ListItem>
							<ListItem>React</ListItem>
							<ListItem>Chakra UI</ListItem>
							<ListItem>Typescript</ListItem>
							<ListItem>Supabase</ListItem>
						</UnorderedList>
					</Box>
					<Box>
						<Heading color={'blueG.500'} mb={'1rem'} as='h3' fontSize={'1rem'}>
							Creator
						</Heading>
						<UnorderedList>
							<ListItem>
								<Link isExternal={true} href='https://github.com/itsDavidev'>
									Github
								</Link>
							</ListItem>
							<ListItem>
								<Link isExternal={true} href='https://twitter.com/itsDavidev'>
									Twitter
								</Link>
							</ListItem>
							<ListItem>
								<Link
									isExternal={true}
									href='https://www.linkedin.com/in/itsdavidev/'>
									LinKedin
								</Link>
							</ListItem>
							<ListItem>
								<Link
									isExternal={true}
									href='https://www.instagram.com/itsdavidev/'>
									Instagram
								</Link>
							</ListItem>
							<ListItem>
								<Link isExternal={true} href={'https://dblog.ga'}>
									Blog
								</Link>
							</ListItem>
						</UnorderedList>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default Footer;
