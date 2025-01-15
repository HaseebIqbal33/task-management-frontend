import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Typography from '@mui/material/Typography';
import Input from '@/ui-resusable/input';
import Button from '@/ui-resusable/button';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import useLogin from '@/api/auth/useLogin';
import { Link } from 'react-router-dom';

const initialValues = { email: '', password: '' };

const LoginCard = () => {
  const { mutate: login } = useLogin();

  const onSubmitLogin = (values: typeof initialValues) => {
    login(values);
  };

  return (
    <Card sx={{ minWidth: 275, width: '500px' }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Login
        </Typography>
        <Formik
          onSubmit={onSubmitLogin}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit, errors }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  value={values.email}
                  name='email'
                  onChange={handleChange}
                  error={!!errors.email}
                  errorMessage={errors.email}
                />
                <Input
                  type='password'
                  placeholder='Enter your password'
                  value={values.password}
                  name='password'
                  onChange={handleChange}
                  error={!!errors.password}
                  errorMessage={errors.password}
                />
                <CardActions
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <Button type='submit'>Login</Button>
                </CardActions>
              </form>
            );
          }}
        </Formik>
        <Link to={'/register'} style={{ textDecoration: 'none' }}>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign={'center'}
          >
            does not have an account? sign up
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
