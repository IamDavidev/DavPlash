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
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { EditIcon } from '~components/icons';

interface IDrawerCustomProps {
	placement: 'left' | 'right' | 'top' | 'bottom';
	schemaColor: string;
	subtitle?: string;
	title: string;
	children: ReactNode;
	onOpen: () => void;
	onClose: () => void;
	action: () => void;
	isOpen: boolean;
}
const DrawerCustom: FC<IDrawerCustomProps> = ({
	title,
	subtitle,
	children,
	placement,
	isOpen,
	onClose,
	onOpen,
	schemaColor,
	action,
}) => {
	return (
		<>
			<Button variant={'outline'} onClick={onOpen}>
				<EditIcon width={20} height={20} color={COLORS_THEME._BLUE_} />
			</Button>

			<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent bg={schemaColor}>
					<DrawerCloseButton />
					<DrawerHeader>
						<h3>{title}</h3>
						{subtitle && <h4>{subtitle}</h4>}
					</DrawerHeader>
					<DrawerBody>{children}</DrawerBody>
					<DrawerFooter>
						<Button mx={'.5rem'} colorScheme={'red'} onClick={onClose}>
							Cancel
						</Button>
						<Button
							colorScheme={'green'}
							ml={'.5rem'}
							onClick={() => {
								action();
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

export default DrawerCustom;
