import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/Error/Error";
import LogIn from "./Components/Login/LogIn";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Components/Auth Provider/AuthProvider";
import PrivateRoute from "./Components/Private Route/PrivateRoute";
import ResetPassword from "./Components/Reset Password/ResetPassword";
import DonationDetails from "./Components/Donation Data/DonationDetails";
import Favourite from "./Components/Favourite/Favourite";
import Cart from "./Components/Cart/Cart";
import Statistics from "./Components/Statistics/Statistics";
import Payment from "./Components/Payment/Payment";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<PrivateRoute> <Home></Home></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/forgotpassword",
        element: <ResetPassword></ResetPassword>
      },
      {
        path: "/donation/:id",
        element:<PrivateRoute><DonationDetails></DonationDetails></PrivateRoute> ,
        loader : ({params})=>fetch(`http://localhost:5000/data/${params.id}`)
      },
      {
        path: "/favourite",
        element: <PrivateRoute><Favourite></Favourite></PrivateRoute>
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cart')
      },
      {
        path: "/statistics",
        element: <PrivateRoute><Statistics></Statistics></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cart')
      },
      {
        path: "/statistics",
        element: <PrivateRoute><Statistics></Statistics></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cart')
      },
      {
        path: "/payment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cart')
      
      },
      

    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
