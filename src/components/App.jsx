import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layot';

const HomePage = lazy(() => import('../pages/Home'));
const ShoppingCartPage = lazy(() => import('../pages/ShoppingCart'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shopping-cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
