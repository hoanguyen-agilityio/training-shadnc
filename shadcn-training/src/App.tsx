import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
import { HomePage, LoginPage, ShopPage } from './page';
import { ROUTES } from './constants';
import { Suspense } from 'react';

function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.SIGN_IN}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.HOME}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <HomePage />
          </ThemeProvider>
        }
      />
      <Route
        path={ROUTES.SHOP}
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <ShopPage />
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
