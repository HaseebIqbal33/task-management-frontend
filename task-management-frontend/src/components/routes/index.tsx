import { useAuthContext } from '@/context/authContext/authContext';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

function AppRoutes() {
  const { isAuthenticated } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route path='/register' index element={<RegisterPage />} />
        <Route path='/login' index element={<LoginPage />} />
        <Route
          path='/'
          index
          element={isAuthenticated ? <HomePage /> : <Navigate to={'/login'} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
