import React from 'react'
import { useAuth } from './Authentication'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
  const {isAuthenticated} = useAuth();

  if(!isAuthenticated){
    return <Navigate to="/"/>;
  }

  return children;
}

export default ProtectedRoutes