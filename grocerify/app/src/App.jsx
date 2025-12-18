import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import Fruits from './components/Fruits/fruits';
import Dairy from './components/Dairy/dairy';
import SeaFood from './components/SeaFood/seafood';
import AllProducts from './components/AllProducts/AllProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'fruits',
        element: <Fruits />,
      },
      {
        path: 'dairy',
        element: <Dairy />,
      },
      {
        path: 'seafood',
        element: <SeaFood />,
      },
      {
        path: 'allproducts',
        element: <AllProducts />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
