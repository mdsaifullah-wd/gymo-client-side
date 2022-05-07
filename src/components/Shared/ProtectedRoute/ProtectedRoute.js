import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <p>Loading..</p>;
  }
  if (!user?.email) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
