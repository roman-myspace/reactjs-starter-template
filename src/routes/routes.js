import React from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'
import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import BlankLayout from '../layouts/BlankLayout';
import Error404 from '../pages/Error404';
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import WithoutAuthLayout from '../layouts/WithoutAuthLayout';
import AuthLayout from '../layouts/AuthLayout';



export default function Routes() {
    /*
        ************ Current URL Path Finder *******************
        const location = useLocation();
        const currentPath = location.pathname;    
    */

    let routes = useRoutes([
        { 
            path: "/", 
            element: <BlankLayout />, 
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <Aboutus /> }                
            ] 
        },  
        {
            path: "/", 
            element: <WithoutAuthLayout />,
            children: [
                { path: "/login", element: <Login /> },
                { path: "/signup", element: <Signup /> },
            ]
        },
        {
            path: "/", 
            element: <AuthLayout />,
            children: [
                { path: "/profile", element: <Profile /> },
                { path: "/settings", element: <Settings /> },   
            ]
        },        
        { path: "*", element: <Error404 /> },        
      ]);
    

      return routes;

}
