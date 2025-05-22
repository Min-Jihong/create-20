import React, { ReactNode } from 'react';

interface AuthWrapperProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (<div className='p-4'>{children}</div>) : (<p className='max-w-md mx-auto my-8 p-4 bg-red-100 text-red-700 rounded shadow'>Please log in to view this page.</p>);
};

export default AuthWrapper;