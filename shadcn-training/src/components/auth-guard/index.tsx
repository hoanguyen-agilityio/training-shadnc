import { ROUTES } from '@/constants';
import { Navigate } from 'react-router-dom';

interface IAuthGuard {
  children: React.ReactNode;
  requiresAuth?: boolean;
}

export const AuthGuard = ({ children, requiresAuth = true }: IAuthGuard) => {
  const isLoggedIn = !!localStorage.getItem('token');
  const test = localStorage.getItem('token');
  console.log({ test });

  if (requiresAuth && !isLoggedIn) {
    // protect *private* pages
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  if (!requiresAuth && isLoggedIn) {
    // user is logged in but visiting a public page, redirect to HOME
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // if no block conditions
  return <>{children}</>;
};
