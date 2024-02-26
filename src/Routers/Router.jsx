import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";

import SignUp from "../Pages/SighnUp/SignUp";
import Login from "../Pages/Login/Login";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:
       [
        {
            path:'/' ,
            element:<Home></Home>
         },
         {
          path:'/signUp',
          element:<SignUp></SignUp>
         },{
          path:'/login',
          element:<Login></Login>
         }
       ]
     
    }
  ]);