// Libs
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';

// Constants
import { ROUTES } from '@/constants';

// Pages
import {
  HomePage,
  LoginPage,
  ShopPage,
  LoadingPage,
  SignUpPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
} from '@/page';

// Components
import { AuthGuard, ThemeProvider, ErrorBoundary } from '@/components';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ErrorBoundary>
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
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
