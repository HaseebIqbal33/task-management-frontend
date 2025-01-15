import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Typography from '@mui/material/Typography';
import Input from '@/ui-resusable/input';
import Button from '@/ui-resusable/button';
import { Formik } from 'formik';

import { validationSchema } from './validationSchema';
import { Link } from 'react-router-dom';
import useRegister from '@/api/auth/useRegister';

const initialValues = { email: '', password: '', name: '' };

const RegisterCard = () => {
  const { mutate: register } = useRegister();

  const onSubmitLogin = (values: typeof initialValues) => {
    register(values);
  };

  return (
    <Card sx={{ minWidth: 275, width: '500px' }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Register
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
                  type='text'
                  placeholder='Enter your name'
                  value={values.name}
                  name='name'
                  onChange={handleChange}
                  error={!!errors.name}
                  errorMessage={errors.name}
                />
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
                  <Button type='submit'>Register</Button>
                </CardActions>
              </form>
            );
          }}
        </Formik>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign={'center'}
          >
            already have an account? sign in
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RegisterCard;
