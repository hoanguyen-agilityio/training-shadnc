import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
import { HomePage, ShopPage } from './page';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <HomePage />
          </ThemeProvider>
        }
      />
      <Route
        path="/shop"
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
