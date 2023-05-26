import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from './Header/AppBar/AppBar';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
