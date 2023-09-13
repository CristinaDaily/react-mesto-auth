import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Main from './Main.jsx';

const ProtectedRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to='/sign-in' replace />
  );
};

export default ProtectedRoute;
