import { COLORS_THEME } from '@/config/theme.config';
import {
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { AtSymbolIcon } from '~components/icons';
import { useIsDarkMode } from '~lib/hooks';
import { updateName } from '~lib/services';
import DrawerCustom from './DrwerCustom.component';

const DrawerName: FC = () => {
	const toast = useToast();
	const isDarkMode = useIsDarkMode();
	const refName = useRef<HTMLInputElement>(null);
	const { onClose, isOpen, onOpen } = useDisclosure();

	return (
		<>
			<DrawerCustom
				title={'Name'}
				onClose={onClose}
				onOpen={onOpen}
				schemaColor={isDarkMode ? 'hoverDark.500' : 'hoverLight.500'}
				isOpen={isOpen}
				action={() => {
					toast({
						title: 'Success',
						description: `Your name(${refName?.current?.value}) has been updated`,
						status: 'success',
						duration: 9000,
						isClosable: true,
					});
					updateName({
						newName: refName?.current?.value,
					});
				}}
				placement='right'>
				<FormLabel htmlFor='user'>Edit</FormLabel>
				<InputGroup>
					<InputLeftElement
						pointerEvents={'none'}
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
						placeholder={'juanito ref'}
						id={'name'}
						ref={refName}
					/>
				</InputGroup>
			</DrawerCustom>
		</>
	);
};

export default DrawerName;
