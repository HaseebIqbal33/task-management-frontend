import { useMutation } from '@tanstack/react-query';

import { authClient } from './authClient';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/authContext/authContext';
import { ResponseT } from '@/types';

function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  return useMutation({
    mutationKey: ['LOGIN'],
    mutationFn: (body: { email: string; password: string }) =>
      authClient.post<
        ResponseT<{
          token: string;
          user: { id: string; name: string; email: string };
        }>
      >('/login', body),

    onSuccess: (data) => {
      console.log(data, 'DATA');
      if (data?.data?.token && data?.data?.user) {
        console.log('here');
        login(data?.data?.token, data?.data?.user);
        navigate('/');
      }
    },
  });
}

export default useLogin;
