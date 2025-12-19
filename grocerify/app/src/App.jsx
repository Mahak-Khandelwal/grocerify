import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dairy from './components/Dairy/dairy.jsx';
import Fruits from './components/Fruits/fruits.jsx';
import Home from './components/Home/home.jsx';
import Layout from './components/Layout/Layout.jsx';
import Seafood from './components/SeaFood/SeaFood.jsx';
import AllProducts from './components/AllProducts/AllProducts.jsx';

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
        element: <Seafood />,
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
