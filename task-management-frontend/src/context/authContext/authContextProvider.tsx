import { PropsWithChildren, useEffect, useState } from 'react';
import { AuthContextContainer } from './authContext';
import { IAuth } from './type';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function AuthContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<IAuth['user']>(null);
  const { setItem, item, clearStorage } = useLocalStorage('AUTH_TOKEN');

  const { setItem: setUserInStorage, item: userFromStorage } =
    useLocalStorage('USER');

  useEffect(() => {
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, [userFromStorage]);

  const login = (token: string, user: IAuth['user']) => {
    setItem(token);
    setUser(user);
    setUserInStorage(JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    clearStorage();
  };

  return (
    <AuthContextContainer
      value={{ user, isAuthenticated: !!user && !!item, login, logout }}
    >
      {children}
    </AuthContextContainer>
  );
}

export default AuthContextProvider;
