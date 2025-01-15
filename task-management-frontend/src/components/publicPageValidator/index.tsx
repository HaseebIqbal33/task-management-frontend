import { useAuthContext } from '@/context/authContext/authContext';
import { Box } from '@mui/material';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../routes/routes';

function PublicPageWrapper({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate(APP_ROUTES.HOME);
  }, [isAuthenticated, navigate]);

  return <Box> {children}</Box>;
}

export default PublicPageWrapper;
