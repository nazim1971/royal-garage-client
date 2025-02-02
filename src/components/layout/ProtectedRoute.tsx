import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, } from 'react-router';
import { selectCurrentUser, TUser, useCurrentToken } from '../../redux/features/auth/authSlice';

type PrivateRoute = {
  allowedRoles: string[];
  children: React.ReactNode; 
};

const ProtectedRoute: React.FC <PrivateRoute> = ( {allowedRoles = [],children} ) => {
    const token = useSelector(useCurrentToken);
    const user: TUser| null= useSelector(selectCurrentUser);
    
    if (!token) {
      return <Navigate to="/login" replace></Navigate>
    }
    if (allowedRoles.length && (!user?.role || !allowedRoles.includes(user?.role))) {
        return <Navigate to='/unauthorized' replace />
  }
  return <>{children}</>;
}

export default ProtectedRoute