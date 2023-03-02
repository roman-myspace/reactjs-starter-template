import React from 'react'
import {useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthLayout() {
  
    const userDetails = useSelector(state => state.user.data);

    if(userDetails) {        
        return <Outlet />        
    } else {
        return <Navigate to={"/login"} replace={true} />
    }

}
