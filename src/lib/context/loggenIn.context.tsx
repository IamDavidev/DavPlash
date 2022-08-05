import { supabase } from '@/config/clients';
import React, { createContext, useEffect, useState } from 'react';
import { EVENTS_ON_AUTH_STATE_CHAGE } from '~constants/events.const';
import { getCurrentUser } from '~lib/services/getCurrentUser.service';

interface contextLoggen {
	loggedIn: boolean;
	toggleLoggedIn: () => void;
}

export const LoggedInContext: React.Context<contextLoggen> =
	createContext<contextLoggen>({
		loggedIn: false,
		toggleLoggedIn: () => {},
	});

const ProviderLoggendIn = ({ children }: { children: React.ReactNode }) => {
	const user = getCurrentUser();
	console.log(
		'🚀 ~ file: loggenIn.context.tsx ~ line 19 ~ ProviderLoggendIn ~ user',
		user
	);

	const [loggedIn, setLoggedIn] = useState(false);

	const toggleLoggedIn = () => setLoggedIn((prev: boolean) => !prev);

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange(
			(evt /* evento */, sesion): void => {
				if (evt === EVENTS_ON_AUTH_STATE_CHAGE._SIGNED_OUT_)
					return setLoggedIn(false);
				console.log(
					'🚀 ~ file: loggenIn.context.tsx ~ line 22 ~ supabase.auth.onAuthStateChange ~ evt',
					evt
				);
				console.log(
					'🚀 ~ file: loggenIn.context.tsx ~ line 22 ~ supabase.auth.onAuthStateChange ~ sesion',
					sesion
				);
			}
		);
		if (user) {
			return setLoggedIn(true);
		}
		return () => {
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
