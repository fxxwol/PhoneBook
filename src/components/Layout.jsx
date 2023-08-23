import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Container } from '@mui/material';

function Layout() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default Layout;
