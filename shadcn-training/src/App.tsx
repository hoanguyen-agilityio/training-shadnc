import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu, ThemeProvider } from '@/components';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Menu />
          </ThemeProvider>
        }
      />
    </Routes>
  );
}

export default App;
