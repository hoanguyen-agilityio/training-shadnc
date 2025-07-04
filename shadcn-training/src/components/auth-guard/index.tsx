import { ROUTES } from '@/constants';
import { Navigate } from 'react-router-dom';

interface IAuthGuard {
  children: React.ReactNode;
  blockIfAuthenticated?: boolean; // rename for clarity
}

export const AuthGuard = ({ children, blockIfAuthenticated = false }: IAuthGuard) => {
  const isLoggedIn = !!localStorage.getItem('token');

  if (blockIfAuthenticated && isLoggedIn) {
    // user is logged in, but tries to go to sign-in or sign-up page
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // otherwise, allow
  return <>{children}</>;
};
