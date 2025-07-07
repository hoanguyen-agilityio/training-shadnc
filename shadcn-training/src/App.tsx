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
} from './page';
import { ROUTES } from './constants';
import { Suspense } from 'react';

function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.SIGN_UP}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* only block sign up page after user logs in */}
              <AuthGuard blockIfAuthenticated>
                <SignUpPage />
              </AuthGuard>
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.SIGN_IN}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* only block sign in page after user logs in */}
              <AuthGuard blockIfAuthenticated>
                <LoginPage />
              </AuthGuard>
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.HOME}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <HomePage />
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.SHOP}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <ShopPage />
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.ABOUT}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <AboutPage />
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.CONTACT}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* no guard, freely accessible even if logged out */}
              <ContactPage />
            </Suspense>
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
