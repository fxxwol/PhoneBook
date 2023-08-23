import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import { Container } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authThunk';
import { RestrictedRoute } from './RestricredRoute';
import { PrivateRoute } from './PrivateRoute';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

function App() {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Container>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
}

export default App;
