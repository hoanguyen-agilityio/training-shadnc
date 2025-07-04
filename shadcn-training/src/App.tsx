import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
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
              <SignUpPage />
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.SIGN_IN}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
              <LoginPage />
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.HOME}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<LoadingPage />}>
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
              <ShopPage />
            </Suspense>
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
