import { useMutation } from '@tanstack/react-query';

import { authClient } from './authClient';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/authContext/authContext';
import { ResponseT } from '@/types';
import { APP_ROUTES } from '@/components/routes/routes';
import { toast } from 'react-toastify';

function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  return useMutation({
    mutationKey: ['LOGIN'],
    mutationFn: (body: { email: string; password: string }) =>
      authClient.post<
        ResponseT<{
          token: string;
          user: { _id: string; name: string; email: string };
        }>
      >('/login', body),

    onSuccess: (data) => {
      console.log(data, 'DATA');
      if (data?.data?.token && data?.data?.user) {
        console.log('here');
        login(data?.data?.token, data?.data?.user);
        navigate(APP_ROUTES.HOME);
      }
    },
    onError: (error) => {
      console.log(error, 'ERROR');
      toast.error('Login Error, Wrong Credentials');
    },
  });
}

export default useLogin;
