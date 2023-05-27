import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppBar } from './Header/AppBar/AppBar';
import { Footer } from './Footer/Footer';

import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
