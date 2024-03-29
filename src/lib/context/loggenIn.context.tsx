import { supabase } from '@/config/clients';
import {
	Context,
	createContext,
	FC,
	ReactNode,
	useEffect,
	useState,
} from 'react';
import { EVENTS_ON_AUTH_STATE_CHAGE } from '~constants/events.const';
import { getCurrentUser } from '~lib/services/getCurrentUser.service';

interface contextLoggen {
	loggedIn: boolean;
	toggleLoggedIn: () => void;
}

export const LoggedInContext: Context<contextLoggen> =
	createContext<contextLoggen>({
		loggedIn: false,
		toggleLoggedIn: () => {},
	});
interface providerLoggen {
	children: ReactNode;
}

const ProviderLoggendIn: FC<providerLoggen> = ({ children }) => {
	const user = getCurrentUser();

	const [loggedIn, setLoggedIn] = useState(false);

	const toggleLoggedIn = (): void =>
		setLoggedIn((prev: boolean): boolean => !prev);

	useEffect((): void | (() => void) => {
		const { data } = supabase.auth.onAuthStateChange(
			(evt /* evento */, _ /* sesion */): void => {
				if (evt === EVENTS_ON_AUTH_STATE_CHAGE._SIGNED_OUT_)
					return setLoggedIn(false);
				if (evt === 'SIGNED_IN') return setLoggedIn(true);
			}
		);

		if (user) return setLoggedIn(true);

		return (): void => {
			data?.unsubscribe();
		};
	}, [user]);

	return (
		<>
			<LoggedInContext.Provider
				value={{
					loggedIn,
					toggleLoggedIn,
				}}>
				{children}
			</LoggedInContext.Provider>
		</>
	);
};

export default ProviderLoggendIn;
