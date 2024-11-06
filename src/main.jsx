import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import ProductDetils from './Components/ProductDetails/ProductDetils';
import DashboardDetails from './Components/DashboardDetails/DashboardDetails';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'gadgets/:product_id',
        element: <ProductDetils></ProductDetils>,
        loader: () => fetch('/categoryData.json')
      },
      {
        path: 'dashboardDetils',
        element: <DashboardDetails></DashboardDetails>,
        loader: () => fetch('/categoryData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
