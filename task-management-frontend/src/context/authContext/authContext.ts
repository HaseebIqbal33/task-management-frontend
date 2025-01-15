import React, { useContext } from 'react';
import { IAuth } from './type';

export const AuthContext = React.createContext({} as IAuth);
export const AuthContextContainer = AuthContext.Provider;

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within AuthContextProvider');
  }
  return authContext;
};
