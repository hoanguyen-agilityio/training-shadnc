import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthGuard, ThemeProvider } from '@/components';
import { HomePage, LoginPage, ShopPage, LoadingPage, SignUpPage } from './page';
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
              {/* public page */}
              <AuthGuard requiresAuth={false}>
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
              {/* public page */}
              <AuthGuard requiresAuth={false}>
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
              {/* private page */}
              <AuthGuard requiresAuth={true}>
                <HomePage />
              </AuthGuard>
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.SHOP}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              {/* private page */}
              <AuthGuard requiresAuth={true}>
                <ShopPage />
              </AuthGuard>
            </Suspense>
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
