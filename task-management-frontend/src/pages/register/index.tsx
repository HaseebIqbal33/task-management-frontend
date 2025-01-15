import { Box } from '@mui/material';

import PublicPageWrapper from '@/components/publicPageValidator';
import { styles } from '../login/styles';
import RegisterCard from '@/components/register/registerCard';

function LoginPage() {
  return (
    <PublicPageWrapper>
      <Box sx={styles.container}>
        <RegisterCard />
      </Box>
    </PublicPageWrapper>
  );
}

export default LoginPage;
