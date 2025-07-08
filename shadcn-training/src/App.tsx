import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthGuard, ThemeProvider } from '@/components';
import {
  HomePage,
  LoginPage,
  ShopPage,
  LoadingPage,
  SignUpPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
} from './page';
import { ROUTES } from './constants';
import { Suspense } from 'react';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <Suspense fallback={<LoadingPage />}>
              {/* only block sign up page after user logs in */}
              <AuthGuard blockIfAuthenticated>
                <SignUpPage />
              </AuthGuard>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <Suspense fallback={<LoadingPage />}>
              {/* only block sign in page after user logs in */}
              <AuthGuard blockIfAuthenticated>
                <LoginPage />
              </AuthGuard>
            </Suspense>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SHOP}
          element={
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <ShopPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CONTACT}
          element={
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingPage />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
