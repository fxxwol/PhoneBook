import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Container } from '@mui/material';
import Notiflix from 'notiflix';
import { useEffect } from 'react';

function Layout() {
  useEffect(() => {
    Notiflix.Notify.init({
      showOnlyTheLastOne: true,
      distance: '10px',
      position: 'right-bottom',
      timeout: '7000',
      clickToClose: 'true',
      fontFamily: 'Roboto',
      fontSize: '16px',
      cssAnimationStyle: 'from-right',
    });
  }, []);

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
