import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpForm from "./pages/signUp/SignUp";
import LoginForm from "./pages/login/Login";
import Ecommerce from "./pages/ecommerce/Ecommerce";



const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/eStore",
    element: <Ecommerce />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}