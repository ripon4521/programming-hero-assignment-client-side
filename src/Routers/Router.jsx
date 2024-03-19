import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";

import SignUp from "../Pages/SighnUp/SignUp";
import Login from "../Pages/Login/Login";
import  ApplicationFrom  from "../Components/JoinApplicationFrom/ApplicationFrom"
import Private from "../Private/Private";


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
         },{
          path:'/joinUs',
          element:<Private><ApplicationFrom/></Private>
         }
         
       ]
     
    }
  ]);