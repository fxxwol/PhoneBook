import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

function Layout() {
  return (
    <>
          <AppBar />
          <Suspense>
              <Outlet/>
          </Suspense>
    </>
  );
}

export default Layout