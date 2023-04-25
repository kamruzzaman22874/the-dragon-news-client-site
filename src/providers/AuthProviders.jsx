import React from 'react';
import { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
	const user = null;
	const authInfo = {
		user,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProviders;
