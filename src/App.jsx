import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUserThunk } from './redux/auth/auth-thunk';
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { PrivateRoute } from '../src/components/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../src/components/PrivateRoute/PublicRoute/PublicRoute';
import { Layout } from './components/Layout/Layout';

const RegisterPage = lazy(() => import('./pages/RegisterPages/RegisterPages'));
const LoginPage = lazy(() => import('./pages/LoginPages/LoginPages'));
const ContactsPage = lazy(() => import('./pages/ContactsPages/ContactsPages'));


export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(refreshUserThunk()).unwrap()
    .then(() => {
      navigate('/contacts');
    })
  }, [dispatch, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};