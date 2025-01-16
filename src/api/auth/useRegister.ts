import { useMutation } from '@tanstack/react-query';
import { authClient } from './authClient';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@/components/routes/routes';

function useRegister() {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['Register'],
    mutationFn: (body: Record<string, string>) =>
      authClient.post('/register', body),
    onSuccess: () => {
      toast.success('Registered successfully, Login to continue');
      navigate(APP_ROUTES.LOGIN);
    },
  });
}

export default useRegister;
