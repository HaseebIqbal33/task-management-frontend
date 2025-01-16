import LoginCard from '@/components/login/loginCard';
import { Box } from '@mui/material';
import { styles } from './styles';
import PublicPageWrapper from '@/components/publicPageValidator';

function LoginPage() {
  return (
    <PublicPageWrapper>
      <Box sx={styles.container}>
        <LoginCard />
      </Box>
    </PublicPageWrapper>
  );
}

export default LoginPage;
