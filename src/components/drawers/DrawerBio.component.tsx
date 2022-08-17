import { COLORS_THEME } from '@/config/theme.config';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	FormLabel,
	Textarea,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';

import { useIsDarkMode } from '~lib/hooks';

import { EditIcon } from '~components/icons';

import { updateBio } from '~lib/services';

const DrawerBio: FC = () => {
	const valueTextarea = useRef<HTMLTextAreaElement>(null);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const isDarkMode = useIsDarkMode();
	const toast = useToast();

	return (
		<>
			<Button variant={'outline'} onClick={onOpen}>
				<EditIcon width={20} height={20} color={COLORS_THEME._BLUE_} />
			</Button>
			<Drawer placement='right' isOpen={isOpen} onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent bg={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}>
					<DrawerCloseButton />
					<DrawerHeader>
						<h3>Biogafia </h3>
					</DrawerHeader>
					<DrawerBody>
						<FormLabel htmlFor={'bio'}>Edit your bio</FormLabel>
						<Textarea
							h={'200px'}
							id={'bio'}
							resize={'none'}
							size='sm'
							ref={valueTextarea}
						/>
					</DrawerBody>
					<DrawerFooter>
						<Button mx={'.5rem'} colorScheme={'red'} onClick={onClose}>
							Cancel
						</Button>
						<Button
							mx={'.5rem'}
							onClick={() => {
								toast({
									description: `Your bio has been updated`,
									status: 'success',
									title: 'Success',
									isClosable: true,
									position: 'top',
									duration: 9000,
								});
								updateBio({
									bio: valueTextarea.current?.value,
								});
								onClose();
							}}>
							Save
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerBio;
