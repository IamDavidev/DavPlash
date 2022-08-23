import { FC, useRef } from 'react';

import {
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';

import { AtSymbolIcon } from '~components/icons';
import { useIsDarkMode } from '~lib/hooks';
import { updateUserName } from '~lib/services/updateUsername.service';
import DrawerCustom from './DrwerCustom.component';
import { COLORS_THEME } from '@/config/theme.config';

const DrawerUserName: FC = () => {
	const refUserName = useRef<HTMLInputElement>(null);
	const { onClose, isOpen, onOpen } = useDisclosure();
	const toast = useToast();
	const isDarkMode = useIsDarkMode();

	return (
		<>
			<DrawerCustom
				onOpen={onOpen}
				placement='right'
				schemaColor={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}
				title='UserName'
				onClose={onClose}
				action={() => {
					toast({
						title: 'Success Update User',
						description: `Your user name(${refUserName.current?.value}) has been updated`,
						status: 'success',
						duration: 9000,
						position: 'top',
						isClosable: true,
					});
					updateUserName({
						userName: refUserName.current?.value,
					});
				}}
				isOpen={isOpen}>
				<FormLabel htmlFor={'username'}>Edit </FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						// eslint-disable-next-line react/no-children-prop
						children={
							<AtSymbolIcon
								height={20}
								width={20}
								color={COLORS_THEME._BLUE_}
							/>
						}
					/>
					<Input
						type={'text'}
						placeholder={'coffeeMaster500'}
						id='username'
						ref={refUserName}
					/>
				</InputGroup>
			</DrawerCustom>
		</>
	);
};

export default DrawerUserName;
