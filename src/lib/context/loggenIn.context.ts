import React, { createContext } from 'react';

export const LoggenInContext: React.Context<boolean> =
	createContext<boolean>(false);
