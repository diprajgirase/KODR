import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../layouts/AuthLayout';

const AppRouter = () => {

    const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
        {
            index: true,
            element: <login/>
        },
        {
            path: /register,
            element: <register/>
        }
    ]
  },
  
]);

  return   <RouterProvider router={router} />,
}

export default AppRouter