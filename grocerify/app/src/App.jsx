import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/home.jsx';
import Fruits from './components/Fruits/fruits.jsx';
import Dairy from './components/Dairy/dairy.jsx';

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
