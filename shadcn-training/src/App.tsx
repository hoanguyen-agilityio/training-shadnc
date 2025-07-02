import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@/components';
import { HomePage } from './page';

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
    </Routes>
  );
}

export default App;
