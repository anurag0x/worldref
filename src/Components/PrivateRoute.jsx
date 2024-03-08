import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token") || "";
 

 if(!token){

   return  window.location.href="/login"
 }
 return children
};

export default PrivateRoute;
