import Login from '@/pages/Login/Login';
import Main from '@/pages/Main/Main';
import NotFound from '@/pages/NotFound/NotFound';
import Product from '@/pages/Product/Product';
import Product2 from '@/pages/Product/Product2';
import Product3 from '@/pages/Product/Product3';
import ProductDetail1 from '@/pages/ProductDetail1';
import ProductDetail2 from '@/pages/ProductDetail2';
import Register from '@/pages/Register/Register';
import { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const GlobalRoutes: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/main',
      element: <Main />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/product2',
      element: <Product2 />,
    },
    {
      path: '/product3',
      element: <Product3 />,
    },
    {
      path: '/productDetail1',
      element: <ProductDetail1 />,
    },
    {
      path: '/productDetail2',
      element: <ProductDetail2 />,
    },
    {
      path: '/notfound',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <Navigate to="/main" />,
    },
    {
      path: '*',
      element: <Navigate to="/notfound" />,
    },
  ];

  const routing = useRoutes(routes);
  return routing;
};

export default GlobalRoutes;
