import { FormLabel, Textarea, useDisclosure, useToast } from '@chakra-ui/react';
import { FC, useRef } from 'react';

import { useIsDarkMode } from '~lib/hooks';

import { updateBio } from '~lib/services';
import DrawerCustom from './DrwerCustom.component';

const DrawerBio: FC = () => {
	const valueTextarea = useRef<HTMLTextAreaElement>(null);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const isDarkMode = useIsDarkMode();
	const toast = useToast();

	return (
		<>
			<DrawerCustom
				onClose={onClose}
				isOpen={isOpen}
				onOpen={onOpen}
				title={'Change your  Bio'}
				placement={'right'}
				schemaColor={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}
				action={() => {
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
				}}>
				<FormLabel htmlFor={'bio'}>Edit your bio</FormLabel>
				<Textarea
					h={'200px'}
					id={'bio'}
					resize={'none'}
					size='sm'
					ref={valueTextarea}
				/>
			</DrawerCustom>
		</>
	);
};

export default DrawerBio;
